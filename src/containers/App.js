import React, { Component } from 'react'
import '../styles/index.css'

import { Image, Profile } from '../components'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      person: {
        name: 'Frank Savage',
        biography: ' Current Student at UC Irvine, CA. Learning all aspects of Full Stack Developement. I am a Lifelong Learner! Forever expanding my Personal scope of knowledge in Current and Future Technologies. '
      },
      image: 'https://images.unsplash.com/photo-1506345285442-8e9a3a298cdd?auto=format&fit=crop&w=2883&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      quote: {
        content: 'Change the World, Learn to CODE! ',
        source: 'unknown'
      }
    }
  }

  render() {
    const { image, person, quote } = this.state

    return (
      <div className="App">
        <Image src={image} />
        <Profile person={person} quote={quote} />
      </div>
    )
  }
}
