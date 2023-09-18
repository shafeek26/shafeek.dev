
import About from "../components/about/About";
import Exerience from "../components/experience/Exerience";
import Project from "../components/projects/Project";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div id="content">
        <main className="main_content content_box">
            <section className="hero_section">
                <div style={{transitionDelay : "100ms"}}>
                    <h1>Hi, my name is</h1>
                </div>
                <div style={{transitionDelay : "200ms"}}>
                    <h2 className="big_heading">Shafeek M.</h2>
                </div>
                <div style={{transitionDelay : "300ms"}}>
                    <h3 className="big_heading">I design and code for the web</h3>
                </div>
                <div style={{transitionDelay : "400ms"}}>
                    <p>"I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at"</p>
                </div>
                <div style={{transitionDelay : "500ms"}}>
                    <a className="github_link" href="github.com">My github</a>
                </div>
            </section>
            <About />
            <Exerience />
            <Project />
            <Contact />
            <Footer />
        </main>
    </div>
  )
}

export default Home