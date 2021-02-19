import React, {Component} from 'react';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";

class NavBar extends Component {
  
  componentDidMount(){
    M.AutoInit();
  }

  render(){
    return (
    <nav>
        <div class="nav-wrapper blue">
          <a class="brand-logo center">QUANTAS HORAS VOCÊ TRABALHOU?</a>
        </div>
    </nav>
    )
  }
}
export default NavBar;