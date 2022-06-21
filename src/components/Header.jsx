import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const Header = () => {
  let navigate = useNavigate()
  let location = useLocation()

  return (
    <div className='header noselect'>
      {location.pathname !== '/' && (
        <button onClick={() => navigate('/')}>Back</button>
      )}

      <span>
        Loud <span className='up'>UP</span>
      </span>
    </div>
  )
}
export default Header
