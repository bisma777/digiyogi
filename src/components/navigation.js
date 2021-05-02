import React from 'react';
import '../stylesheets/style.css'
import '../stylesheets/about.css'
import {Link} from 'react-router-dom'
function Navigation(){
    return(
        <div className="row navigation">
                <Link to="/" className="col-lg-6 col-12 navigation-logo">Digiyogi</Link>
                <div className="col-lg-6 text-right navigation-link visiblity-lg">
                <a>WORK</a>
                <a>CONTACT</a>
                </div>
        </div>
    )
}
export default Navigation