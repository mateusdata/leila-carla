import React, { useEffect, useState } from "react";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Lc from "../home/image/lc.gif";
import Imagens from "../../components/imagem/app";
import { Link } from "react-router-dom";
//import foto1 from "../../components/imagem/image/pgfoto1.jpg";
import foto2 from "../../components/imagem/image/pgfoto2.jpg";
import foto3 from "../../components/imagem/image/pgfoto3.jpg";
//import foto4 from "../../components/imagem/image/pgfoto4.jpeg";
import foto5 from "../../components/imagem/image/pgfoto5.jpg";
import foto6 from "../../components/imagem/image/pgfoto6.jpg";
import foto7 from "../../components/imagem/image/pgfoto7.jpg";
import foto8 from "../../components/imagem/image/pgfoto8.jpg";
import foto9 from "../../components/imagem/image/pgfoto9.jpg";
import foto10 from "../../components/imagem/image/pgfoto10.jpg";
import foto11 from "../../components/imagem/image/pgfoto11.jpg";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { PuffLoader } from "react-spinners";
//var data = new Date("December 17, 1995 03:08:08");
const arrayFotos = [
  foto3,
  foto11,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
  foto2,
];
export default function Fotosleila() {
  const [load, setLoad] = useState(true);
  const [menu, setMenu] = useState(null);
  const [buttonLogin, setButtonLogin] = useState(false);
  const [curtir, setCurtir] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (load) {
        setLoad(false);
      }
    }, 1200);
  }, [load]);

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
  function curtirFoto() {
    if (curtir) {
      setCurtir(false);
    } else {
      setCurtir(true);
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
      {load && (
        <div className="loader">
          <PuffLoader color="blue" size={80} />
        </div>
      )}
      {menu ? (
        <div className="aba">
          <a href="mailto:carlateixeiraoficial@gmail.com.br?subject=Duvida - Divulgação de conteudo">
            Email
          </a>
          <Link id="acessoria" to={"/"}>
            Home
          </Link>
          <a href="https://instagram.com/geiselaynne?igshid=YmMyMTA2M2Y=">
            Assessoria
          </a>
          <img id="gif" src={Lc} alt="Leila Carla" />
        </div>
      ) : (
        false
      )}
      <div className="fotos" style={ load? {display:"none"}: {display:"flex"} } >
        {arrayFotos.map((foto, index) => {
          return (
            <div onClick={curtirFoto}>
              <Imagens
                key={foto}
                onClick={curtirFoto}
                className="im"
                imagem={arrayFotos[index]}
              />
              {curtir ? (
                <FavoriteIcon
                  style={{ height: "40px", color: "red", width: "100%" }}
                />
              ) : (
                false
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
