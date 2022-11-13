import React from 'react';
import "./style.css";
//import Pgfoto1 from "./image/pgfoto1.jpg"
//import Pgfoto2 from "./image/pgfoto2.jpg"
import Pgfoto4 from "./image/pgfoto4.jpeg"
import { Avatar } from '@mui/material';
import { deepOrange} from '@mui/material/colors';



//import Pgfoto2 from "./image/pgfoto1.jpg"
//import Pgfoto3 from "./image/pgfoto1.jpg"


export default function Imagens(props){
    function irParaInstagran(){
        window.location = "https://www.instagram.com/_carla_diary/";
    }
    return (
        <div className='imgVazia'>
           
            <img  onClick={irParaInstagran} className='logo' src={Pgfoto4} alt="" /> 
            <p  id="pp">  _carla_diary </p>  
            <Avatar sx={{ bgcolor: deepOrange[500] }} style={{marginRight:"3px", fontSize:"12px", height:"30px", width:"30px"}}>LC</Avatar>
            {<img className='imagemLeila' src={props.imagem} alt="" />}           
        </div>
    );
}