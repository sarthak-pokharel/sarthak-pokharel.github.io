import { Typography } from "@mui/material";
import { AiFillWarning } from "react-icons/ai";

export default function UnderConstruction(){
    return (<>

    <div style={{
        textAlign:'center',
        display:'flex', 
        height:'50%', 
        width: "70%", 
        margin:'auto',
        flexDirection:'column', 
        justifyContent:'center'
    }}>
        <div>
            <AiFillWarning size={200} />
        </div>
        <br/>
        <Typography variant="h4">
                This page is under construction.
        </Typography>
        <br/>
        <Typography>
            The audience is strongly advised to have a little patience.
        </Typography>
    </div>
    </>)
}