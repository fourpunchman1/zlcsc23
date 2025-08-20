import React from "react";
import { useAnimateOnScroll } from './/useAnimateOnScroll.js';

export const Features = (props) => {
  const sectionRef = useAnimateOnScroll('h2, h3, p, a, ul, ol');

  return (
    <div id="features" className="text-center" ref={sectionRef}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>課程規劃</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-2">
                  <div className="icon-container">
                  {" "}
                  </div>
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

