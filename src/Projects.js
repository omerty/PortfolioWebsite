import React from 'react';
import "./styles.css";
import "remixicon/fonts/remixicon.css";

export default function Projects() {
    return (
        <div>

            <div className = "Projects_tab">
                    <a href = "" className="NavProjects">
                        <i class="ri-terminal-box-fill"></i> Projects
                    </a>
            </div>
            <div className="card__container">
                <article className="card__article">
                    <img src="assets/img/grad1.png" alt="image" className="card__img" />

                    <div className="card__data">
                        <a href = "https://github.com/omerty/Netflix--Cloone-Beta-/blob/main/README.md" className="NavGit">
                            <i class="ri-github-line"></i>
                        </a>
                        <a href = "https://github.com/omerty/Netflix--Cloone-Beta-/blob/main/netflix-clone/src/App.js" className="NavLink">
                            <i class="ri-external-link-fill"></i>
                        </a>
                        <h3 className="card__title">Netflix Clone <br /></h3>
                        <p3 className="card_Description">React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML<br /></p3>
                    </div>
                </article>

                <article className="card__article">
                    <img src="assets/img/grad2.png" alt="image" className="card__img1" />

                    <div className="card__data">
                        <a href = "https://github.com/omerty/SimpleMachineLearning/blob/main/README.md" className="NavGit1">
                            <i class="ri-github-line"></i>
                        </a>
                        <a href = "https://github.com/omerty/SimpleMachineLearning/blob/main/chatbot.py" className="NavLink1">
                            <i class="ri-external-link-fill"></i>
                        </a>
                        <h3 className="card__title1">Chat-Bot <br /></h3>
                        <p3 className="card_Description1">Python&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machine Learning</p3>
                    </div>
                </article>

                <article className="card__article">
                    <img src="assets/img/grade3.png" alt="image" className="card__img3" />

                    <div className="card__data">
                        <a href = "https://github.com/omerty/-Exploring-the-Bitcoin-Cryptocurrency-Market-DataCamp-project" className="NavGit3">
                            <i class="ri-github-line"></i>
                        </a>
                        <a href = "https://github.com/omerty/-Exploring-the-Bitcoin-Cryptocurrency-Market-DataCamp-project/blob/main/_Exploring-the-Bitcoin-Cryptocurrency-Market-DataCamp-project.ipynb" className="NavLink3">
                            <i class="ri-external-link-fill"></i>
                        </a>
                        <h3 className="card__title3">BitCoin Analysis <br /></h3>
                        <p3 className="card_Description3">Python&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jupyter NoteBooks</p3>
                    </div>
                </article>

                {/* Bottom Three */}

                <article className="card__article">
                    <img src="assets/img/grad4.png" alt="image" className="card__img2" />

                    <div className="card__data">
                        <a href = "https://github.com/omerty/YellowPages-WebScrapper/blob/main/README.md" className="NavGit2">
                            <i class="ri-github-line"></i>
                        </a>
                        <a href = "https://github.com/omerty/YellowPages-WebScrapper/blob/main/WebScrapper.py" className="NavLink2">
                            <i class="ri-external-link-fill"></i>
                        </a>
                        <h3 className="card__title2">&nbsp;Yellowpages <br/>Web Scrapper</h3>
                        <p3 className="card_Description2">Python</p3>
                    </div>
                </article>

                <article className="card__article">
                    <img src="assets/img/grad5.png" alt="image" className="card__img4" />

                    <div className="card__data">
                        <a href = "https://github.com/omerty/MosaicMaker" className="NavGit4">
                            <i class="ri-github-line"></i>
                        </a>
                        <a href = "https://github.com/omerty/MosaicMaker/blob/main/mosaicMaker.py" className="NavLink4">
                            <i class="ri-external-link-fill"></i>
                        </a>
                        <h3 className="card__title4">Mosaic Maker <br /></h3>
                        <p3 className="card_Description4">Python&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p3>
                    </div>
                </article>

            </div>
        </div>
    );
}
