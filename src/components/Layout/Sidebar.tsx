import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleQuestion, faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.png';

const Sidebar = () => {

    return (
        <div className="relative bg-downrider h-screen flex justify-center sidebar-wrapper">
            <div className="flex flex-col items-center space-y-10 py-6">
                <div className="flex items-center justify-center rounded-md">
                    <Link to="/">
                        <img src={logo} alt='Penguin' />
                    </Link>
                </div>
                <div className="space-y-48">
                    <ul className="text-center">
                        <li className="p-5 text-[color:white] active">
                            <Link to="/" className="p-5">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Link>
                        </li>
                        <li className="p-5 text-[#7f8792]">
                            <FontAwesomeIcon icon={faCircleQuestion} />
                        </li>
                    </ul>
                </div>
                <div className="flex items-end justify-end pb-5 h-screen">
                    <ul className="text-center">
                        <li className="p-5 text-[color:white]">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        </li>
                        <li className="p-5 text-[color:white]">
                            <FontAwesomeIcon icon={faUser} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;