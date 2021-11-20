import NavItem from "./navitem"
import { Outlet } from "react-router-dom"

const Navbar = () => {
    
    return (
   
        <div className='' >
            <NavItem itemnames={['Dashboard', "Add Sim","Add Offer" , "Add Thumbnail" , "All User" , "Report"]} />
            <Outlet/>
    
            </div>
    )
}

export default Navbar