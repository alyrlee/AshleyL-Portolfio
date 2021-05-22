import React, { useState, useEffect } from "react";
import { Wrapper, Container, Header } from "../styles/Contact.styles";
import { HomeLink, TextLink } from "../styles/Projects.styles";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcons from '../styles/SocialMediaIcons';



const Contact = ({ history }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    animate &&
      setTimeout(() => {
        history.push("/");
        setAnimate(false);
      }, 400);
  }, [animate, history]);

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimate(true)} animating={animate}>
        <TextLink>Home</TextLink>
      </HomeLink>
      <Container>
        <Header>ashleyloreal.lee@gmail.com</Header>
		<br />
        <SocialMediaIcons>
			<FontAwesomeIcon icon={faGithub} /> 
			<FontAwesomeIcon icon={faLinkedin} />
		</SocialMediaIcons>
      </Container>
    </Wrapper>
  );
};

export default withRouter(Contact);
