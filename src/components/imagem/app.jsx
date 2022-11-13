import React from 'react';
import "./style.css";
import Pgfoto1 from "./image/pgfoto1.jpg"
//import Pgfoto2 from "./image/pgfoto1.jpg"
//import Pgfoto3 from "./image/pgfoto1.jpg"


export default function Imagens(){
    return (
        <div className='imgVazia'>
            {<img src={Pgfoto1} alt="" />}
        </div>
    );
}