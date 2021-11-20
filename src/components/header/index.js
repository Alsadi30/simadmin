import logo from '../../assets/img/logo.png'
import avatar from '../../assets/img/avatar.png'

const Header = () => {


    return (
        <div className="nav __shadow--lg">
        <div className='twin'>
            <img className='imgi' src={logo} alt="logo" width='30px' height='30px' />
            <div className='brand_name'>
                Phone Care ( Sim Service )
            </div>
            </div>
            <div className='twin'>
                <img className='imgi' src={avatar} alt='avatar' width='35px' height="35px" />
                <div className='user_name'>Admin</div>
            </div>
            
            </div>
    )

}


export default Header