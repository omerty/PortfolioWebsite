import React, { useEffect } from 'react';
import "./styles.css";
import "remixicon/fonts/remixicon.css";
import { ReactTyped as Typed } from 'react-typed';

export default function ContactMe() {
    return (
        <div>
            <div className="ContLogo">
                    <a href="#" className="Cont_Logo">
                    <i class="ri-contacts-line"></i> Contact Me
                    </a>
            </div>
            <div className = "ContainerButtons">
                <div className = "Linkedin">
                    <a href="https://www.linkedin.com/in/omer-mohiuddin-5a1376204/" className="button">
                        <div className="button__content">
                            <span className="button__text">Linkedin</span>
                            <i class="ri-linkedin-box-line"></i>

                            <div className="button__reflection-1"></div>
                            <div className="button__reflection-2"></div>
                        </div>

                        <img src="assets/img/star.png" alt="" className="button__star-1" />
                        <img src="assets/img/star.png" alt="" className="button__star-2" />
                        <img src="assets/img/circle.png" alt="" className="button__circle-1" />
                        <img src="assets/img/circle.png" alt="" className="button__circle-2" />
                        <img src="assets/img/diamond.png" alt="" className="button__diamond" />
                        <img src="assets/img/triangle.png" alt="" className="button__triangle" />
                        
                        <div className="button__shadow"></div>
                    </a>
                </div>
                <div className = "Github">
                    <a href="https://github.com/omerty" className="buttonGit">
                        <div className="button__contentGit">
                            <span className="button__textGit">GitHub</span>
                            <i class="ri-github-line"></i>

                            <div className="button__reflection-1Git"></div>
                            <div className="button__reflection-2Git"></div>
                        </div>

                        <img src="assets/img/star.png" alt="" className="button__star-1Git" />
                        <img src="assets/img/star.png" alt="" className="button__star-2Git" />
                        <img src="assets/img/circle.png" alt="" className="button__circle-1Git" />
                        <img src="assets/img/circle.png" alt="" className="button__circle-2Git" />
                        <img src="assets/img/diamond.png" alt="" className="button__diamondGit" />
                        <img src="assets/img/triangle.png" alt="" className="button__triangleGit" />
                        
                        <div className="button__shadowGit"></div>
                    </a>
                </div>

                {/* <div className = "Email">
                    <a href="mailto:mdomermohi@gmail.com" className="buttonEm">
                        <div className="button__contentEm">
                            <span className="button__textEm">Email</span>
                            <i class="ri-mail-send-line"></i>

                            <div className="button__reflection-1Em"></div>
                            <div className="button__reflection-2Em"></div>
                        </div>

                        <img src="assets/img/star.png" alt="" className="button__star-1Em" />
                        <img src="assets/img/star.png" alt="" className="button__star-2Em" />
                        <img src="assets/img/circle.png" alt="" className="button__circle-1Em" />
                        <img src="assets/img/circle.png" alt="" className="button__circle-2Em" />
                        <img src="assets/img/diamond.png" alt="" className="button__diamondEm" />
                        <img src="assets/img/triangle.png" alt="" className="button__triangleEm" />
                        
                        <div className="button__shadowEm"></div>
                    </a>
                </div> */}

                <div className = "ContPar">
                    <Typed
                        strings={[
                        "You can reach me most easily on LinkedIn and via email. <br> My email address is mdomermohi@gmail.com for more direct communication<br>feel free to call me at 613-314-9939.",
                        "I look forward to connecting with you!"
                        ]}
                        typeSpeed={60}
                        backSpeed={10}
                        loop
                    />
                </div>
            </div>
        </div>
    );
}
