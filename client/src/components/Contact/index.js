import React from "react";

const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (

      <div>
      <h1>Contact Me Here</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" placeholder="Your Name" />
        <input className="form-control mb-5" required placeholder="Email" />
        <textarea className="form-control mb-5" required placeholder="Your Message" />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Send Message!
        </button>
      </form>
    </div>
  );
};

export default Contact;
