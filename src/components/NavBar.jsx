import NavLinks from "./Navlinks"
import navLogo from "../assets/images/logo.svg"

const NavBar = () => {
    return (
        <nav className="flex w-full bg-white">
            <img src={navLogo} alt="Navigation logo" />
            <NavLinks />
        </nav>
    )
}
export default NavBar