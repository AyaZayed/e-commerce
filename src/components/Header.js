import React, { useContext, useState } from 'react'
import { CompanyContext } from '../context/companyContext';
import { TbMenu2 } from 'react-icons/tb';
import { BsCart2 } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { LiaUserCircleSolid } from 'react-icons/lia';

export default function Header() {
    const company = useContext(CompanyContext);
    const { name, logo } = company;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="header_logo">
                <img src={logo} alt={name} />
            </div>
            <div className="header_menu">
                <button className="header_menu_button" onClick={() => setIsOpen(!isOpen)}>
                    <span className="header_menu_button_icon">
                        <TbMenu2 />
                    </span>
                </button>
                <nav className={`header_menu_nav ${isOpen ? 'header_menu_nav--open' : ''}`}>
                    <ul className="header_menu_nav_list">
                        <li className="header_menu_nav_list_item">
                            <GoSearch />
                        </li>
                        <li className='header_menu_nav_list_item'>
                            <LiaUserCircleSolid />
                        </li>
                        <li className="header_menu_nav_list_item">
                            <BsCart2 />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
