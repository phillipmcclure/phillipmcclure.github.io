import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import OnView from './pages/OnView'
import Upcoming from './pages/Upcoming'
import Archive from './pages/Archive'
import Info from './pages/Info'
import Poems from './pages/Poems'
import ReadingRoom from './pages/ReadingRoom'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #FFFFF3;
    font-family: Arial, Helvetica, sans-serif;
    max-height: 100%;
    max-width: 100%;
  }

  body {
    margin-bottom: 2rem;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
    background-color: #FFFFF3;
  }

  h1 {
    font-weight: normal;
    font-size: x-large;
    margin: 0;
  }

  h2 {
    font-weight: normal;
    font-style: italic;
    font-size: x-large;
    margin: 0;
  }

  p {
    font-weight: normal;
    font-size: smaller;
    margin: 0;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 1fr 1fr 1fr;
  gap: 0;
  padding: 1rem;
  height: calc(100vh - 2rem);
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
    padding: 0;
    overflow: visible;
  }
`

const Column = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  height: 95vh;
  padding-left: 1rem;
  padding-top: 1rem;
  
  &:not(:last-child) {
    border-right: 1px solid black;
  }

  @media (max-width: 1024px) {
    border-right: none !important;
    margin: 0;
    overflow: visible;
    height: auto;
    padding: 0;
  }
`

const MainContent = styled.div`
  grid-column: 2 / -1;

  @media (max-width: 1024px) {
    grid-column: 1;
  }
`

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Column>
          <Navigation />
        </Column>
        <MainContent>
          <Routes>
            <Route path="*" element={<RedirectWithTrailingSlash />} />
            <Route path="/" element={<Home />} />
            <Route path="/on-view/" element={<OnView />} />
            <Route path="/upcoming/" element={<Upcoming />} />
            <Route path="/reading-room/" element={<ReadingRoom />} />
            <Route path="/info/" element={<Info />} />
            <Route path="/poems/" element={<Poems />} />
            <Route path="/archive/" element={<Archive />} />
          </Routes>
        </MainContent>
      </Layout>
    </BrowserRouter>
  )
}

const RedirectWithTrailingSlash = () => {
  const location = window.location;
  
  if (!location.pathname.endsWith('/') && location.pathname.length > 1) {
    return <Navigate to={`${location.pathname}/`} replace />;
  }
  
  return <Navigate to="/" replace />;
};

export default App 