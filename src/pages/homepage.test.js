import React from "react"
import renderer from "react-test-renderer"
import HomePage from "./homepage"

test("The homepage renders correctly", () => {
  const component = renderer.create(<HomePage />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
