import NavLinks from "./Navlinks"
import navLogo from "../assets/images/logo.svg"
import hamburgerIcon from "../assets/images/icon-hamburger.svg"

const NavBar = () => {
    return (
        <nav className="flex justify-between w-full bg-white">
            <img src={navLogo} alt="Navigation logo" />
            <NavLinks />
            <img src={hamburgerIcon} alt="hamburger Icon" className="block md:hidden lg:hidden" />
        </nav>
    )
}
export default NavBar