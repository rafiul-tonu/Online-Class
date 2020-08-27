import React from 'react';

const Cart = (props) => {
  console.log(props)
  const cart = props.cart
  const totalPrice = cart.reduce((sum, course)=> sum +course.price,0)
  return (
    <div>
      <h2> Enrolled Courses: {cart.length} </h2>
      <p> <strong> Total Price: {`$`}{totalPrice} </strong> </p>
    </div>
  );
};

export default Cart;