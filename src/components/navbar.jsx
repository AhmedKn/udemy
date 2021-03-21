import React from "react"
import '../css/navbar.css'

class Navbar extends React.Component{
    render(){
        return(
           <div className="navbar">
             <h3>Udemy</h3>
             <p>Categories</p>
             <input placeholder="search for anything" />
             <div className="firsthover">
                 <p className="hovred1">udemy for business</p>
                 <div className="hovred11">
                 <p>Get your team access to over 5,500 top Udemy courses, anytime, anywhere.</p>
                 </div>
             </div>
             <div className="secondhover">
                 <p className="hovred2">Teach on udemy</p>
                 <p className="hovred22">Turn what you know into an opportunity and reach millions around the world.</p>
             </div>
             <div className="btn-section">
                 <button>Log-in</button>
                 <button>Signup</button>
             </div>
           </div>
        )
    }
}

export default Navbar;