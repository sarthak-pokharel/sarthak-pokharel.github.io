import React from "react";
import Typewriter from "typewriter-effect";

import usermetadata from "../usercontrol.json";

let typewritterstyles = `


.Typewriter__wrapper {
  font-size: 2.2em !important;
  color: #be6adf !important;
  font-weight: 600 !important;
}
.Typewriter__cursor {
  font-size: 2.4em !important;
  color: #b562d6 !important;
}

@media (max-width: 767px) {
  .Typewriter__wrapper {
    font-size: 1.4em !important;
    font-weight: 500 !important;
    position: absolute !important;
  }
  .Typewriter__cursor {
    display: none !important;
  }
}
`;


function Type() {
  return (
    <>
    <Typewriter
      options={{
        strings: usermetadata.titles,
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
        delay:10
      }}
    />


    <style>

      {typewritterstyles}
    </style>
    </>
  );
}

export default Type;