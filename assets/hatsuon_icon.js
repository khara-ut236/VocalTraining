import React from "react";
import {
    Svg,
    Defs,
    Use,
    Path
} from 'react-native-svg';

function HatsuonIcon({height=174.49, color="#000"}) {
    var ori_width = 271.31;
    var ori_height = 174.49;
    var width = ori_width * height / ori_height;
    var n = 2; 
    var width = Math.floor( width * Math.pow( 10, n ) ) / Math.pow( 10, n ) ;
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
        viewBox="3.99 0.973 289.167 198.055"
      >
        <Defs>
          <Path id="a2ax3b8dg" d="M181.59 147.84l-80.26-42.94 80.26-47.25"></Path>
          <Path
            id="a1xQPckq2f"
            d="M181.59 143.54c-19.33 34.68-48.78 50.56-88.33 47.65-59.32-4.37-80.42-34.98-81.74-91.03C10.2 44.11 48.44 14.84 99.77 9.02c34.22-3.89 61.5 13.11 81.82 51"
          ></Path>
          <Path
            id="abCFunBQ31"
            d="M136.28 51.87c0 12.96-10.1 23.49-22.54 23.49S91.19 64.83 91.19 51.87c0-12.96 10.11-23.48 22.55-23.48 12.44 0 22.54 10.52 22.54 23.48z"
          ></Path>
          <Path
            id="a6axCaPvwc"
            d="M208.58 142.86c22.22-20.2 22.22-43.44 0-69.7"
          ></Path>
          <Path
            id="d6APDkm9ch"
            d="M240.05 151.07c22.22-26.14 22.22-56.2 0-90.19"
          ></Path>
          <Path
            id="ahWvZGDTS"
            d="M268.99 163.19c22.22-33.17 22.22-71.31 0-114.43"
          ></Path>
        </Defs>
        <Use
          fillOpacity="0"
          stroke={color}
          strokeWidth="15"
          xlinkHref="#a2ax3b8dg"
        ></Use>
        <Use
          fillOpacity="0"
          stroke={color}
          strokeWidth="4"
          xlinkHref="#dtkpCcS0k"
        ></Use>
        <Use
          fillOpacity="0"
          stroke={color}
          strokeWidth="15"
          xlinkHref="#a1xQPckq2f"
        ></Use>
        <Use
          fillOpacity="0"
          stroke={color}
          strokeWidth="15"
          xlinkHref="#abCFunBQ31"
        ></Use>
        <Use
          fillOpacity="0"
          stroke={color}
          strokeWidth="15"
          xlinkHref="#a6axCaPvwc"
        ></Use>
        <Use
          fillOpacity="0"
          stroke={color}
          strokeWidth="15"
          xlinkHref="#d6APDkm9ch"
        ></Use>
        <Use
          fillOpacity="0"
          stroke={color}
          strokeWidth="15"
          xlinkHref="#ahWvZGDTS"
        ></Use>
      </Svg>
    );
}

export default HatsuonIcon;