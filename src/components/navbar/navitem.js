import {Link} from "react-router-dom"


const NavItem = ({itemnames}) => {
  return (
    <div>
      {itemnames.map(itemname =>{
        let item = itemname.toLowerCase().split(' ').join('')
     return (<Link 
        // style={({ isActive }) => ({
        //   // display: "block",
        //   // margin: "1rem 0",
        //   color: isActive ? "red" : ""
        // })}
        to={`/${item}`}
      //   key={Math.random()}
      >
      {itemname}
      </Link>)
      }
      )
      }
      </div>
    )
}

export default NavItem