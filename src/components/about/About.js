import "./about.css";
import profile from "../../assets/profile.jpeg"

const About = () => {
  return (
    <section id="about" className="about_section">
      <h2 className="about_section_heading">About</h2>
      <div className="about_section_content_container">
        <div className="about_section_content_box">
          <div>
            <p>
              "Hello! My name is Brittany and I enjoy creating things that live
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
            <div className="img image_wrapper">
              <picture>
                <source
                  srcSet="https://media.istockphoto.com/id/1247019070/photo/curvy-road-on-the-mountains-of-cherrapunjee-road-from-shillong-to-cherrapunjee-in-meghalaya.webp?b=1&s=170667a&w=0&k=20&c=C-QJcwxURl5oaOOs7zn9vhQBCkpJm13wy6YMuwh305k="
                  media="(orientation: portrait)"
                />
                <img
                  src={profile}
                  alt=""
                  style={{objectFit:"cover", opacity:1, width:"250px", height:"250px"}}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
