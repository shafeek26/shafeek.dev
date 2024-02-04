import "./about.css";
import profile from "../../assets/profile.jpg"

const About = () => {
  return (
    <section id="about" className="about_section">
      <h2 className="about_section_heading">About</h2>
      <div className="about_section_content_container">
        <div className="about_section_content_box">
          <div>
            <p>
              "Hello! My name is Shafiq and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!"
            </p>
            <p>
              "Fast-forward to today, and I’ve had the privilege of working at"
            </p>
            <p>
              that covers everything you need to build a web app with the
              Spotify API using Node & React.
            </p>
          </div>
          <ul className="skill_list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>Node</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="my_profile">
          <div className="wrapper">
            <div className="img img_wraper">
            <img
                  src={profile}
                  alt=""
                  style={{objectFit:"cover", opacity:1, width:"300px", height:"300px"}}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
