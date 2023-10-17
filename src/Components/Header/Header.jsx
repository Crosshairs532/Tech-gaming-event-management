import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link as L } from "react-scroll";
import { socialContext } from "../../AuthProvider/Authprovider";
import { Link } from "react-router-dom";
import './Header.css'
import auth from "../../firebase/firebase.config";
import { BiLogInCircle } from 'react-icons/bi';
import { GiArchiveRegister } from 'react-icons/gi'
import Swal from "sweetalert2";

const Header = () => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {
        user, Logout, loader
    } = useContext(socialContext)

    const handleLogout = () => {
        Logout(auth)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully logged out',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/');
    }
    const Links =
        <>
            <li className=" font-poppins text-lg text-white"><NavLink to='/'>Home</NavLink></li>

            {user && <>

                <li className=" font-poppins text-lg text-white"><NavLink to='/Events'>Events</NavLink></li>

                <li className=" font-poppins text-lg text-white"><NavLink to='/discount'>Discount</NavLink></li></>
            }

            <li className=" font-poppins text-lg text-white">{location.pathname=='/'?<L to='contact' duration={1000} smooth={true} activeClass='active' spy={true} >Contact</L>:null}</li>
            <li className=" font-poppins text-lg text-white">{location.pathname=='/'?<L to='our-service' duration={1000} smooth={true} spy={true} activeClass='active' >Service</L>:null}</li>

        </>

    const changeback = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeback)


    return (
        <div>
            <div className={`navbar bg-zinc-900 lg:flex-row md:flex-row flex-col mx-auto text-white container` }>
                <div className=" lg:navbar-start md:navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-800 rounded-box w-52">
                            {
                                Links
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost font-pacifico text-xl">Crosshairs</a>
                </div>
                <div className="lg:navbar-center md:navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className=" lg:navbar-end md:navbar-end">
                    {
                        user ?

                            <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img className=" w-full object-center" src={`${user.photoURL}`} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#141e4668] rounded-box w-52">
                                        <li>
                                            <button className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </button>
                                        </li>
                                       {
                                        user? <li><button>Name: {user.displayName}</button></li>:null
                                       }
                                        <li><button>Settings</button></li>
                                        <li><button onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            </>
                            :

                            <>
                                {
                                    <div className=" flex gap-7 lg:flex-row md:flex-row flex-col">
                                        <NavLink to='/login' className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? " border-b-2 border-red-600" : ""
                                        }> <button className="    buttons font-poppins text-xl "><span className=" flex items-center gap-3"><BiLogInCircle></BiLogInCircle> sign in</span></button></NavLink>
                                        <NavLink to='/register' className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? " border-b-2 border-red-600" : ""
                                        }><button className=" buttons font-poppins text-xl "><span className=" flex items-center gap-3"><GiArchiveRegister /> sign up </span></button></NavLink>
                                    </div>
                                }

                            </>
                    }
                </div>
            </div>

        </div >
    );
};

export default Header;