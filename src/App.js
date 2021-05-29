import './App.css';
import { useEffect, useState } from 'react';
import User from './components/User/User';
import Cart from './components/Cart/Cart';

function App() {

  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://www.json-generator.com/api/json/get/cfZHClmaDC?indent=2')
      .then(res => res.json())
      .then(data => setUser(data))
  }, []);

  const handleAddUser = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  }

  return (
    <div>
      <div style={{ backgroundColor: 'skyblue', textAlign: 'center'}}>
        <h2>Total Employees: {user.length} </h2>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ width: '75%' }}>
          {
            user.map(user => <User user={user} handleAddUser={handleAddUser} key={user.id}></User>)
          }
        </div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
