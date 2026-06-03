import React from "react";
import CloseIcon from '@mui/icons-material/Close';

export const Contact = () => {
  return (
    <div className="hidden contact-form z-10 top-0">
      <div className="flex justify-center">
        <div className="form-card1">
          <div className="form-card2 relative">
            <form className="form">
              <p className="form-heading">Get In Touch</p>

              <div className="form-field">
                <input
                  required=""
                  placeholder="Name"
                  className="input-field"
                  type="text"
                />
              </div>

              <div className="form-field">
                <input
                  required=""
                  placeholder="Email"
                  className="input-field"
                  type="email"
                />
              </div>

              <div className="form-field">
                <input
                  required=""
                  placeholder="Mobile Number"
                  className="input-field"
                  type="text"
                />
              </div>

              <div className="form-field">
                <textarea
                  required=""
                  placeholder="Message"
                  cols="30"
                  rows="3"
                  className="input-field"
                ></textarea>
              </div>

              <button className="sendMessage-btn">Send Message</button>
            </form>
            <CloseIcon onClick={() => document.querySelector(".contact-form").classList.toggle("hidden")} className="absolute cursor-pointer text-white top-3 right-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
