import NavLinks from "./Navlinks"
import navLogo from "../assets/images/logo.svg"
import hamburgerIcon from "../assets/images/icon-hamburger.svg"
import Button from "./Button"

const NavBar = () => {
    return (
        <nav className="relative flex justify-between items-center w-full h-16 bg-White z-50 md:pr-10 p-4">
            <img src={navLogo} alt="Navigation logo" />
            <NavLinks />
            <img src={hamburgerIcon} alt="hamburger Icon" className="block md:hidden lg:hidden " />
            <Button />
        </nav>
    )
}
export default NavBar