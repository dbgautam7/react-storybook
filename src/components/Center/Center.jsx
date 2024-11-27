import { node } from 'prop-types'
import './Center.css'

const Center = (props) => {
  return <div className='center'>{props.children}</div>
}

export default Center

Center.propTypes = {
  children: node,
}
