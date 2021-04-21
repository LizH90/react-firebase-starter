import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import SignIn from './sign-in'

test('The sign in page renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <SignIn />
    </MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
