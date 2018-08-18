import React from 'react';

const header = () => {
    return(
        <header>
         <h1 className="logo">Logo</h1>
         <input type="checkbox" className="nav-toggle" id="nav-toggle"></input>
         <nav>
             <ul>
                 <li><a href="">צור קשר</a></li>
                 <li><a href="">מפה</a></li>
                 <li><a href="">על החנות</a></li>
                 <li><a href="">בית</a></li>
             </ul>
         </nav>
         <label for="nav-toggle" className="nav-toggle-label"><span></span></label>
        </header>
    );
};

export default header;