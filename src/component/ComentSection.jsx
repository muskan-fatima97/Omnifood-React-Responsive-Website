import React from 'react';
import '../App.css';

const CommentSection = () => {
  return (
    <section className="comment-section">
      <h2 className=" how-title" >WE'RE HAPPY TO HEAR FROM YOU</h2>
      <div className="heading-line"></div>
      <form className="comment-form">
        <div className="form-row">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input type="email" placeholder="Your email" />
        </div>
        <div className="form-row">
          <label>How did you find us?</label>
          <select>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Friend</option>
            <option>Advertisement</option>
          </select>
        </div>
        <div className="form-row">
          <label>Newsletter</label>
          <div className="checkbox-wrap">
            <input type="checkbox" defaultChecked />
            <span style={{paddingLeft:"10px"}}>Yes, Please</span>
          </div>
        </div>
        <div className="form-row">
          <label>Drop us a line</label>
          <textarea placeholder="Your message"></textarea>
        </div>
        <button className="btn-submit">Send it!</button>
      </form>
    </section>
  );
};

export default CommentSection;
