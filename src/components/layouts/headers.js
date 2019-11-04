import React, { Component } from "react";

export default class Headers extends Component {
    render(){
        return (
            <div className="navbar">
                <div className="">
                    <h1 className="page-title">E.B.</h1>
                </div>
                <div className="navlist">
                    <ul className="ulist">
                        <li className="current">Home</li>
                        <li>Expertise</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
}
