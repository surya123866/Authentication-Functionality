import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="header-container">
          <Link to="/" className="nav-link">
            <li className="link-text">Home</li>
          </Link>
          <Link to="/about" className="nav-link">
            <li className="link-text">About</li>
          </Link>
        </ul>
      </nav>
    )
  }
}
