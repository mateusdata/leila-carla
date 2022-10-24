import React, { useState } from "react";
import "./style.css";
import Instagran from "./image/instagram.png";
import Kwai from "./image/kwai.png";
import Tiktok from "./image/tiktok.png";
import Usuario from "./image/leila.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Lc from "./image/lc.gif";
import FormDialog from "../../components/app";



export default function Home() {
  const [menu, setMenu] = useState(null);
  const [buttonLogin, setButtonLogin] = useState(false);

  function botaoMenu() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }
  function login() {
    /*var email = prompt("Informe o email:");
    var senha = prompt("Agora a senha:");

    if (email === "leilacarla17.00@gmail.com" && senha === "mateus") {
      window.location = "https://datarespostas.vercel.app/login.html";
    } else {
      alert("Usuario ou senha invalido!");
    }*/
    if(buttonLogin){
      console.log("entrou "  + buttonLogin);
      setButtonLogin(false);
      console.log("entrou "  + buttonLogin);
    }
    else{
      setButtonLogin(true);
      console.log("entrou" +   + buttonLogin);

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
        <div className="aba">
          <a href="/">Sobre</a>
          <a href="/">Contato</a>
          <a href="/">Ajuda</a>
          <img id="gif" src={Lc} alt="Leila Carla" />
        </div>
      ) : (
        false
      )}

      <div className={menu ? "borrar" : "home"}>

    {buttonLogin ?  <FormDialog/> : false}
   

        <div id="app">
          <img id="usuario" src={Usuario} alt="leila" /> <br /> <br />
          <h1>Leila Carla</h1>
          <p>Me acompanhem nas outras redes</p>
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
