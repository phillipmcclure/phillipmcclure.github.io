import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

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
  height: 97vh;
  
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
  margin: 0 1rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    position: static;
    cursor: default;
    margin: 0;
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
  h1 {
    font-size: 16px;
    margin: 0;
  }

  @media (max-width: 1024px) {
    max-width: 50%;
  }
`

const DateText = styled.h1`
  font-size: 16px;
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

  return (
    <Container>
      <Column>
        {isMobile ? (
          <ShowPreview>
            <ShowImage>
              <img src="/experimental/images/life-cover.jpeg" alt="Kate Burke & Daniela Rodriguez" />
            </ShowImage>
            <ArtistBox>
              <h1>Kate Burke & Daniela Rodriguez</h1>
            </ArtistBox>
            <DateText>December 2024</DateText>
          </ShowPreview>
        ) : (
          <Draggable bounds="parent">
            <ShowPreview>
              <ShowImage>
                <img src="/experimental/images/life-cover.jpeg" alt="Kate Burke & Daniela Rodriguez" draggable={false} />
              </ShowImage>
              <ArtistBox>
                <h1>Kate Burke & Daniela Rodriguez</h1>
              </ArtistBox>
              <DateText>December 2024</DateText>
            </ShowPreview>
          </Draggable>
        )}
      </Column>
      <Column>
        {isMobile ? (
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
        )}
      </Column>
      <Column>
        {isMobile ? (
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
        )}
      </Column>
      <Column />
    </Container>
  )
}

export default Upcoming 