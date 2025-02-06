import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  height: 99vh;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    overflow-x: hidden;
    width: 100vw;
  }
`

const TextColumn = styled.div`
  grid-column: 1 / 3;
  position: relative;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  border-right: 1px solid black;
  margin: 15px 0;
  overflow-y: auto;
  padding-top: 2rem;

  @media (max-width: 1024px) {
    grid-column: 1;
    order: 2;
    border-right: none;
    margin: 0;
    padding: 2rem 1rem;
    height: auto;
    overflow-y: visible;
    width: 100%;
    box-sizing: border-box;
  }
`

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 1rem;
  max-width: 100%;

  @media (max-width: 1024px) {
    width: calc(100vw - 2rem);
    height: 400px;
    object-fit: contain;
    margin: 0 1rem;
    background: #FFFFF3;
  }
`

const ImageColumn = styled.div`
  grid-column: 3 / 5;
  padding: 1rem;
  padding-top: 2rem;
  overflow-y: auto;
  height: calc(100vh - 2rem);
  box-sizing: border-box;
  max-width: 100%;

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
    background: #FFFFF3;
  }
`

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  display: inline-block;
  
  h1 {
    font-size: 1rem;
  }
`

const ExhibitionText = styled.div`
  margin-top: 1rem;
`

const ImageGallery = styled.div`
  display: block;
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding: 0 1rem;
    gap: 1rem;
    width: 100%;
    height: 400px;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const ArtistBio = styled.span`
  color: #727272;
`

const getImageExtension = (index: number): string => {
  return '.jpg';
};

const OnView: React.FC = () => {
  return (
    <Container>
      <TextColumn>
        <ArtistInfo>
          <h1>Emily Llamazales & Daniel Jorgenson</h1>
        </ArtistInfo>
        <br />
        <p>Tracing a spiral</p>
        <br />
        <ExhibitionText>
          <p>
          We tend to think of time in two different ways. We view time stretching out like a long, straight line—points plotted chronologically until the line moves out of view, enveloped in infinity. We move forward; we look backward. We begin and end. Alternatively, some speak of time as stacking circles. Instead of progressing linearly, time moves in a loop of endlessly repeating cycles.
          <br /><br />
          When we combine these two views of time, we see a spiraling line. Like a path winding up an unending mountain, we progress forward but circle the same form, a little higher with each pass. Llamazales and Jorgenson attempt to traverse this spiraling line with their work, walking ahead on the path and calling back to report on an uncertain future.
            <br /><br />
            In recent years, Emily Llamazales has centered her art practice in response to the sci-fi epic poem, <i>Mörk Materia</i>, by Swedish writer and critic Aase Berg. Unfolding as a post-cataclysmic parable, <i>Mörk Materia</i>'s narrator witnesses the slow lurch of mutation and evolution towards a new order of biology. Alongside the narrator, Llamazales sculpts her climate anxiety into alien-like organisms—creatures that amalgamate future ecology and post-human relics: fishing lures and shells adorn and pierce their skin. These beings exist after us and are of us. They live further up/down the line. On the back wall of the gallery, the artist maps a constellation of spinning, tentacular stars: a place for looking ahead.
            <br /><br />
            Daniel Jorgenson's digital collages open like portals along the twisting line, pulling the viewer into parallel dimensions of pure energy. His veils hang like windows or doors, tracing a thin line between this world and one just outside it. Composed entirely of stock nature photography, Jorgenson stretches his source material into something more spiritual than physical in substance. It's difficult to say whether these abstractions are forming or falling apart; a flower erupts into a storm. Like Llamazales's ceramic organisms, Jorgenson's work is frozen mid-evolution, both stopping time while we watch.
            <br /><br />
            <br /><br />
            <ArtistBio>
                <b>Emily Llamazales</b> (b. 1997) is an interdisciplinary artist whose work draws from science-fiction and reimagined biology in order to address concerns about our ecological future. She holds a BA in Interdisciplinary Studio Art and Design from the University of Georgia's Lamar Dodd School of Art (2019), was selected as a finalist for the 2023 Emerging Artist Fellowship by Atlanta Celebrates Photography, awarded a 2022/2023 Emerging Artist Award from the Atlanta Mayor's Office of Cultural Affairs and is a recipient of a 2022 Idea Capital Grant (Atlanta).
                <br /><br />
                Recent exhibitions include Mörk Materia at MINT (2024), a two person presentation at NADA Miami alongside Sam Newton with Cleo the Gallery (2023), and Gloom-Bloom, a duo show with Sydney Ewerth at Day & Night Projects (2023).
                <br /><br />
                <br/><br/>
              <b>Daniel Jorgenson</b> (b. 1994) is an artist living and working in Savannah, GA. His background is in religion with no formal training in the arts, but he has worked with digital media for over a decade, and has been honing the current iteration of his work over the last several years.
              <br /><br />
              Inspired by the beauty of life lived through the Eastern Orthodox ecclesiastical calendar, his art is an exploration of the digital frontier as a means of expressing modern spiritual reality both in difficulty and sublimity. Through the layering and manipulation of digital images, he hopes to create unconventional iconic windows into a spiritually dense world.
            </ArtistBio>
          </p>
        </ExhibitionText>
      </TextColumn>

      <ImageColumn>
        <ImageGallery>
          {[...Array(20)].map((_, i) => (
            <CarouselImage 
              key={i + 1}
              src={`/images/exhibitions-pictures/Spirals/Spiral-${i + 1}${getImageExtension(i + 1)}`}
              alt={`Exhibition image ${i + 1}`}
            />
          ))}
        </ImageGallery>
      </ImageColumn>
    </Container>
  )
}

export default OnView 