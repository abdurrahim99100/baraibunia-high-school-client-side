import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {

    const { user, logOutUser } = useAuth();

    // lgoOut related code;
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                // signOut successfully;
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navOption = <>
        <li>
            <Link to="/">home</Link>
        </li>
        <li>
            <Link to="/">result</Link>
        </li>
        <li>
            <Link to="/">blog</Link>
        </li>
        <li>
            <Link to="/">about</Link>
        </li>
        {/* conditional user */}
        {
            user ? <>
                <li>
                    <Link onClick={handleLogOut}>logout</Link>
                </li>
            </> : <>
                <li>
                    <Link to="/login">login</Link>
                </li>
            </>
        }
    </>
    return (
        <div className="bg-base-200">
            <div className="navbar container justify-between mx-auto">
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                            {navOption}
                        </ul>
                    </div>
                    <Link to="/" className="text-xs lg:text-xl uppercase font-semibold">baraibunia high school</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal uppercase font-semibold text-[#000000]">
                        {navOption}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;