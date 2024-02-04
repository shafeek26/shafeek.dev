import { useState } from "react";
import "./header.css";
import logo from "../../assets/2-removebg-preview.png";
import { Link } from "react-router-dom";


const Header = () => {
  const [ sidebarToggle, setSidebarToggle ] = useState(true);

  const handleSideBarToggler = () => {
    setSidebarToggle((prevState) => !prevState)
  }


  return (
    <header className="header">
        <nav className="navbar">
            <div className="logo_container">
              <Link to="/">
                <div>
                  <img src={logo} alt="logo" className="nav_logo"/>
                </div>
              </Link>
            </div>
            <div className="nav_items">
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
              <div>
                <Link className="resume_button" to="/" target="_blank">Resume</Link>
              </div>
            </div>
            {/* mobile view responsise design sidebar toggler */}
            <div className="sidebar_toggler">
              <div>
                <button aria-label="Menu" className={sidebarToggle ? "hamberger_button" : "closing_button"} onClick={handleSideBarToggler}>
                  <div className="hamberger_box">
                    <div className="hamberger_inner"></div>
                  </div>
                </button>
                <aside aria-hidden="true" tabIndex={-1} className={sidebarToggle ? "sidebar_close" : "sidebar_open"}>
                  <nav>
                    <ul>
                      <li><a href="/about">About</a></li>
                      <li><a href="/experience">Experience</a></li>
                      <li><a href="/work">Work</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                    <Link to="/" className="resume_link">Resume</Link>
                  </nav>
                </aside>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Header