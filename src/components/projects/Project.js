
import { projects } from "./projectData";

import "./projects.css";

const Project = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <ul className="projects_container">
        {
            projects.map((project) => {
                return <li key={project.id} className="project">
                <div className="project_inner">
                  <header>
                    <div className="project_top">
                      <div className="folder">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                      </div>
                      <div className="project_links">
                          <a href="https://google.com" className="external">
                          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                          </a>
                          <a href="https://time-to-have-more-fun.now.sh/" aria-label="External Link" className="external" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                      </div>
                    </div>
                    <div className="project_title">
                      <a href="https://google.com">
                      {project.project_title}
                      </a>
                    </div>
                    <div className="project_description">
                      <p>{project.project_description}</p>
                    </div>
                  </header>
                  <footer>
                      <ul className="project_tech_list">
                          {
                            project.tech_stack.map((tech , index) => {
                                return <li key ={index}>{tech}</li>
                            })
                          }
                      </ul>
                  </footer>
                </div>
              </li>
            })
        }
      </ul>
    </section>
  );
};

export default Project;
