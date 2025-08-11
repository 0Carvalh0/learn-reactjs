import React from "react";
import "./side-bar.css";
import LogoSpotify from "../assets/icons/logo-spotify.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="#">
            <img src={LogoSpotify} alt="logo-do-spotify" />
          </a>
        </div>

        <ul>
          <li>
            <a href="#">
              <span>
                <span className="fa fa-home"></span>Início
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <span className="fa fa-search"></span>Buscar
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <nav className="sidebar__library">
        <div className="library">
          <div className="library__content">
            <button className="library__button">
              <span>
                <span className="fa fa-book"></span>Sua biblioteca
              </span>
            </button>
            <span className="fa fa-plus"></span>
          </div>
          <section className="section__playlist">
            <div className="section__playlist__content">
              <h2 className="text title">Crie sua primeira playlist</h2>
              <h3 className="text subtitle">É fácil, vamos te ajudar.</h3>
              <button className="section__playlist__button">
                Criar Playlist
              </button>
            </div>
          </section>
          <div className="cookies">
            <a href="#">Cookies</a>
          </div>
          <div className="languages">
            <button className="languages__button">
              <span className="fa fa-globe"></span>
              <span>Português do Brasil</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
