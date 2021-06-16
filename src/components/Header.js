import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import { FaPlus, FaMinus } from 'react-icons/fa'


const Header = ({ title, onAdd, buttonAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
      <Button color= 'rgba(255, 255, 255, 0.1)' text={buttonAdd ? (<FaMinus />) : (<FaPlus />)} onClick={onAdd} />
      )}
    </header>
    )
}

Header.defaultProps = {
  title: 'Chalkboard Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headerStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }


export default Header;
