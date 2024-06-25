// import React from "react";
// import "./Hero.css";

// function Hero() {
//     return (
//         <div className="Hero">
//             <div className="hero-text">
//                 <h1>Pangu Thrifts</h1>
//                     <ul className="hero-text-left">
//                         <li>made by uva students</li>
//                         <li>black black black </li>
//                         <li>nightmare nightmare nightmare</li>
//                     </ul>
//                     <ul className="hero-text-right">
//                         <li>allah is good</li>
//                         <li>lebron james</li>
//                         <li>choezone</li>
//                     </ul>
//             </div>
                
//             <div className="blackGuy">
//                 <img src="../images/fashionHero.jpg" alt="fashionable black man" />
//             </div>
            
//         </div> 
//     );
// }

// export default Hero;



import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="Hero">
      <div className="hero-text">
        <h1>Buying and Selling for Students, Simplified. </h1>
        <ul>
          <li>made by uva students</li>
          <li>black black black</li>
          <li>nightmare nightmare nightmare</li>
          <li>allah is good</li>
          <li>lebron james</li>
          <li>choezone</li>
        </ul>
      </div>
      <div className= "crop-container">
        <img src="../images/fashionHero.jpg" alt="fashionable black man" />
      </div>
    </div>
  );
}

export default Hero;