import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const getLogOff = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    console.log(history)
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={getLogOff}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
