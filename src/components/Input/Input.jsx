import { string } from 'prop-types'
import './Input.css'

const Input = ({ size = 'medium', ...rest }) => {
  return <input className={`input ${size}`} {...rest} />
}

export default Input

Input.propTypes = {
  size: string,
}
