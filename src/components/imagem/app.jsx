import React from 'react';
import "./style.css";
//import Pgfoto1 from "./image/pgfoto1.jpg"
//import Pgfoto2 from "./image/pgfoto2.jpg"
import Pgfoto3 from "./image/pgfoto3.jpg"
import Pgfoto4 from "./image/pgfoto4.jpeg"
import { Avatar } from '@mui/material';
import { deepOrange} from '@mui/material/colors';



//import Pgfoto2 from "./image/pgfoto1.jpg"
//import Pgfoto3 from "./image/pgfoto1.jpg"


export default function Imagens(){
    return (
        <div className='imgVazia'>
            <img className='logo' src={Pgfoto4} alt="" /> 
            <p  id="pp">  @carla_diary </p>  
            <Avatar sx={{ bgcolor: deepOrange[500] }} style={{marginRight:"3px", fontSize:"12px", height:"30px", width:"30px"}}>LC</Avatar>
          
            {<img className='imagemLeila' src={Pgfoto3} alt="" />}
            
        </div>
    );
}