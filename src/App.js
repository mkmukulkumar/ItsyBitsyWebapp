import './App.css';
import Login from './MyComponents/Login';
import Signup from './MyComponents/Signup';
import Header from './MyComponents/Header';
import Dashboard from './MyComponents/Dashboard';

function App() {
  return (
  <>
    <Header/>
  </>
  );
}
function Loginpage() {
  return (
  <>
    <Login/>
  </>
  );
}
function Signuppage() {
  return (
  <>
    <Signup/>
  </>
  );
}
function Dashboardpage() {
  return (
  <>
    <Dashboard/>
  </>
  );
}


export default Dashboardpage;
