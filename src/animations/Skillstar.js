import './Star.css';
import React from "../assets/reactelectron.webp";
import Python from "../assets/pythonelectron.png";
import Javascript from '../assets/javascriptelectron1.png';
import CSS from '../assets/csselectron.png';
import HTML from '../assets/htmlelectron.png';

// Star/Atom component in skills page 

const Skillstar = () => {
    return ( 
        <div id="atom">
            <div id="nucleus"></div>
            <div class="orbit">
                <div class="electron"><img src={React} alt="React Electron" className='react'/></div>
            </div>
            <div class="orbit">
                <div class="electron"><img src={Python} alt="Python Electron" className='python'/></div>
            </div>
            <div class="orbit">
                <div class="electron"><img src={Javascript} alt="Javascript Electron" className='javascript'/></div>
            </div>
            <div class="orbit">
                <div class="electron"><img src={CSS} alt="CSS Electron" className='css'/></div>
            </div>
            <div class="orbit">
                <div class="electron"><img src={HTML} alt="HTML Electron" className='html'/></div>
            </div>
        </div>
     );
}
 
export default Skillstar;