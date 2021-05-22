import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";



export default function SocialMediaIcons() {
  return (
    <div class="social-container">
      <h5>Follow Me On These Platforms:</h5>
      <a href="https://www.linkedin.com/in/ashley-r-lee/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
     </a>
     <a href="hhttps://github.com/alyrlee"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
     </a>
    </div>
  );
}
