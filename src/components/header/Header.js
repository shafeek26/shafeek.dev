import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/2-removebg-preview.png";


const Header = () => {
  const [ sidebarToggle, setSidebarToggle ] = useState(true);

  const handleSideBarToggler = () => {
    setSidebarToggle((prevState) => !prevState)
  }


  return (
    <header className="header">
        <nav className="navbar">
            <div className="logo_container">
              <a href="/">
                <div>
                  <img src={logo} alt="logo" className="nav_logo"/>
                </div>
              </a>
            </div>
            <div className="nav_items">
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
              <div>
                <a className="resume_button" href="google.com" target="_blank">Resume</a>
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
                    <a href="/" className="resume_link">Resume</a>
                  </nav>
                </aside>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Header