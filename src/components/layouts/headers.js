import React, { Component } from "react";

export default class Headers extends Component {
    render(){
        return (
            <div className="navbar">
                <h1 className="page-title">WebMullah</h1>

                <div className="navlist">
                    <ul className="ulist">
                        <li className="current">Home</li>
                        <li>Delivery</li>
                        <li>Transactions</li>
                        <li>Profile</li>
                    </ul>

                    <div className="searchBar">
                        <form>
                            <input type="text" className="input_search" placeholder="search for project"></input>
                            <button className="btn_search">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
