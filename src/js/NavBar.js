import React, {Component} from 'react';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
// ref can only be used on class components
class NavBar extends Component {
  // get a reference to the element after the component has mounted
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