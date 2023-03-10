import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import profileIcon from '../assets/profileIcon.jpg'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center mr-5 ml-5 p-3">
            <div className="flex space-x-3 text-sm">
                <div className="w-20">
                    <img src={logo} />
                </div>
                <div>
                    <NavLink to='/' >
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/tvshows'>
                        TV Shows
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/movies'>
                        Movies
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/latest'>
                        Latest
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/mylist'>
                        My List
                    </NavLink>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <div>
                    <BiSearchAlt2 size={20}/>
                </div>
                <div>
                    <IoMdNotificationsOutline  size={20} />
                </div>
                <div className="w-5 border rounded-sm">
                    <img src={profileIcon} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;