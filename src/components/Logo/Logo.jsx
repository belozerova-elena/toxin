import { Link } from "react-router-dom"

import './Logo.scss'

function Logo() {
  return (
    <div className='logo'>
      <Link className='logo__link' to="/">
        <div className='logo__link-body'></div>
      </Link>
    </div>
  )
}

export default Logo; 