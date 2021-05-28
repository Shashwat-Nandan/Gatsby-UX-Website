import React from "react";
import { Link } from "gatsby";

import { useSiteMetadata } from "../hooks/use-site-metadata";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  footer,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <h1>{title}</h1>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
      <footer className={footer}>
        Copyright All rights reserved by Shashwat Nandan
      </footer>
    </main>
  );
};

export default Layout;
