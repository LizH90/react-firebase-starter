import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import SignUp from './sign-up'

test('The sign up page renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <SignUp />
    </MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
