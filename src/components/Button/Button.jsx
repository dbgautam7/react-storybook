import { node, string } from "prop-types";
import './Button.css'

const Button = ({variant,children, ...rest}) => {
  return (
      <button className={`${variant} button` } {...rest}>{ children}</button>
  )
}

export default Button

Button.propTypes = {
  variant: string,
  children:node
};