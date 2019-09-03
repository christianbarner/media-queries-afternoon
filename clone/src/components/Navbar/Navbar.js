import React, { Component } from 'react'

// Style Sheet
import './Navbar.css';

export default class Navbar extends Component {
    constructor(){
        super()

        this.state = {
            menu: false
        }
    }

    slide = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div>
                {/* Navbar */}
                <nav className="navbar">
                    <h1 className="navbar-title">Start Bootstrap</h1>
                    <div className="navbar-icon" onClick={this.slide}>
                        &#9776;
                    </div>
                    <ul className="navbar-menu">
                        <li>Services</li>
                        <li>Portolio</li>
                        <li>About</li>
                        <li>Team</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                {/* Slide Out Menu */}
                <ul className={
                    this.state.menu ?
                    'menu slide'
                    :
                    'menu'
                }>
                        <li>Services</li>
                        <li>Portolio</li>
                        <li>About</li>
                        <li>Team</li>
                        <li>Contact</li>
                </ul>
            </div>
        )
    }
};