import React from "react";

import "./footer-display-styles.css";

export default function FooterDisplay() {
  const year = new Date().getFullYear();
  return <footer>Copyright @ {year}</footer>;
}
