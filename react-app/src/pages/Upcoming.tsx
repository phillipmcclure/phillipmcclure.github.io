import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  height: 100vh;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    height: auto;
  }
`

const Column = styled.div`
  position: relative;
  padding: 0 1rem;
  width: 100%;
  box-sizing: border-box;
  min-height: 50vh;
  
  &:not(:last-child) {
    border-right: 1px solid black;
  }

  @media (max-width: 1024px) {
    border-right: none !important;
    border-bottom: 1px solid black;
    margin: 0;
    padding: 1rem;
    min-height: auto;

    &:last-child {
      border-bottom: none;
    }

    &:empty {
      display: none;
      padding: 0;
      margin: 0;
      border: none;
    }
  }
`

const ShowPreview = styled.div`
  position: absolute;
  cursor: move;
  max-width: 400px;
  margin-top: 3rem;
  padding-right: 1rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1024px) {
    position: static;
    cursor: default;
    margin: 0;
    padding-right: 0;
  }
`

const ShowImage = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

const ArtistBox = styled.div`
  border: 1px solid black;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: #FFFFF3;
  display: inline-block;
  h1 {
    font-size: 14px;
    margin: 0;
    white-space: normal;
    word-wrap: break-word;
  }

  @media (max-width: 1024px) {
    max-width: 50%;
  }
`

const DateText = styled.h1`
  font-size: 14px;
  margin: 0;
`

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

const Upcoming: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const navigate = useNavigate();
  const dragStartTime = React.useRef<number>(0);

  const handleClick = (route: string) => () => {
    const dragDuration = Date.now() - dragStartTime.current;
    if (dragDuration < 200) { // If the interaction was less than 200ms, treat it as a click
      navigate(route);
    }
  };

  const handleDragStart = () => {
    dragStartTime.current = Date.now();
  };

  const handleDragStop = () => {
    // No need for additional logic here
  };

  return (
    <Container>
      <Column>
        {isMobile ? (
          <ShowPreview onClick={() => navigate('/on-view')}>
            <ShowImage>
              <img src="/experimental/images/life-cover.jpeg" alt="Kate Burke & Daniela Rodriguez" />
            </ShowImage>
            <ArtistBox>
              <h1>Kate Burke & Dani Rodriguez</h1>
            </ArtistBox>
            <DateText>One lifetime is enough to learn life&apos;s preciousness, December 2024</DateText>
          </ShowPreview>
        ) : (
          <Draggable 
            bounds="parent"
            onStart={handleDragStart}
            onStop={handleDragStop}
          >
            <ShowPreview onClick={handleClick('/on-view')}>
              <ShowImage>
                <img src="/experimental/images/life-cover.jpeg" alt="Kate Burke & Daniela Rodriguez" draggable={false} />
              </ShowImage>
              <ArtistBox>
                <h1>Kate Burke & Daniela Rodriguez</h1>
              </ArtistBox>
              <DateText>One lifetime is enough to learn life&apos;s preciousness, December 2024</DateText>
            </ShowPreview>
          </Draggable>
        )}
      </Column>
      <Column>
        {/* {isMobile ? (
          <ShowPreview>
            <ShowImage>
              <img src="/experimental/images/Daniel-Emily.png" alt="Emily Llamazales & Daniel Jorgenson" />
            </ShowImage>
            <ArtistBox>
              <h1>Emily Llamazales & Daniel Jorgenson</h1>
            </ArtistBox>
            <DateText>January 2025</DateText>
          </ShowPreview>
        ) : (
          <Draggable bounds="parent" defaultPosition={{ x: 0, y: 200 }}>
            <ShowPreview>
              <ShowImage>
                <img src="/experimental/images/Daniel-Emily.png" alt="Emily Llamazales & Daniel Jorgenson" draggable={false} />
              </ShowImage>
              <ArtistBox>
                <h1>Emily Llamazales & Daniel Jorgenson</h1>
              </ArtistBox>
              <DateText>January 2025</DateText>
            </ShowPreview>
          </Draggable>
        )} */}
        {isMobile ? (
          <ShowPreview onClick={() => navigate('/poems')}>
            <ShowImage>
              <img src="/experimental/images/exhibitions-pictures/Poems/Poems-13.jpg" alt="Emily Llamazales & Daniel Jorgenson" />
            </ShowImage>
            <ArtistBox>
              <h1>Sara Malpass & Sara Hess</h1>
            </ArtistBox>
            <DateText>Poems, September 2024</DateText>
          </ShowPreview>
        ) : (
          <Draggable 
            bounds="parent" 
            defaultPosition={{ x: 0, y: window.innerHeight / 3 }}
            onStart={handleDragStart}
            onStop={handleDragStop}
          >
            <ShowPreview onClick={handleClick('/poems')}>
              <ShowImage>
                <img src="/experimental/images/exhibitions-pictures/Poems/Poems-13.jpg" alt="Emily Llamazales & Daniel Jorgenson" draggable={false} />
              </ShowImage>
              <ArtistBox>
                <h1>Sara Malpass & Sara Hess</h1>
              </ArtistBox>
              <DateText>Poems, September 2024</DateText>
            </ShowPreview>
          </Draggable>
        )}
      </Column>
      <Column>
        {/* {isMobile ? (
          <ShowPreview>
            <ShowImage>
              <img src="/experimental/images/placeholder garden.jpg" alt="Devin Balara & David Onri Anderson" />
            </ShowImage>
            <ArtistBox>
              <h1>Devin Balara & David Onri Anderson</h1>
            </ArtistBox>
            <DateText>March 2025</DateText>
          </ShowPreview>
        ) : (
          <Draggable bounds="parent">
            <ShowPreview>
              <ShowImage>
                <img src="/experimental/images/placeholder garden.jpg" alt="Devin Balara & David Onri Anderson" draggable={false} />
              </ShowImage>
              <ArtistBox>
                <h1>Devin Balara & David Onri Anderson</h1>
              </ArtistBox>
              <DateText>March 2025</DateText>
            </ShowPreview>
          </Draggable>
        )} */}
      </Column>
      <Column />
    </Container>
  )
}

export default Upcoming 