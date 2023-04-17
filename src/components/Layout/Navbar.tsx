import { Link } from 'react-router-dom';

import logo from '../../assets/text-logo.png';
import SearchBar from '../Search/SearchBar';

const Navbar = () => {

    return (
        <nav className="bg-white border-gray-200 shadow-lg">
            <div className="flex mx-auto p-4 xs:flex-col sm:flex-row md:flex-row">
                <Link to="/">
                    <img src={logo} alt='Penguin' className="object-cover logo" />
                </Link>
                <div className="container mx-auto">
                    <SearchBar />
                </div>
            </div>
        </nav>

    );
}

export default Navbar;