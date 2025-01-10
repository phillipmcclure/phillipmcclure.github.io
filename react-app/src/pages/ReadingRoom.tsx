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
  padding: 0 2rem;
  width: 100%;
  box-sizing: border-box;
  min-height: 50vh;
  height: calc(100vh - 2rem);
  overflow: hidden;
  
  &:not(:last-child) {
    border-right: 1px solid black;
  }

  @media (max-width: 1024px) {
    border-right: none !important;
    border-bottom: 1px solid black;
    margin: 0;
    padding: 1.5rem;
    min-height: auto;
    height: auto;
    display: block;
    overflow: visible;

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
  width: calc(100% - 4rem);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    position: static;
    cursor: pointer;
    margin: 0;
    margin-bottom: 2rem;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
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

const TitleBox = styled.div`
  border: 1px solid black;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: #FFFFF3;
  display: inline-block;
  margin-right: auto;
  text-align: left;
  h1 {
    font-size: 14px;
    margin: 0;
    white-space: nowrap;
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

const ReadingRoom: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const dragStartTime = React.useRef<number>(0);

  const handleDragStart = () => {
    dragStartTime.current = Date.now();
  };

  const handleDragStop = () => {
    // No need for additional logic here
  };

  const handleClick = (url: string) => () => {
    const dragDuration = Date.now() - dragStartTime.current;
    if (dragDuration < 200) { // If the interaction was less than 200ms, treat it as a click
      window.open(url, '_blank');
    }
  };

  return (
    <Container>
      <Column>
        {isMobile ? (
          <ShowPreview onClick={() => window.open('https://blueboyspace.substack.com/p/in-conversation-with-sara-hess', '_blank')}>
            <ShowImage>
              <img src="/images/Sarah_hess_interview.png" alt="Sara Hess in coversation with Emily Llamazalles" />
            </ShowImage>
            <TitleBox>
              <h1>Interview</h1>
            </TitleBox>
            <DateText>Sara Hess in coversation with Emily Llamazalles</DateText>
          </ShowPreview>
        ) : (
          <Draggable 
            bounds="parent" 
            defaultPosition={{ x: 0, y: 0 }}
            onStart={handleDragStart}
            onStop={handleDragStop}
          >
            <ShowPreview onClick={handleClick('https://blueboyspace.substack.com/p/in-conversation-with-sara-hess')}>
              <ShowImage>
                <img src="/images/Sarah_hess_interview.png" alt="Sara Hess in coversation with Emily Llamazalles" draggable={false} />
              </ShowImage>
              <TitleBox>
                <h1>Interview</h1>
              </TitleBox>
              <DateText>Sara Hess in coversation with Emily Llamazalles</DateText>
            </ShowPreview>
          </Draggable>
        )}
         {isMobile ? (
          <ShowPreview onClick={() => window.open('https://www.youtube.com/watch?v=g8bIJPLFljQ&t=175s', '_blank')}>
            <ShowImage>
              <img src="/images/watch.png" alt="My Own Personal Samsara, Dani Rodriguez" />
            </ShowImage>
            <TitleBox>
              <h1>Watch</h1>
            </TitleBox>
            <DateText>My Own Personal Samsara, Dani Rodriguez</DateText>
          </ShowPreview>
        ) : (
          <Draggable 
            bounds="parent" 
            defaultPosition={{ x: 0, y: 500 }}
            onStart={handleDragStart}
            onStop={handleDragStop}
          >
            <ShowPreview onClick={handleClick('https://www.youtube.com/watch?v=g8bIJPLFljQ&t=175s')}>
              <ShowImage>
                <img src="/images/watch.png" alt="My Own Personal Samsara, Dani Rodriguez" draggable={false} />
              </ShowImage>
              <TitleBox>
                <h1>Watch</h1>
              </TitleBox>
              <DateText>My Own Personal Samsara, Dani Rodriguez</DateText>
            </ShowPreview>
          </Draggable>
        )}
      </Column>
      <Column>
      {isMobile ? (
          <ShowPreview onClick={() => window.open('https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:0c023b29-1008-4188-96e9-5cdf5ec0bd12', '_blank')}>
            <ShowImage>
              <img src="/images/maggie_poetry.png" alt="maggie_poetry.png" />
            </ShowImage>
            <TitleBox>
              <h1>Essay</h1>
            </TitleBox>
            <DateText>Poetry: Maggie Dryden</DateText>
          </ShowPreview>
        ) : (
          <Draggable 
            bounds="parent" 
            defaultPosition={{ x: 0, y: 300 }}
            onStart={handleDragStart}
            onStop={handleDragStop}
          >
            <ShowPreview onClick={handleClick('https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:0c023b29-1008-4188-96e9-5cdf5ec0bd12')}>
              <ShowImage>
                <img src="/images/maggie_poetry.png" alt="maggie_poetry.png" draggable={false} />
              </ShowImage>
              <TitleBox>
                <h1>Essay</h1>
              </TitleBox>
              <DateText>Poetry: Maggie Dryden</DateText>
            </ShowPreview>
          </Draggable>
        )}
      </Column>
      <Column>
      {isMobile ? (
          <ShowPreview onClick={() => window.open('https://blueboyspace.substack.com/p/a-trip-to-marsh-ruins', '_blank')}>
            <ShowImage>
              <img src="/images/beverlybuchanan.png" alt="Visiting Marsh Ruins" />
            </ShowImage>
            <TitleBox>
              <h1>Essay</h1>
            </TitleBox>
            <DateText>Visiting Marsh Ruins</DateText>
          </ShowPreview>
        ) : (
          <Draggable 
            bounds="parent" 
            defaultPosition={{ x: 0, y: 100 }}
            onStart={handleDragStart}
            onStop={handleDragStop}
          >
            <ShowPreview onClick={handleClick('https://blueboyspace.substack.com/p/a-trip-to-marsh-ruins')}>
              <ShowImage>
                <img src="/images/beverlybuchanan.png" alt="Visiting Marsh Ruins" draggable={false} />
              </ShowImage>
              <TitleBox>
                <h1>Essay</h1>
              </TitleBox>
              <DateText>Visiting Marsh Ruins</DateText>
            </ShowPreview>
          </Draggable>
        )}
      </Column>
      <Column />
    </Container>
  )
}

export default ReadingRoom
