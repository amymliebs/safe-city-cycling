import React from "react"
import Enzyme, { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import CityTile from "./CityTile"

describe ("CityTile", () => {
  let wrapper

  beforeEach(() =>{
    wrapper = mount(
      <BrowserRouter>
        <CityTile
          id="1"
          name="Boston"
          state="MA"
        />
      </BrowserRouter>
    )
  })

  it("visitor goes to cities index page sees a list of cities", () => {
    expect(wrapper.find("p").text()).toBe("Boston, MA")
  })

  it("should render a link to /cities", () => {
    const link = wrapper.find("Link").first()
    expect(link).toBeDefined()
    expect(link.props()["to"]).toBe("/cities/1")
  })
})
