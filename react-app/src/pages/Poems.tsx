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

const ImageColumn = styled.div`
  grid-column: 3 / 5;
  position: relative;
  overflow-y: auto;
  padding: 1rem;
  padding-top: 2rem;

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

const Poems: React.FC = () => {
  return (
    <Container>
      <TextColumn>
        <ArtistInfo>
          <h1>Sara Malpass & Sara Hess: Poems</h1>
        </ArtistInfo>
        <br />
        <p>September 19th through November 2nd.</p>
        <br />
        <ExhibitionText>
          <p>
            Aunt Marge&apos;s window looked out toward her garden, an overgrown bed of flowers, weeds, and hours spent. After she passed, Sara Hess spent a week in her Aunt Marge&apos;s home, sorting through her late great-aunt&apos;s accumulations. Hess looked out the kitchen window and saw the<br />
            <br />
            A-Jax Soap<br />
            Rabbit<br />
            Green vine spilling over<br />
            Glass Vase<br />
            Sponge<br />
            <br />
            Sara Malpass approached each morning in her studio at NIAD Art Center with a similar culling. Lists spill down the length of her page, one word bridging to the next as Malpass takes inventory of the letters, syllables, and sounds-piles of seemingly disparate ideas.<br />
            <br />
            Walls<br />
            Wedge<br />
            Whose<br />
            When<br />
            <br />
            emerges as an exercise in alliteration or, perhaps, an interest in the undulating line of a &quot;W.&quot;<br />
            <br />
            22. mirrors<br />
            23. however<br />
            24. un clear<br />
            <br />
            is more difficult to probe. In these more poetic reflections, images surface.<br />
            <br />
            Letters and words traverse the work in Poems. Malpass&apos;s intuitive lists are simultaneously intimate and distant. Alongside the artist, we glimpse the content of her unconscious but can never fully enter, left to guess at the threads connecting one word to the next. Hearts and flowers that float across her paintings become surprising windows; words filling the petals, centers, and halves peer quietly through.<br />
            <br />
            Texts from Malpass&apos;s drawings slip sideways down and off the page, climbing the arms and legs of Hess&apos;s sculptures. Arches summon us inward as letters and words, seemingly clipped from a longer story, trail and twist up the forms like vines. You get a little, but not enough. &quot;Tell me&quot; curls across a large, earthen arch. These whispered messages unfurl when we listen closely. In another instance, paper pulp and chicken wire form an oversized iron, pressing out the wrinkles to leave a clear image beneath. Like Hess, we see the<br />
            <br />
            A-Jax Soap<br />
            Rabbit<br />
            Green vine spilling over<br />
            Glass Vase<br />
            Sponge<br />
            <br />
            but the garden through the window is a haze of light: green, orange, and pink.<br />
            <br />
            <br />
            <br />
            <ArtistBio>
              <b>Sara Hess (b. 1996)</b> is an artist living and working between Columbus, OH and Athens, GA.<br />
              <br />
              She completed a BFA in Studio Art from the University of Georgia&apos;s Lamar Dodd School of Art and an MFA in Visual Art, with emphasis in Printmaking, at Ohio State University. Her interdisciplinary studio practice utilizes painting, printmaking, discarded objects, ceramics, glass, sculpture, and installation. She endeavors to listen deeply through her work and relationship with images, materials, and people.<br />
              <br />
              Sara has exhibited work regionally and nationally at Urban Arts Space in Columbus OH, Stove Works in Chattanooga, TN, Erie Art Museum in Erie, PA, and IPCNY in New York. Previous residencies include In Cahoots in Petaluma, CA, Chautauqua Visual Arts in Chautauqua, NY, and Officina Stamperia del Notaio in Tusa, Sicily.<br />
              <br />
              She is co-founder of Two Parts Press, a printmaking studio and artist collaboration based in Athens, GA.<br />
              <br />
              <br />
              <b>Sara Malpass (b. 1967)</b> lives and works in Richmond, CA. Her works, particularly the daily lists on notebook paper, isolate an exploration of written language in visual art that is uncommon in mainstream contemporary artists but prominent in the works of so-called outsiders. Her reductive, pragmatic language most often culls words from her current reading material or immediate interests, her piles of lists culminating as a living personal archive central to her prolific creative practice.<br />
              <br />
              These are uses of written language, not as an appropriation of typography aesthetics, but for the utility of expressing ideas - handwritten text that affords a presence to language as mark-making as well as its phonetic and conceptual function. Read in sequential order, Malpass&apos;s ink on paper transcends a mundane list of words and becomes hermetic poetry.
            </ArtistBio>
          </p>
        </ExhibitionText>
      </TextColumn>

      <ImageColumn>
        <ImageGallery>
          {[...Array(17)].map((_, i) => (
            <CarouselImage 
              key={i + 1}
              src={`/images/exhibitions-pictures/Poems/Poems-${i + 1}.jpg`}
              alt={`Exhibition image ${i + 1}`}
            />
          ))}
        </ImageGallery>
      </ImageColumn>
    </Container>
  )
}

export default Poems 