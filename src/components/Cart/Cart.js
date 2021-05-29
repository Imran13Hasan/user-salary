import React from 'react';

const Cart = (props) => {
    console.log(props)
    const cart = props.cart;

    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        totalSalary = totalSalary + user.salary;
    }

    return (
        <div style={{position: 'sticky', top: '0', width: '300px', height: '300px'}}>
            <h3>Added Person: {cart.length} </h3>
            <h4 style={{color: 'orange'}}>Total Salary: ${totalSalary} </h4>
        </div>
    );
};

export default Cart;