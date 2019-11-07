import React, {Component} from 'react';
import '../layouts/style.css';
import userAvatar from '../../assets/images/avatar.jpg';
import imgHtml from '../../assets/images/html.png';
import imgCss from '../../assets/images/css.png';
import imgPhp from '../../assets/images/php.png';
import imgDart from '../../assets/images/dart.png';
import imgFlutter from '../../assets/images/flutter.png';
import imgJava from '../../assets/images/java.png';
import imgJs from '../../assets/images/javascript.png';
import imgNode from '../../assets/images/nodejs.png';
import imgReact from '../../assets/images/react.png';
import imgGraphic from '../../assets/images/graphic.png';
import imgWeb from '../../assets/images/webdevelopment.png';
import imgAndroid from '../../assets/images/androiddev.png';
import imgCross from '../../assets/images/desktop.png';
import { projects } from '../../data/data';

export default class Body extends Component{
    state = {
        images: [imgHtml, imgCss, imgPhp, imgJs, imgNode, imgReact, imgDart, imgFlutter, imgJava],
        languages: ["html", "css", "php", "javascript", "node", "react", "dart", "flutter","java"],
        titles: ["HTML5", "CSS", "PHP", "JavaScript", "NodeJs", "ReactJs", "Dart", "Flutter", "Java"],
        expertise: ["Web Development", "Mobile Development", "Desktop Development", "Graphic Design"],
        expertise_images: [imgWeb, imgAndroid, imgCross, imgGraphic]
    }
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
                                    {this.state.images.map((skill, index) =>
                                        <SkillBox key={index} className={this.state.languages[index]} programming_icon={skill} title={this.state.titles[index]}/>
                                    )}
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
                        {this.state.expertise.map((expert, index) => 
                            <div className="card" key={index}>
                                <img alt="" src={this.state.expertise_images[index]} className="img_expertise"/>
                                <h4>{expert}</h4>
                                <div className="incolor_border"></div>
                            </div>
                        )}
                    </div>
                </section>

                <Available/>
                <Projects/>
                <Education/>
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
    state = {
        score : ["201", "14", "10", 500.000],
        title: ["CUPS OF COFFEE", "PROJECTS", "CLIENTS", "LINES OF CODE"]
    }
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
                        {this.state.score.map((archive, index) => 
                            <div className="sizedbox" key={index}>
                                <h2>{archive}</h2>
                                <p>{this.state.title[index]}</p>
                            </div>
                        )}
                    </div>
                </main>
            </section>
        );
    }
}

export class Projects extends Component{
    state= {
        projects //De-structure projects variable.
    }
    render(){
        return (
            <section className="section_project">
                <h1>WHAT I'VE DEVELOPED</h1>
                <p>The craft, my routine, my life. Things that I do for living. Things that describe who I am today.</p>
                <h5>PROJECTS I HAVE COMPLETED</h5>
                <div className="justify-inline-flex">
                    {this.state.projects.map((project, index) =>
                        <div className="card unshadowed-card" key={index}>
                            <img alt="" src={ project.screenshot } className="img_expertise"/>
                            { project.tools.map((tool, index) => <span className={ index === 0 ? "" :  "dot"} key={index}>{ tool }</span> )}
                            <h4>{project.name}</h4>
                            <div className="card-body">
                                <p>{ project.description }</p>
                            </div>
                            <div className="incolor_border"></div>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export class Education extends Component {
    render(){
        return (
            <section id="education" className="bg-gray">
                <h1>EDUCATION</h1>
                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family. <b>Kofi Annan</b></p>
                <section className="accordion">
                    <input type="checkbox" name="collapsible" id="collapser" defaultChecked></input>
                    <h2 className="collapse"><label htmlFor="collapser">BACHELOR DEGREE OF INFORMATION TECHNOLOGY</label></h2>
                    <main className="content">
                        <div className="flex">
                            <div className="education-period">
                                <small className="fg-color-white">Aug 2016 - Dec 2019</small>
                            </div>
                            <div className="justify-content-left education-details">
                            <h4>INTERNATIONAL UNIVERSITY OF EAST AFRICA</h4>
                            <p><small>BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</small></p>
                            <p><strong>Major :</strong> Web Design, Mobile Programming, Object-Oriented Analysis and Design, 
                                Computer Network-Implementation and Design, Information Systems Security, 
                                Entrepreneurship and Project Planning.</p>
                            <p><strong>GPA : </strong> 5 / 5</p>
                            <p><strong>Honors & Awards : </strong> Academic Scholarship (2017 - 2019).</p>
                            </div>
                        </div>
                    </main>
                </section>
                <section className="accordion">
                    <input type="checkbox" name="collapsible" id="collapser2"></input>
                    <h2 className="collapse"><label htmlFor="collapser2">HIGH SCHOOL SECONDARY EDUCATION</label></h2>
                    <main className="content">
                    <div className="flex">
                            <div className="education-period">
                                <small className="fg-color-white">Sept 2009 - July 2016</small>
                            </div>
                            <div className="justify-content-left education-details">
                            <h4>INSTITUTE TECHNIQUE FUNDI MAENDELEO</h4>
                            <p><small>SECRETARIAL STUDIES</small></p>
                            <p><strong>Major : </strong> Deontology, Accounting, Geography, Mathematics, Trigonometry, Physics, chemistry and History.</p>
                            <p><strong>GPA : </strong> 81%</p>
                            </div>
                        </div>
                    </main>
                </section>
                {/* <section className="accordion">
                    <input type="checkbox" name="collapsible" id="collapser3"></input>
                    <h2 className="collapse"><label htmlFor="collapser3">PRIMARY SCHOOL EDUCATION</label></h2>
                    <main className="content">
                    <div className="flex">
                            <div className="education-period">
                                <small className="fg-color-white">Aug 2016 - Dec 2019</small>
                            </div>
                            <div className="justify-content-left education-details">
                            <p>INTERNATIONAL UNIVERSITY OF EAST AFRICA</p>
                        <p><strong>Overall Impression:</strong> A pale, bitter, highly attenuated and well carbonated Trappist ale, showing a fruity-spicy Trappist yeast character, a spicy-floral hop profile, and a soft, supportive grainy-sweet malt palate.</p>
                            </div>
                        </div>
                    </main>
                </section> */}
            </section>
        )
    }
}

