import React, {Component} from 'react';


class Header extends Component {
    render(){
        return(
         <header>
             <div className = 'logo'>
             <h2>MAP FOR NOOKLYN</h2>
             </div>
             <nav>
                 <ul>
                     <li className = "first">
                         <a href = "#"> Home</a>
                     </li>
                     <li className = "middle">
                         <a href = "#"> Connect</a>
                     </li>
                     <li className = "last">
                         <a href = "#"> APIfile</a>
                     </li>
                     
                 </ul>
             </nav>
         </header>

        );
    }
}
export default Header;