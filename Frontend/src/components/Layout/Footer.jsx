import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By RozgaarHub.</div>
      <div>
        <Link to={"/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/channel/UCT7fRz_1sVYDO_M1UuTlbeg"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"www.linkedin.com/in/toqeer-ahmad-91b546261"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;