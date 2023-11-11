import React from 'react'
import LocationDateReserve from './LocationDateReserve'

describe('<LocationDateReserve />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LocationDateReserve />)
  })
})