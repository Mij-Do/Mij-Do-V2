import { useState } from 'react';
import './index.scss';


interface IProps {
    navitems: string[];
}

const Navbar = ({navitems}: IProps) => {
    const [activeItem, setActiveItem] = useState('hero');
    const handelClick = (item: string) => {
        setActiveItem(item);
    }
    return (
        <>
            <header>
                <h1 className='logo'>Mijdo</h1>

                <nav className='nav-items'>
                    <ul className='list-items'>
                        {navitems.map(items => 
                        <li
                            key={items}
                            className={activeItem === items ? 'items active' : 'items'}
                            onClick={() => handelClick(items)}
                        >
                        {items}
                        </li>)}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;