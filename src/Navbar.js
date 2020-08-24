import React from "react";
import "./components.css";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <div class="container">
          <a>Hulk</a>
          <a class="logo is-active">Mavel</a>
          <a>Venom</a>
        </div>
      </nav>
    </div>
  );
}
