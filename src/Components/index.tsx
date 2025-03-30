import './index.scss';

interface IProps {
    navitems: string[];
}

const Navbar = ({navitems}: IProps) => {
    return (
        <>
            <header>
                <h1 className='logo'>Mijdo</h1>

                <nav className='nav-items'>
                    <ul className='list-items'>
                        {navitems.map(items => items === 'hero' ? <li className='items active'>{items}</li> : <li className='items'>{items}</li>)}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;