import NavItem from "./navitem"
import { Outlet } from "react-router-dom"

const Navbar = () => {
    
    return (
   
        <>
            <NavItem itemnames={['Dashboard', "Add Sim","Add Offer" , "All User" , "Report"]} />
            <Outlet/>
    
            </>
    )
}

export default Navbar