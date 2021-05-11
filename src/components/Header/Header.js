import React from 'react'

const Header = ({children, ...rest}) => {
  return (
    <div className="header" {...rest}>
      {children}
    </div>
  )
}

export default Header
