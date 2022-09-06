import React from "react";
import "./Principal.css";

const Principal = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/login">
          <img
            src={process.env.PUBLIC_URL + "/imagen/AdoView.png"}
            alt="imagen"
          />
        </a>
      </header>
    </div>
  );
};

export default Principal;
