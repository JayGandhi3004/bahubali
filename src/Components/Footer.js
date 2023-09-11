import React from 'react'
import './style.css'

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className='Section'>
                    <div className='container'>
                        <p style={{ color: '#737373', marginBottom: '30px' }}>Questions? Call 000-800-919-1694</p>
                        <div className='row'>
                            <div className='Footer_Text'>
                                <a href="/" >FAQ</a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >Help Centre</a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >Account</a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >Media Centre</a>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='Footer_Text'>
                                <a href="/" >Investor  </a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >Relations</a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >JobsWays to Watch</a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >Terms of Use</a>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='Footer_Text'>
                                <a href="/" >Privacy</a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >Cookie Preferences</a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >Corporate Information</a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >Contact Us</a>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='Footer_Text'>
                                <a href="/" >Speed</a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >TestLegal Notices</a>
                            </div>
                            <div className='Footer_Text'>
                                <a href="/" >Only on Netflix</a>
                            </div>
                        </div>
                        <select className='select'>
                            <option>Endlish</option>
                            <option>Hindi</option>
                        </select>
                        <p className='Footer_Text'><a href="/" >Netflix India</a></p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;