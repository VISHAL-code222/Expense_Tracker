import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, Typography, styled } from '@mui/material';

const useStyles = styled((theme) => ({
  addButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: `2px solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  cartItem: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2, 0),
  },
}));

function App() {
  const classes = useStyles();

  const [items, setItems] = useState([
    { id: 1, name: 'Shirt', price: 20 },
    { id: 2, name: 'Pants', price: 30 },
    { id: 3, name: 'Shoes', price: 50 },
  ]);


 //&-----> creating an empty cart array to add,delete item from the cart 
  const [cart, setCart] = useState([]);

//&-------> to add item to array[cart]


  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };



  //&---------> to remove an item from the cart
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.map(item =>
      item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };


  //&-----> the total cost  of all the items present on the cart 

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
      <Typography variant="h3" style={{textAlign:"center",backgroundColor:"cyan"}}   >SHOPPING-CART</Typography>
      <div>
        <Typography variant="h5"   style={{paddingLeft:"10px",backgroundColor:"coral",marginTop:"10px"}}>ITEMS</Typography>
        <List  style={{border:"2px solid black",marginTop:"5px",textAlign:"center"}}>
          {items.map(item => (
            <ListItem key={item.id} className={classes.cartItem}  style={{border:"1px solid red",marginTop:"10px",height:"50px",backgroundColor:"cornsilk"}}>
              <ListItemText primary={`${item.name} - $${item.price}`} />
              <Button
                variant="contained"
                className={classes.addButton}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </Button>
            </ListItem>
          ))}
        </List>
      </div>
      <div>
        <Typography variant="h5">CART</Typography>
        <List>
          {cart.map(item => (
            <ListItem key={item.id} className={classes.cartItem}>
              <ListItemText primary={`${item.name} - $${item.price} - Quantity: ${item.quantity}`} />
              <Button variant="contained" onClick={() => removeFromCart(item)}>Remove</Button>
            </ListItem>
          ))}
        </List>
        <Typography variant="body1"  style={{border:"2px solid black",width:"100px",backgroundColor:"aqua"}}>Total: ${calculateTotal()}</Typography>
      </div>
    </div>
  );
}

export default App;















