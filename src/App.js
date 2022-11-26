import Login from "./pages/login";
import {
  Routes,
  Route,useLocation,Navigate,useNavigate
} from "react-router-dom";
import Navbar from "./components/navbar";
import { Helmet } from 'react-helmet'
import Header from "./components/header";
import Dashboard from "./pages/dashboard"
import AddSim from "./pages/addSim"
import React,{useEffect} from 'react'
import Users from "./pages/allUser";
import Reports from "./pages/reports";
import IdReport from "./pages/reports/reportId";
import UserSim from './pages/allUser/userSim'
import AddOffer from "./pages/addOffer";
import {useSelector,useDispatch} from 'react-redux'
import { logout } from "./store/actions/loginAction"
import jwtDecode from "jwt-decode"
import Signup from "./pages/signup";
import DeleteSim from "./pages/deleteSim";


function App() {

  const navigate= useNavigate()
  let location = useLocation()
  const dispatch = useDispatch()
  const {isAuthenticated,isLoding} = useSelector(state=>state.loginReducer)
 
  useEffect(() => {
    const token = localStorage.getItem('auth_token')
        
        if (token) {
          const decodedToken = jwtDecode(token);   
          if (decodedToken.exp * 1000 < new Date().getTime()) {
              dispatch(logout(navigate))
               
             
          }
        }
  },[navigate,dispatch])


  return (
    
      <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montagu+Slab&family=Praise&family=Raleway&display=swap" rel="stylesheet"/>

				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap'
					rel='stylesheet'
        />
        

      </Helmet>
      
     
        <div>
        {location.pathname === '/login' ? null : <Header />}
        
         <div className={location.pathname === '/login'  ? null :"cont"} > 
        
          <div className={location.pathname === '/login'   ? null :"navbar"}>
            
        {location.pathname === '/login' ? null :  <Navbar />} 
                 </div>
          <Routes>
          
          <Route path='login' element={<Login />} />

            <Route path='/' element={<Home isLogin={isAuthenticated} Comp={Dashboard} />} />
  
            <Route path='dashboard' element={<DashRoute isLogin={isAuthenticated} comp={'dashboard'}/> }  />
              <Route path='addsim'  element={<PrivateRoute isLogin={isAuthenticated} comp={'addsim'}/> }/>
              <Route path='addoffer' element={<AddOfferRoute isLoding={isLoding} isLogin={isAuthenticated} comp={'addoffer'}/> } />
              <Route path='alluser' element={<AllUserRoute isLoding={isLoding} isLogin={isAuthenticated} comp={'alluser'}/> } />
             <Route path='alluser/:id' element={<SingleUserRoute isLogin={isAuthenticated} comp={'alluser/:id'}/> } />
             <Route path='report' element={<ReportRoute isLoding={isLoding} isLogin={isAuthenticated} comp={'report'}/> }/>
             <Route path='reports/:id' element={<SingleReportRoute isLogin={isAuthenticated} comp={'reports/:id'}/> } />
             <Route path='/dilit/dilit' element={<Delit isLogin={isAuthenticated} comp={'/dilit/dilit'}/> } />
            
            <Route path='/:pagename' element={<PageNotFound/>} />
            </Routes>
          
         </div>
            
          
            </div>
          
      
      </div>
   
  );
}

export default App;



const Home = ({ isLogin,Comp }) => {
  const {isLoding} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoding ?<Comp/> : <Navigate to="/login" /> 
}

const DashRoute = ({ isLogin, comp }) => {
  const {isLoding} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoding ?<Dashboard path={`/${comp}`} />  : <Navigate to="/login" /> 
}


const PrivateRoute = ({ isLogin, comp }) => {
  const {isLoding} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoding ?<AddSim path={`/${comp}`} />  : <Navigate to="/login" /> 
}

const AddOfferRoute = ({ isLogin,isLoding, comp }) => {
 
  return isLogin && !isLoding ?<AddOffer path={`/${comp}`} />  : <Navigate to="/login" /> 
}

const AllUserRoute = ({ isLogin,isLoding, comp }) => {
 
  return isLogin && !isLoding ?<Users path={`/${comp}`} />  : <Navigate to="/login" /> 
}

const SingleUserRoute = ({ isLogin,isLoding, comp }) => {
 
  return isLogin && !isLoding ?<UserSim path={`/${comp}`} />  : <Navigate to="/login" /> 
}


const ReportRoute = ({ isLogin,isLoding, comp }) => {
 
  return isLogin && !isLoding ?<Reports path={`/${comp}`} />  : <Navigate to="/login" /> 
}


const SingleReportRoute = ({ isLogin,isLoding, comp }) => {
 
  return isLogin && !isLoding ?<IdReport path={`/${comp}`} />  : <Navigate to="/login" /> 
}


const Delit = ({ isLogin,isLoding, comp }) => {
 
  return isLogin && !isLoding ?<DeleteSim path={`/${comp}`} />  : <Navigate to="/login" /> 
}





const PageNotFound = () => {
  return (
    <h1>Page Not Found</h1>
  )
}
