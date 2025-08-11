import Img01 from "../assets/playlist/1.jpeg";
import Img10 from "../assets/playlist/10.jpeg";
import Img11 from "../assets/playlist/11.jpeg";
import Img12 from "../assets/playlist/12.jpeg";
import Img13 from "../assets/playlist/13.jpeg";
import Img14 from "../assets/playlist/14.jpeg";
import Img15 from "../assets/playlist/15.jpeg";
import Img02 from "../assets/playlist/2.png";
import Img03 from "../assets/playlist/3.jpeg";
import Img04 from "../assets/playlist/4.jpeg";
import Img05 from "../assets/playlist/5.jpeg";
import Img06 from "../assets/playlist/6.jpeg";
import Img07 from "../assets/playlist/7.jpeg";
import Img08 from "../assets/playlist/8.jpeg";
import Img09 from "../assets/playlist/9.jpeg";
import "./playlists.css";

import Clock from "../clock.js";

const Playlists = () => {
    return (
        <div className="playlist-container">
            <div className="result-playlists">
                <div className="playlist">
                    <Clock />
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            <a href="#" className="cards">
                                <div className="cards card1">
                                    <img src={Img01} alt="" />
                                    <span>Boas festas</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card2">
                                    <img src={Img02} alt="" />
                                    <span>Feitos para você</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card3">
                                    <img src={Img03} alt="" />
                                    <span>Lançamentos</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card4">
                                    <img src={Img04} alt="" />
                                    <span>Creators</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card5">
                                    <img src={Img05} alt="" />
                                    <span>Para treinar</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card6">
                                    <img src={Img06} alt="" />
                                    <span>Podcasts</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card7">
                                    <img src={Img07} alt="" />
                                    <span>Sertanejo</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card8">
                                    <img src={Img08} alt="" />
                                    <span>Samba e pagode</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card9">
                                    <img src={Img09} alt="" />
                                    <span>Funk</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card10">
                                    <img src={Img10} alt="" />
                                    <span>MPB</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card11">
                                    <img src={Img11} alt="" />
                                    <span>Rock</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card12">
                                    <img src={Img12} alt="" />
                                    <span>Hip Hop</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card13">
                                    <img src={Img13} alt="" />
                                    <span>Indie</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card14">
                                    <img src={Img14} alt="" />
                                    <span>Relax</span>
                                </div>
                            </a>

                            <a href="#" className="cards">
                                <div className="cards card15">
                                    <img src={Img15} alt="" />
                                    <span>Música Latina</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playlists;
