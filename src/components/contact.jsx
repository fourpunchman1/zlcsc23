import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { useAnimateOnScroll } from './/useAnimateOnScroll.js';

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // true / false / null
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    //{/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("service_61eszun", "template_bqkinjj", e.target, "lVKshIqP_cqBzI5fk")
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("成功送出！");
          setIsSuccess(true);
          clearState();
        setTimeout(() => {
          setStatusMessage("");
          setIsSuccess(null);
        }, 1000);
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("送出失敗，請稍後再試");
          setIsSuccess(false);
        }
      );
  };

    const sectionRef = useAnimateOnScroll('h2, h3, p, a, ul, ol');  return (
    <div ref={sectionRef}>
      <div id="contact">
        <div className="overlay">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>聯絡我們!!</h2>
                <p>
                  請完整填寫下方表單，我們會盡快回覆您。<br />
                  如果您有任何問題或建議，歡迎隨時聯繫我們。<br />
                  我們期待您的來信！
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                {isSuccess !== null && (
                  <div
                    style={{
                      marginTop: "15px",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: isSuccess ? "#d4edda" : "#f8d7da",
                      color: isSuccess ? "#155724" : "#721c24",
                    }}
                  >

                    {statusMessage}
                  </div>
                )}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>聯絡資訊_Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.github : "/"}>
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.discord : "/"}>
                      {/* <i className="fa fa-youtube"></i> */}
                      <img src="..\..\img\discord_fin.svg" alt="Discord"/>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.line : "/"}>
                      <img src="../../img/line_fin.svg" alt="Line"/>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            中崙資訊研習社_ZLCSC  {" "}
            <a href="https://www.instagram.com/zlcsc_23rd/" rel="nofollow">
              歡迎你的聯繫
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
