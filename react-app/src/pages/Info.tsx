import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  width: 100%;
  height: 100vh;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    overflow-x: hidden;
    width: 100%;
  }
`

const TextColumn = styled.div`
  grid-column: 1 / 3;
  position: relative;
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;
  border-right: 1px solid black;
  margin: 15px 0;

  @media (max-width: 1024px) {
    grid-column: 1;
    order: 2;
    border-right: none;
    margin: 0;
    padding: 2rem 1rem;
    background: #FFFFF3;
    position: relative;
    z-index: 1;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageColumn = styled.div`
  grid-column: 3 / 5;
  position: relative;
  overflow: hidden;
  height: calc(100vh - 4rem);

  @media (max-width: 1024px) {
    grid-column: 1;
    order: 1;
    height: 400px;
    overflow-y: visible;
    overflow-x: visible;
    padding: 0;
    width: 100vw;
    margin-left: -1rem;
    margin-right: -1rem;
  }
`

const ImageCarousel = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    height: 100%;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

// Desktop-specific components
const DraggableImageDesktop = styled.div<{ size: 'large' | 'small' }>`
  position: absolute;
  cursor: move;
  width: ${props => props.size === 'large' ? '50%' : '35%'};
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

// Mobile-specific components
const CarouselImageContainer = styled.div`
  @media (max-width: 1024px) {
    flex: 0 0 100%;
    height: 100%;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    padding: 0 0.5rem;

    img {
      margin: 0 0 0 1.5rem;
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }
`

const ContactCard = styled.div`
  margin-top: 2rem;
  font-size: smaller;

  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

interface Position {
  x: number;
  y: number;
}

interface ImageData {
  size: 'large' | 'small';
  src: string;
  alt: string;
  pos: Position;
}

const images: readonly ImageData[] = [
  { size: 'large', src: '/images/blue-boy-concert.png', alt: 'Blue Boy Concert', pos: { x: 50, y: 50 } },
  { size: 'small', src: '/images/blue-boy-night-party.png', alt: 'Blue Boy Night Party', pos: { x: 200, y: 200 } },
  { size: 'large', src: '/images/blue-boy-night-projector.jpeg', alt: 'Blue Boy Gallery', pos: { x: 100, y: 350 } }
] as const;

const MobileCarousel: React.FC = () => {
  return (
    <ImageCarousel>
      {images.map((img, index) => (
        <CarouselImageContainer key={index}>
          <img src={img.src} alt={img.alt} draggable={false} />
        </CarouselImageContainer>
      ))}
    </ImageCarousel>
  );
};

const DesktopDraggable: React.FC = () => {
  return (
    <ImageCarousel>
      {images.map((img, index) => (
        <Draggable key={index} defaultPosition={img.pos} bounds="parent">
          <DraggableImageDesktop size={img.size}>
            <img src={img.src} alt={img.alt} draggable={false} />
          </DraggableImageDesktop>
        </Draggable>
      ))}
    </ImageCarousel>
  );
};

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

const Info: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <Container>
      <TextColumn>
        <TextContent>
          <h1>
            Blue Boy is a contemporary art space in Savannah, GA committed to the exhibition of evolving art practices in the Southeast and beyond.<br />
            <br />
          </h1>
          <p style={{ fontSize: 'smaller' }}>
            Alongside regular exhibitions, Blue Boy screens movies, hosts lectures, and holds other community-driven events in our backyard space in Savannah&apos;s midtown neighborhood.<br />
            <br />
            Located behind 406 E 65th Street (street parking is available, and a path leads around the house to the gallery).<br />
            <br />
            We are open during exhibition receptions and other programming, as well as by appointment. Additional visiting hours are shared weekly on Instagram.<br />
            <br />
          </p>
          <ContactCard>
            Contact:
            <br />
            <a href="mailto:writetoblueboy@gmail.com">writetoblueboy@gmail.com</a><br />
            <a href="https://www.instagram.com/blueboy.space/">Instagram</a><br />
          </ContactCard>
        </TextContent>
      </TextColumn>
      <ImageColumn>
        {isMobile ? <MobileCarousel /> : <DesktopDraggable />}
      </ImageColumn>
    </Container>
  )
}

export default Info 