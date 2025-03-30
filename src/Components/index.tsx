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
                        {navitems.map(items => <li className='items'>{items}</li>)}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;