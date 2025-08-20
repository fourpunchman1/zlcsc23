import React from "react";
import { useAnimateOnScroll } from './/useAnimateOnScroll.js';

export const Team = (props) => {
    const sectionRef = useAnimateOnScroll('h2, h3, h4, p, a, ul, ol');  return (
    <div id="team" className="text-center" ref={sectionRef}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>幹部介紹_Meet The Team</h2>
          <p>
            幹部，一款真正人性化的智能助手，更懂生活更懂你。
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
