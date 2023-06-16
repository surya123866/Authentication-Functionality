import {Component} from 'react'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <h1>Home Route</h1>
        <LogoutButton />
      </div>
    )
  }
}
