import styled from "styled-components";
import { MediumHead } from "./fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import theme from "./theme";

export const Wrapper = styled.main`
  position: relative;
  display: block;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.peach};
`;

export const Container = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled(MediumHead)`
  display: block;
  opacity: 0.3;
  font-size: 3em;
  text-align: center;
`;

export const Social = styled(FontAwesomeIcon)`
  background: #eee;
  padding: 25px 50px;
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
  font: ;
`;
