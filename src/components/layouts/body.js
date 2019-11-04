import React, {Component} from 'react';
import '../layouts/style.css';
import userAvatar from '../../assets/images/avatar.jpg';
import imgHtml from '../../assets/images/html.png';
import imgCss from '../../assets/images/css.png';
import imgPhp from '../../assets/images/php.png';
import imgDart from '../../assets/images/dart.jpg';
import imgFlutter from '../../assets/images/flutter.png';
import imgJava from '../../assets/images/java.png';
import imgJs from '../../assets/images/javascript.png';
import imgNode from '../../assets/images/nodejs.jpg';
import imgReact from '../../assets/images/react.png';
import imgGraphic from '../../assets/images/graphic.png';
import imgWeb from '../../assets/images/webdevelopment.jpeg';
import imgAndroid from '../../assets/images/androiddev.jpg';
import imgCross from '../../assets/images/cross_platform.jpg';

export default class Body extends Component{
    render(){
        return (
            <div>
                <section className="banner">
                    <section className="outter">
                    <h4>Hello, Thanks for visiting my portfolio.</h4>
                        <div className="inner-box">
                            <div className="profile">
                                <h1 className="nopadding">I am,</h1>
                                <div className="profile_info">
                                    <img src={userAvatar} alt="author avatar" className="avatar"/>
                                    <div className="info">
                                        <h1 className="nopadding">Eliezer Basubi</h1>
                                        <p className="nopadding italic">FullStack Developer</p>
                                        <p className="nopadding">With massive experience in developping complex web, mobile and desktop applications in various programming languages and different tools</p>
                                    </div>
                                </div>
                            </div>
                            <div className="vertical-divider"></div>
                            <div className="skills">
                            <h1 className="nopadding">I have experience in: </h1>
                                <div className="skills_cover">
                                <SkillBox className="html" programming_icon={imgHtml} title="HTML5"/>
                                <SkillBox className="css" programming_icon={imgCss} title="CSS"/>
                                <SkillBox className="php" programming_icon={imgPhp} title="Php"/>
                                <SkillBox className="javascript" programming_icon={imgJs} title="JavaScript"/>
                                <SkillBox className="node" programming_icon={imgNode} title="NodeJs"/>
                                <SkillBox className="react" programming_icon={imgReact} title="ReactJs"/>
                                <SkillBox className="dart" programming_icon={imgDart} title="Dart"/>
                                <SkillBox className="flutter" programming_icon={imgFlutter} title="Flutter"/>
                                <SkillBox className="java" programming_icon={imgJava} title="Java"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="expertise_section">
                    <h1>WHAT I DO</h1>
                    <p>The craft, my routine, my life. Things that I do for living. Things that describe who I am today.</p>
                    <h4>HERE ARE SOME OF MY EXPERTISE</h4>
                    <div className="justify-inline-flex">
                        <div className="card">
                            <img alt="" src={imgWeb} className="img_expertise"/>
                            <h4>Web Development</h4>
                            <div className="incolor_border"></div>
                        </div>
                        <div className="card">
                            <img alt="" src={imgAndroid} className="img_expertise"/>
                            <h4>Android Development</h4>
                            <div className="incolor_border"></div>
                        </div>
                        <div className="card">
                            <img alt="" src={imgCross} className="img_expertise"/>
                            <h4>Cross-Platform Development</h4>
                            <div className="incolor_border"></div>
                        </div>
                        <div className="card">
                            <img alt="" src={imgGraphic} className="img_expertise"/>
                            <h4>Graphic Design</h4>
                            <div className="incolor_border"></div>
                        </div>
                    </div>
                </section>

                <Available/>
            </div>
        )
    }
}

export  class SkillBox extends Component {
    render(){
        return (
            <div className="box">
                <img alt="display html" src={this.props.programming_icon} className="programming_icon"></img>
                <div className="skill-details">
                    <h3 className="nopadding">{ this.props.title }</h3>
                    <span className="skill_bar nopadding"><span className={this.props.className}></span></span>
                </div>
            </div>
        )
    }
}

export class Available extends Component {
    render(){
        return (
            <section className="accomplishments">
                <main className="justify-content-center freelancing">
                    <div>
                        <h2>I'm available for freelancing</h2>
                        <button className="btn btn-primary">Hire me </button>
                    </div>
                </main>
                <main>
                    <div className="justify-inline-flex fg-color-white">
                        <div className="sizedbox">
                            <h2>201</h2>
                            <p>CUP OF COFFEE</p>
                        </div>
                        <div className="sizedbox">
                            <h2>14</h2>
                            <p>PROJECTS</p>
                        </div>
                        <div className="sizedbox">
                            <h2>10</h2>
                            <p>CLIENTS</p>
                        </div>
                        <div className="sizedbox">
                            <h2>500.000</h2>
                            <p>LINES OF CODE</p>
                        </div>
                    </div>
                </main>
            </section>
        );
    }
}

