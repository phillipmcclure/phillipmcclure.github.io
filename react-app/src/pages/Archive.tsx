import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ExhibitionList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  float: left;
  text-align: start;
  margin: auto;
  padding: 1rem;

  a {
    margin-bottom: 1rem;
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
  }
`

const Archive: React.FC = () => {
  return (
    <ExhibitionList className="exhibitions-titles">
      <Link to="/poems">
        <h2>Poems</h2>
        <h1>Sara Malpass & Sara Hess</h1>
      </Link>
    </ExhibitionList>
  )
}

export default Archive 