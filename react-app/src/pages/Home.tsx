import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  height: 97vh;
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
    width: 100%;
    box-sizing: border-box;

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

const ShowPreview = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  width: 100%;
  text-decoration: none;
  color: inherit;
  max-width: 400px;
  margin-top: 2rem;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    position: static;
    top: 0;
    margin: 0;
    text-align: left;
  }
`

const ArtistBox = styled.div`
  border: 1px solid black;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  display: inline-block;
  max-width: 200px;
  text-align: left;
  h1 {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    margin: 0.5rem 0;
  }
`

const ShowTagline = styled.div`
  h1 {
    font-size: 16px;
    text-align: left;
  }
`

const ShowPicture = styled.div`
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

const ShopPreview = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 2rem;
  width: calc(100% - 3rem);
  text-decoration: none;
  color: inherit;
  max-width: 400px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    position: static;
    width: calc(100% - 2rem);
    margin: 0;
    box-sizing: border-box;
  }
`

const ShopImage = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  
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

const ShopInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
`

const ShopLabel = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
  h1 {
    font-size: 16px;
    margin: 0;
  }
`

const ShopText = styled.div`
  h1 {
    font-size: 16px;
    margin: 0;
  }
`

const EmptyColumn = styled(Column)`
  @media (max-width: 1024px) {
    display: none;
  }
`

const Home: React.FC = () => {
  return (
    <Container>
      <Column>
        <ShowPreview to="/on-view">
          <ShowPicture>
            <img src="/images/Spiral-11.jpg" alt="Spiral" />
          </ShowPicture>
          <ArtistBox>
            <h1>On View</h1>
          </ArtistBox>
          <ShowTagline>
            <h1>
            Tracing a Spiral: Emily Llamazales & Daniel Jorgenson<br />
            </h1>
          </ShowTagline>
        </ShowPreview>
      </Column>
      <EmptyColumn />
      <Column>
        <ShopPreview href="https://blueboy.bigcartel.com/">
          <ShopImage>
            <img src="/images/image93.png" alt="Shop Preview" />
          </ShopImage>
          <ShopInfo>
            <ShopLabel>
              <h1>New Merch</h1>
            </ShopLabel>
            <ShopText>
              <h1>In the shop</h1>
            </ShopText>
          </ShopInfo>
        </ShopPreview>
      </Column>
      <EmptyColumn />
    </Container>
  )
}

export default Home 