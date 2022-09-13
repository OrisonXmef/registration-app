
import  {useEffect, useState, useContext} from 'react'
import{link, useNavigate} from 'react-router-dom'
import { GrLogout } from "react-icons/gr";
import authContext from './context/auth.context';
import {FaUser} from "react-icons/fa"

function Header() {
    const navigate =useNavigate();
    const {success, loading, user} =useContext(AuthContext)
    useEffect(()=> {
      if (!user){
        navigate("/login");
      }
    }, [user]);

  return (
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Registration App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li> */}
      </ul>


      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>

      <ul class ="navbar-nav ml-auto">
        <li class=" na-item">
          <a class="nav-link" href="#">
            <FaUser/>
            {user.username}
          </a>
        </li>
        <li class=" na-item">
          <a class="nav-link" type="button" onClick={()=> authLogout()}
          href="/"><GrLogout/>
            
          </a>
        </li>
      </ul>

    </div>
  </div>
</nav>
  </div>
  )
}

export default Header