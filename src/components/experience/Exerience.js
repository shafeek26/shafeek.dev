import { useState, useEffect } from "react";
import data from "../experience/data";
import "./experience.css";

const Exerience = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (itemId) => {
    setActiveButton(itemId);
  };

  useEffect(() => {
    handleButtonClick(1)
  },[])


  return (
    <section id="jobs" className="job_section">
      <h2 className="job_heading">Where I’ve Worked</h2>
      <div className="inner">
        <div className="companies_names">
          {data.map((item) => {
            return  <button 
                  key={item._id}
                    id="tab-0"
                    role="tab"
                    tabIndex="0"
                    aria-selected="true"
                    className={
                      activeButton === item._id
                        ? "active_button"
                        : "company_button"
                    }
                    onClick={() => handleButtonClick(item._id)}
                  >
                    <span>{item.company}</span>
                  </button>
          })}
        </div>
        {
          data.map((item) => {
            return <div key={item._id} className={activeButton === item._id ? "" : "hidden"}>
            <div
              id="panel-0"
              role="tabpanel"
              tabIndex="0"
              aria-labelledby="tab-0"
              className="role_box"
            >
              <h3>
                <span>{item?.role}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href="https://google.com" className="inline_link">
                    {item?.company}
                  </a>
                </span>
              </h3>
              <p className="range">{item.duration}</p>
              <div>
                <ul>
                  <li>{item.description.line_1}</li>
                  <li>{item.description.line_2}</li>
                  <li>{item.description.line_3}</li>
                  <li>{item.description.line_4}</li>
                </ul>
              </div>
            </div>
          </div>
          })
        }
      </div>
    </section>
  );
};

export default Exerience;
