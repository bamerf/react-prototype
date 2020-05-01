import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

export default function BrandAssets({ className }) {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className={className} />
    </Link>
  );
}
