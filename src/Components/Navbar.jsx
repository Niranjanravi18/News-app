import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsMag</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
        <div className="nav-link" onClick={() => setCategory("technology")} style={{ cursor: 'pointer' }}>Technology</div>
        </li>
        <li className="nav-item">
        <div className="nav-link" onClick={() => setCategory("business")} style={{ cursor: 'pointer' }}>Business</div>
        </li>
        <li className="nav-item">
        <div className="nav-link" onClick={() => setCategory("health")} style={{ cursor: 'pointer' }}>Health</div>
        </li>
        <li className="nav-item">
        <div className="nav-link" onClick={() => setCategory("sports")} style={{ cursor: 'pointer' }}>Sports</div>
        </li>
        <li className="nav-item">
        <div className="nav-link" onClick={() => setCategory("entertainment")} style={{ cursor: 'pointer' }}>Entertainment</div>
        </li>
     </ul>
   </div>
 </nav>
</div>
  )
}

export default Navbar;
