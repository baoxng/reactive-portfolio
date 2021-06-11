import React, { useRef } from "react";

const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };


const Contact= () =>{
    return (
          <div>
          <h1>Message Me!</h1>
          <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
            <input className="form-control mb-5" ref={authorRef} placeholder="Name" />
            <input className="form-control mb-5" required ref={titleRef} placeholder="Email" />
            <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Message" />
            <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
              Send!
            </button>
          </form>
        </div>
      );
}

export default Contact;