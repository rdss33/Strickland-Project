import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <>
            <header>
                <div id="logo-area">
                    <img id="logo" src="pressure-washing-logo-template.png" alt="Sticky's Pressure Washing Company Logo" />
                    <h1 id="company-name" className="merriweather-regular">Sticky's Pressure Washing</h1>
                </div>
                <button id="menu-button" onClick={()=>{
                    setIsMenuOpen(prev=>!prev);
                }}>{isMenuOpen ? <MenuOpenIcon /> : <MenuIcon/>}</button>
            </header>
            {isMenuOpen ? <BurgerMenu/> : null}
        </>
    );
}