import Login from "./pages/login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AddSim from "./pages/addSim";
import { Helmet } from 'react-helmet'


function App() {
  return (
    
      <div className="App">
      <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montagu+Slab&family=Praise&display=swap" rel="stylesheet"/>

				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap'
					rel='stylesheet'
        />
        

      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/addsim' element={<AddSim/>}   />
          </Routes>
        </BrowserRouter>  
      </div>
   
  );
}

export default App;
