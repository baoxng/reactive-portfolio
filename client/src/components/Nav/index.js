import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Profile</a>
      <a className="navbar-brand"href="/project">Project</a>
      <a className="navbar-brand"href="/contact">Contact</a>
      <a className="navbar-brand"href="/resume">Resume</a>
      {/* Display this if the current state is loading */}
      {/* <a className="navbar-brand ml-auto">
          Loading...
        </a> */}
    </nav>
  );
};

export default Nav;
