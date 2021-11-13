import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AdminDashBoard from './Pages/Admin/AdminDashBoard/AdminDashBoard';
import Cars from './Pages/Cars/Cars';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Home/Service/Service';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from "./Pages/NotFound/NotFound";
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/cars">
              <Cars/>
            </Route>
            <PrivateRoute exact path="/services/:serviceId">
              <Service/>
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <AdminDashBoard/>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders/>
            </PrivateRoute>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
