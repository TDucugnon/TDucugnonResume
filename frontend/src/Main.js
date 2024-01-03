import './style/Main.css';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Content from './Content';

function Main() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <SideBar></SideBar>
      <Content></Content>
    </div>
  );
}

export default Main;
