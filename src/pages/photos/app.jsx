import React, { useState } from "react";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Lc from "../home/image/lc.gif";
import Imagens from "../../components/imagem/app";
import { Link } from "react-router-dom";
//import foto1 from "../../components/imagem/image/pgfoto1.jpg";
//import foto2 from "../../components/imagem/image/pgfoto2.jpg";
//import foto3 from "../../components/imagem/image/pgfoto3.jpg";
//import foto4 from "../../components/imagem/image/pgfoto4.jpg";

//var data = new Date("December 17, 1995 03:08:08");

export default function Fotosleila() {
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
        <div className="aba">
          <a href="mailto:carlateixeiraoficial@gmail.com.br?subject=Duvida - Divulgação de conteudo">
            Email
          </a>
          <Link id="acessoria" to={"/"}>Home</Link> 
          <a  href="https://instagram.com/geiselaynne?igshid=YmMyMTA2M2Y=">Assessoria</a>
          <img id="gif" src={Lc} alt="Leila Carla" />
        </div>
      ) : (
        false
      )}
      <div className="fotos">
        <Imagens className="im"/>
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
        <Imagens className="im" />
      </div>
    </div>
  );
}
