import './App.css';
import Header from './Components/Header.js';
import Body from './Components/Body.js';
import Footer from './Components/Footer.js';
import { Outlet } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from './Components/SignIn.js';
import Login from './Components/Log.js';
import { Provider } from 'react-redux';
import appstore from './utils/store.js';
import Cart from './Components/Cart.js';


function App() {
  return (
    <div className="App">
      <Provider store={appstore}>
        <Header/>
        <Outlet/>
        <Footer/>
      </Provider>
    </div>
  );
}


const routerele = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/signin",
      element:<SignIn/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/cart",
      element:<Cart/>
    }
  ]
  },
]);


export default routerele;
