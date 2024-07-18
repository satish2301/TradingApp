import React from 'react'

const Footer = ({ isCollapse }) => {
  return (
    <footer className='dmt-footer' style={{ marginLeft: isCollapse ? "89px" : "" }}>Footer</footer>
  )
}

export default Footer