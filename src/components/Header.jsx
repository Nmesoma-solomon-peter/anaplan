import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className='header'>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <img src={logo} className='logo' alt='logo' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
              <li class="nav-item me-3">
                <a class="nav-link active" aria-current="page" href="#">Why Anaplan <i class="bi bi-chevron-down"></i></a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">Solutions <i class="bi bi-chevron-down"></i>
                </a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">Service and Support <i class="bi bi-chevron-down"></i>
</a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">Resources <i class="bi bi-chevron-down"></i>
</a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">Company <i class="bi bi-chevron-down"></i>
</a>
              </li>
            </ul>
            <div className='ms-auto'>
              <button type="button" className="btn btn-primary text-white btn-sm ms-2 header__btn ">Login</button>
              <button type="button" className="btn btn-outline-primary btn-sm ms-2 header__btn">Get a demo</button>
              <i class="bi bi-search ms-4"></i>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header