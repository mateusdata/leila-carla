import React, { useEffect, useState } from "react";
import "./style.css";
import Instagran from "./image/instagram.png";
import Kwai from "./image/kwai.png";
import Tiktok from "./image/tiktok.png";
import Usuario from "./image/leila.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Lc from "./image/lc.gif";
import Pfoto from "./image/leila1.jpeg";
import Sfoto from "./image/leila2.jpeg";
import Tfoto from "./image/leila3.jpeg";
import Niver from "./image/niver.jpeg";
import FormDialog from "../../components/app";
import { Link } from "react-router-dom";
import { ClockLoader, PuffLoader } from "react-spinners";

var data = new Date();
//var data = new Date("December 17, 1995 03:08:08");
let diaSemana = data.getDay();
let objFotos = [Usuario, Sfoto, Pfoto, Usuario, Niver, Sfoto, Tfoto];
let semana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
export default function Home() {
  const [load, setLoad] = useState(true);
  const [menu, setMenu] = useState(null);
  const [buttonLogin, setButtonLogin] = useState(false);
  const [updateImages, setUpdateImages] = useState(objFotos[diaSemana]);

  useEffect(() => {
    setTimeout(() => {
      if (load) {
        setLoad(false);
      }
    }, 500);
  }, [load]); // eslint-disable-next-line
  function atualizarImagens() {
    let randomic = Math.floor(Math.random() * 6);
    setUpdateImages(objFotos[randomic]);
  }

  function botaoMenu() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  /*function atualizarImagens() {
    let objFotos = [Pfoto, Usuario, Sfoto, Tfoto, Niver];

     setInterval(() => {
      let randomic = Math.floor(Math.random() * 5);
      setUpdateImages(objFotos[randomic]);
    }, 2000);
  }
  function botaoMenu() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }*/
  function login() {
    if (buttonLogin) {
      setButtonLogin(false);
    } else {
      setButtonLogin(true);
    }
  }

  return (
    <div>
      <div className="botao">
        <button onClick={botaoMenu}>
          {menu ? <CloseIcon /> : <MenuIcon />}{" "}
        </button>

        <button onClick={login}>
          <AccountCircleSharpIcon
            style={{ marginRight: "50%", color: "rgb(223, 215, 215)" }}
          />
        </button>
      </div>

      {menu ? (
        <div className="aba" >
          <a
            id="acessoria"
            href="mailto:carlateixeiraoficial@gmail.com.br?subject=Duvida - Divulgação de conteudo"
          >
            Email
          </a>
          <Link id="acessoria" to={"/fotos"}>
            Fotos
          </Link>
          <a href="https://instagram.com/geiselaynne?igshid=YmMyMTA2M2Y=">
            Assessoria
          </a>
          <img id="gif" src={Lc} alt="Leila Carla" />
        </div>
      ) : (
        false
      )}
      {load && (
            <div className="loader">
              <PuffLoader color="blue" size={80} />
            </div>
          )}
      <div style={ load? {display:"none"}: {display:"flex"} } className={menu ? "borrar" : "home"}>
        {buttonLogin ? <FormDialog /> : false}

        <div id="app" >
         
          <img
            onClick={atualizarImagens}
            id="usuario"
            src={updateImages}
            alt="leila"
          />{" "}
          <br /> <br />
          <h1>Leila Carla</h1>
          <p>Me acompanhem nas outras redes</p>
          <div  style={{  display:"flex", }}>
          <p style={{ fontFamily: "verdana", padding: "15px", display:"flex", gap:"5px"}}>
            {" "}
            {semana[diaSemana] +
              " - " +
              data.toLocaleTimeString().slice(0, -3)} <br /> <ClockLoader color="blue" size={20}/>
          </p>
          </div>
        </div>

        <div className="acessoria">
          <a
            id="instagran"
            href="https://www.instagram.com/_carla_diary/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img className="link" src={Instagran} alt="" />
            Instagram
          </a>
          <a
            id="kwai"
            href="https://s.kw.ai/u/EE2AC3Bk"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img className="link" src={Kwai} alt="" />
            Kwai
          </a>
          <a
            id="tiktok"
            href="http://tiktok.com/@leilla_c.t"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img src={Tiktok} className="link" alt="" /> Tiktok
          </a>
        </div>
        <h2 id="nomeUsuario">@_carla_diary</h2>
      </div>
    </div>
  );
}
