import {Link} from "react-router-dom"
import {useState} from 'react'

const NavItem = ({ itemnames }) => {
  
  let [active,setActive] = useState('')

  return (
    <>
      {itemnames.map(itemname =>{
        let item = itemname.toLowerCase().split(' ').join('')
        
        return (
            <Link key={item} className={`${item === active ? "active" : "nav-item"}`} onClick={() => setActive(item)}
        to={`/${item}`}
      //   key={Math.random()}
      >
      {itemname}
            </Link>
  )
      }
      )
      }
      </>
    )
}

export default NavItem