// import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0d141e]">
      <footer class="footer flex items-center justify-center flex-col py-8 gap-1 text-sm">
        <div class="footer-content text-white">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <div class="copyright text-white">
          &copy; 1996-2024, Amazon.com, Inc. and its affiliates
        </div>
      </footer>
    </div>
  );
};

export default Footer;
