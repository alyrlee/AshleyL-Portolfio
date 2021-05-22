import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  NumberList,
  Current,
  SliderContainer,
  SlideWrapper,
  LinkWrap,
  Overlay,
  ContentWrap,
  CaseTitle,
  Button,
  SlickSwitch,
  Section,
  Spanner,
  Subtitle,
  HomeLink,
  TextLink
} from "../styles/Projects.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ history }) => {
	const [carouselSet, setCarousel] = useState(false);
	const [currentSlide, setSlide] = useState(1);
	const [animateHome, setAnimeHome] = useState(false);
	const [toCase, setCase] = useState("");
	const [coord, setCoords] = useState();
	const carousel = useRef(null);
  
	useEffect(() => {
	  animateHome &&
		setTimeout(() => {
		  history.push("/home");
		}, 400);
	}, [animateHome, history]);
  
	useEffect(() => {
	  toCase &&
		setTimeout(() => {
		  history.push(toCase);
		}, 1000);
	}, [toCase, history]);
  
	if (!carouselSet) {
	  setCarousel(true);
	}
  
	const settings = {
	  accessibility: true,
	  arrows: false,
	  dots: false,
	  draggable: true,
	  swipe: true,
	  infinite: true,
	  speed: 500,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  beforeChange: (old, next) => setSlide(next + 1)
	};
  
	const PreviousIcon = require("../../assets/icons/left-arrow.png");
	const NextIcon = require("../../assets/icons/right-arrow.png");
	
	const CaseOne = require("../../images/snap.png");
	const CaseTwo = require("../../images/business.png");
	const CaseThree = require("../../images/noteful.png");
	const CaseFour = require("../../images/paleo.png");
  
	const handleCaseSwap = (e, uri) =>
	  e.x < coord + 15 && e.x > coord - 15 && setCase(uri);
  
	return (
		<>
		<Wrapper>
		  <HomeLink onClick={() => setAnimeHome(true)} animating={animateHome}>
			<TextLink>Home</TextLink>
		  </HomeLink>
		  <Section>
			<SliderContainer {...settings} ref={carousel} toCase={!!toCase}>
			  <div>
				<SlideWrapper>
				  <LinkWrap coverImage={CaseOne} active={toCase === "/case"}>
					<Overlay
					  active={!!toCase}
					  onMouseDown={e => setCoords(e.nativeEvent.x)}
					  onMouseUp={e => handleCaseSwap(e.nativeEvent, "/case")}
					>
					  <ContentWrap>
						<CaseTitle>
						  SNAP Locator App
						  <Spanner />
						</CaseTitle>
						<Subtitle>App tool to locate nearby SNAP retailers and grocers</Subtitle>
						<hr />
						<Subtitle>Tech: HTML, CSS, React.js, Node,js, Express, PostgreSql, JWT authentication, Google Maps Javascript API, Google Places, SNAP USDA data source
</Subtitle>
					  </ContentWrap>
					</Overlay>
				  </LinkWrap>
				</SlideWrapper>
			  </div>
			  <div>
				<SlideWrapper>
				  <LinkWrap coverImage={CaseTwo}>
					<Overlay>
					  <ContentWrap>
						<CaseTitle>
						  Noteful App
						  <Spanner />
						</CaseTitle>
						<Subtitle>Noteful is a note-taking app || Utilized pgadmin database deployed on heroku. Utilized Vercel to deploy React app.</Subtitle>
						<hr />
						<Subtitle> CSS, React.js, Node.js, Express, PostgreSql</Subtitle>
					  </ContentWrap>
					</Overlay>
				  </LinkWrap>
				</SlideWrapper>
			  </div>
			  <div>
				<SlideWrapper>
				  <LinkWrap coverImage={CaseThree}>
					<Overlay>
					  <ContentWrap>
						<CaseTitle>
						  Business Connect App
						  <Spanner />
						</CaseTitle>
						<Subtitle>App that provides a rolodex of local locations to find like-minded spaces to collaborate with others.</Subtitle>
						<hr />
						<Subtitle>HTML, CSS, JavaScript, jQuery, Google Maps API, FourSquare API</Subtitle>
					  </ContentWrap>
					</Overlay>
				  </LinkWrap>
				</SlideWrapper>
			  </div>
			  <div>
				<SlideWrapper>
				  <LinkWrap coverImage={CaseFour}>
					<Overlay>
					  <ContentWrap>
						<CaseTitle>
						  Paleo Quiz App
						  <Spanner />
						</CaseTitle>
						<Subtitle>Quiz app built from HTML wireframe, developed user stories, to deploy a well-architected, dynamic, and accessible client-side app. </Subtitle>
						<hr />
						<Subtitle> CSS, HTML, JavaScript, jQuery</Subtitle>
					  </ContentWrap>
					</Overlay>
				  </LinkWrap>
				</SlideWrapper>
			  </div>
			</SliderContainer>
			<NumberList navigating={!!toCase}>
			  <SlickSwitch onClick={() => carousel.current.slickPrev()}>
				<Button img src={PreviousIcon} alt="Previous" />
			  </SlickSwitch>
			  <Current>
				<p>0{currentSlide} / 05</p>
			  </Current>
			  <SlickSwitch onClick={() => carousel.current.slickNext()}>
				<Button img src={NextIcon} alt="Next" />
			  </SlickSwitch>
			</NumberList>
		  </Section>
		</Wrapper>
	  </>
	);
  };
  
  export default withRouter(Projects);
  