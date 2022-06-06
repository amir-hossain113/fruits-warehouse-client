import React from 'react';
import './About.css';
import myImage from '../../images/personal/personal1.JPG';

const About = () => {
    return (
        <div className="mt-5 mb-5">
            <h3 className="text-center mt-3 mb-3">About Me</h3>
            <div className="container about">
                <div>
                    <img src={myImage} alt="" />
                </div>
                <div className="p-5 text-justify m-auto">
                    <p>
                        Hello, this is Amir Hossain. I have completed my graduation from the department of Computer Science & Engineering from Metropolitan University. I want to be a web developer.To become a web developer I am working hard to develop my skills on different type of programming languages. Everyday I am spending lots of time for practice, also I am trying to understand what is happening on my code. To reach my goal I have to practice more & more. Because practice makes a men perfect.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;