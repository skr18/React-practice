
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import CartUi from './CartUi';
import { useSelector } from 'react-redux';

function App() {
  const cartVisible = useSelector(state => state.ui.cartIsVisbile)
  const demoItems=[
    {
      id:1,
      price:5,
      title:"Item 1",
      description:"1st item of the list",
    },
    {
      id:2,
      price:10,
      title:"Item 2",
      description:"2nd item of the list",
    }
  ]
  return (
    <div style={{backgroundColor:"#757575", height:" 100vh"}}>
      <Navbar/>
      { cartVisible && <CartUi/>}
      <Home items={demoItems}/>
    </div>
  );
}

export default App;
