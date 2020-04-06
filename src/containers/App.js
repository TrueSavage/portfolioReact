import React, { Component } from 'react'
import '../styles/index.css'

import { Image, Profile } from '../components'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      person: {
        name: 'Frank Savage',
        biography: ' Current Student at UC Irvine, CA. Learning all aspects of Full Stack Developement. A Lifelong Learner! Forever expanding my Personal scope of knowledge in Current and Future Technologies. '
      },
      image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      quote: {
        content: 'All of Life is Code, you know! And those of Us Who Know the Code and How to Code, Co-Create',
        source:'Hendrith Vanlon Smith Jr'
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
