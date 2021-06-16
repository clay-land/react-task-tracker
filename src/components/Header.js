import PropTypes from 'prop-types'
import Button from './Button'
import { FaPlus, FaMinus } from 'react-icons/fa'


const Header = ({ title, onAdd, buttonAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color= '#1da586' text={buttonAdd ? (<FaMinus />) : (<FaPlus />)} onClick={onAdd} />
    </header>
    )
}

Header.defaultProps = {
  title: 'Task Tracker',
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
