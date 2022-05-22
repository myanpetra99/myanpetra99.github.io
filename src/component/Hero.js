import React, { Component } from 'react'
import logo from '../user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
export default class Introduction extends Component {
  render () {
    return (
      <section>
        <div className='container'>
      
          <div className='row'>
            <div className='column'>
              <div className='container-logo'>
                <img src={logo} className='App-logo'></img>
              </div>

              <p >
                <code>&lt; h1 &gt;</code>Hello There        <div className='wave'>👋</div>{' '}np, I'm Petra<code>&lt;/ h1 &gt;</code>
         
              </p>
              <p>
                <code>&lt; p &gt;</code>I love to codes and builds immersive and
                user-friendly applications that users love.
                <code>&lt;/ p &gt;</code>
              </p>
              <p>
                <code>&lt; p &gt;</code>find me <code>&lt;/ p &gt;</code>
              </p>
              <div>
                <code>&lt; div &gt;</code>
                <a href='http://github.com/myanpetra99'>
                  <FontAwesomeIcon icon={faGithub} className='icon' />
                </a>
                <a href='www.linkedin.com/in/michaelyanpetra'  target={'_blank'}><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
                <a href='http://instagram.com/myanpetra99s' target={'_blank'}><FontAwesomeIcon icon={faInstagram} className='icon' /></a>
                <code>&lt;/ div &gt;</code>
              </div>
            </div>
          </div>
        
        </div>
      </section>
    )
  }
}
