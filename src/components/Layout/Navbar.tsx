import { Link } from 'react-router-dom';

import logo from '../../assets/text-logo.png';
import SearchBar from '../Search/SearchBar';

const Navbar = () => {

    return (
        <nav className="bg-white border-gray-200 shadow-lg">
            <div className="flex mx-auto p-4">
                <Link to="/">
                    <img src={logo} alt='Penguin' />
                </Link>
                <div className="container mx-auto">
                    <SearchBar />
                </div>
            </div>
        </nav>

    );
}

export default Navbar;