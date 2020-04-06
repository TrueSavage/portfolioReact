import React, { Component } from 'react'
import '../styles/index.css'

import { Image, Profile, NavBar, Portfolio, Contact} from '../components'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      person: {
        name: 'Frank Savage',
        biography: ' Current Student at UC Irvine, CA. Learning all aspects of Full Stack Web Developement. Both Front and Back-end utilizing HTML, CSS, JavaScript, Node, MongoDB, MYSQL, React, Material-UI.  A Lifelong Learner!  I am Forever expanding my Personal scope of knowledge in Current and Future Technologies. '
      },
      image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      quote: {
        content: 'All of Life is Code, you know! And those of Us Who Know the Code and How to Code, Co-Create',
        source:'Hendrith Vanlon Smith Jr'
      }
    }
  }

  render() {
    const { image, navbar, person, quote, portfolio, contact } = this.state

    return (
      <div className="App">
        <Image src={image} />
        <Profile person={person} quote={quote} navbar={navbar}/>
        {/* <Portfolio navbar={navbar} project1={project1} project2={project2} Project3={Project3}/>   */}
      </div>
    )
  }
}
