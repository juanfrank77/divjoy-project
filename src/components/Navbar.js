import React, { useState } from "react";
import NavbarContainer from "components/NavbarContainer";
import Link from "next/link";
import { useAuth } from "util/auth.js";
import { useRouter } from "next/router";

function Navbar(props) {
  const auth = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href="/">
              <a>
                <img className="image" src={props.logo} alt="Logo" />
              </a>
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>

            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>

            <Link href="/now">
              <a className="navbar-item">Now</a>
            </Link>

            <a className="navbar-item" href="https://blog.juanfgonzalez.com">
              Blog
            </a>

            <Link href="/contact">
              <a className="navbar-item">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
