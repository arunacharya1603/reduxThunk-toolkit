import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state)=> state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <span style={{fontWeight:"italic",fontFamily:"cursive", fontPalette:"light", fontSize:"20px", padding:"1.2rem"}}> Redux Toolkit</span>
      <div>
        <Link className='navLink' style={{fontWeight:"bolder"}} to={"/"}>Home</Link>
        <Link className='navLink' style={{marginRight:"9px",fontWeight:"bolder"}} to={"/cart"}>Cart</Link>
        <span style={{fontWeight:"bolder"}}>items:{items.length}</span>
      </div>
    </div>
  )
}

export default Navbar
