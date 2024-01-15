import { useEffect, useState } from "react";
import UnderConstruction from "../../UnderContruction";
import usermetadata from '../../usercontrol.json';
import { Backdrop, Button, Chip, CircularProgress, Divider, IconButton, List, ListItem, Typography } from "@mui/material";
import { Markup } from "react-render-markup";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { CheckRounded, ChevronLeft, Home, MenuBook, RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import './BlogsPage.css';




function BlogCard({ blogContent }) {

    return <>

        <div style={{
            minHeight: 200,
            maxWidth: 650,
            width: '95%',
            margin: "auto",
            boxShadow: "0 0 10px -2px grey",
            borderRadius: 20,
            padding: '2em'
        }}>
            {/* <Typography variant="h5">{blogContent.title}</Typography> */}
            <div>
                <Markdown children={blogContent.content} rehypePlugins={[rehypeRaw]}></Markdown>

            </div>
        </div>

    </>
}

function BlogShortDescrip({ blogInfo, divider,activeLabels, setActiveLabels, openBlog,i }) {
    let [currentLabelFilter, setCurrentLabelFilter] = useState("");
    let setLabelFilter = function (v) {
        setActiveLabels([v]);
    };
    return <>
        <div style={{
            minHeight: 150,
            marginBottom: 10
        }}>
            <Typography variant="h6" style={{ display: "flex", justifyContent: 'space-between' }}>
                <div>{blogInfo.title}</div><Typography variant="overline">({blogInfo.published_date})</Typography>
            </Typography>
            <div style={{ marginBottom: 7 }}>
                {blogInfo.labels.map((label, i) => {
                    return <Chip key={i} onClick={() => setLabelFilter(label)} label={label} />
                })}
            </div>
            <Typography>
                {blogInfo.short_description}...
            </Typography>
            <div style={{ textAlign: 'right' }}>
                <Button size="medium" variant="outlined" onClick={e=>openBlog(i)}>Read Blog</Button>
            </div>
        </div>
        {divider ? <Divider sx={{ borderBottomWidth: 1, borderBottomColor: "#000" }} /> : <></>}
        {/* <br/> */}
    </>
}

function BlogsListPage({ activeLabels, setActiveLabels, availableLabels,openBlog }) {
    let toggleLabel = function(v){
        if(activeLabels.includes(v)){
            let ind = activeLabels.indexOf(v);
            activeLabels.splice(ind, 1);
            setActiveLabels([...activeLabels]);
            return;
        };
        activeLabels.push(v);
        setActiveLabels([...activeLabels]);
    };
    let isChecked = function(v){
        if(activeLabels.includes(v)){
            return false;
        }
        return true;
    }
    
    return <>
        <div style={{ display: 'flex',flex:'0 0 auto', margin: 10, marginTop: 50, padding: 42, gap: 50 }} className="blogsListPage">
            <div style={{ width: '60%' }} className="blogsListContainer">
                <Typography variant="h5">
                    <b>Blogs</b>
                </Typography>
                <br/>
                <div>
                    {usermetadata.blogs.filter(blog => {
                        return activeLabels.map(v=>blog.labels.includes(v)).includes(true);
                    }).map((blog, i) => {
                        return <BlogShortDescrip {...{activeLabels, setActiveLabels, i,openBlog}} blogInfo={blog} key={i} divider={(i + 1) == usermetadata.blogs.length ? false : true} />
                    })}
                </div>
            </div>
            <div className="filterPage" style={{ textAlign: 'center', width: '40%' }}>
                <Typography variant="h5" className="filtersTitle">Filters</Typography>
                <div style={{display:'flex', flexWrap:'wrap', gap:10}} className="filterClips">
                    {availableLabels.map((label,i)=>{
                        return <Chip key={i} variant={isChecked(label)?"outlined":"contained"} label={label} onClick={e=>toggleLabel(label)} icon={!isChecked(label)?<RadioButtonChecked/>:<RadioButtonUnchecked/>}/>
                    })}
                </div>
                <br/>
                <div style={{textAlign:'center'}} className="filterToolkit" >
                    {activeLabels.length==0?<Button variant="outlined" onClick={e=>setActiveLabels([...availableLabels])}>SELECT ALL</Button>:<Button variant="outlined" onClick={e=>setActiveLabels([])}>CLEAR</Button>}
                </div>
            </div>
        </div>
    </>
}

function BlogLoadingIcon({ show }) {
    return <>
        <Backdrop open={show} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <CircularProgress color="inherit" />
        </Backdrop>
    </>
}


export default function BlogsPage() {
    let [currentDispBlog, setCurrentDispBlog] = useState(-1);
    let [currentBlogContent, setCurrentBlogContent] = useState(null);
    let [showBlogLoading, setShowBlogLoading] = useState(false);
    let [activeLabels, setActiveLabels] = useState([]);

    let availableLabels = [...new Set(usermetadata.blogs.map(blog => blog.labels).flat(2))];

    let goToBlogsHome = function () {
        setCurrentDispBlog(-1);
        setCurrentBlogContent(null);
    };
    let loadBlog = async function (blogLink) {
        return (await axios.get(blogLink)).data;
    };

    useEffect(() => {
        setActiveLabels([...availableLabels]);
    }, []);
    useEffect(function () {
        if (currentDispBlog == -1) return;
        (async function () {
            let toLoadLink = usermetadata['blogs'][currentDispBlog].link;
            
            if(!toLoadLink) {
                setCurrentDispBlog(-1);
                return;
            } ;
            setShowBlogLoading(true);
            let v = await loadBlog(toLoadLink);
            setShowBlogLoading(false);
            setCurrentBlogContent(v);
        })();
    }, [currentDispBlog]);
    let openBlog = function(i){
        setCurrentDispBlog(i);
    }

    return <>
        {currentDispBlog == -1 ? <>

            <BlogsListPage {...{ activeLabels, setActiveLabels,availableLabels,openBlog }} />

        </> : <>

            <BlogLoadingIcon show={showBlogLoading} />

            <div style={{
                maxWidth: 650,
                width: '95%',
                margin: "auto",
                marginTop: 40,
                marginBottom: 10
            }}>
                <IconButton onClick={goToBlogsHome}>
                    <ChevronLeft fontSize="medium" />&nbsp;
                    <Typography>BLOGS</Typography>
                </IconButton>
            </div>

            <BlogCard blogContent={{
                title: usermetadata['blogs'][currentDispBlog].title,
                content: currentBlogContent
            }} />

        </>
        }
    </>
}