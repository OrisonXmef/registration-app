import React, { useContext } from 'react'
import  {useEffect, useState, useContext} from 'react'
import{link, useNavigate} from 'react-router-dom'

function Header() {
    const navigate =useNavigate();
    const {success, loading, user,} =useContext()
  return (
    <div>

    </div>
  )
}

export default Header