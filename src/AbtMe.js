import React from 'react';
import "./styles.css";
import "remixicon/fonts/remixicon.css";

export default function AboutMe() {
    return (
        // Creating About Me Paragraph
        <div className = "AbtMe">
            <div className = "About_Me">
                <h1 className="Nav1">
                    <i className="ri-emotion-line"></i> About Me
                </h1>
            </div>
            
            <div className = "paragraph1">
                <p className = "par2">
                    I'm Omer Mohiuddin, a tech enthusiast passionate about programming,<br/> web development, and machine learning. I enjoy tackling complex problems, from creating chatbots to deploying projects on AWS.<br/> My work spans Python scripting, JavaScript, and various web technologies, always seeking to innovate and improve my skills.
                </p>
            </div>
        </div>

    );
}