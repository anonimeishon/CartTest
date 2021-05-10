import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import {restart} from '../actions/cartActions'
import publicFetch from '../util/axios'


export default function CartModal({ buyItems, open, setOpen, cart, products, dispatchCart }) {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    let temp = [];
    cart.forEach((val) => {

        let productOuts = products.find(el => el.product_id === val.id)
      temp.push({ ...productOuts, count: val.count });
    });

    console.log(cart)
    console.log(products)
    setCartData(temp);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <ShoppingCartIcon /> Cart
        </DialogTitle>
        <DialogContent>
            <Grid container>
              {cartData.map((val) => 
                <Grid key={val.product_id} item xs={12} >
                    <List dense={true}>

                        <ListItem>
                          <ListItemAvatar>
                            <Avatar alt={val.product_name} src={val.product_image} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={val.product_name}
                          />
                          <ListItemText
                            primary={`$ ${val.product_price*val.count}`}
                          />
                        </ListItem>
                    </List>
                </Grid>
              )}
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            dispatchCart(restart())
            setOpen(!open)
          }} color="primary">
            Clear cart
          </Button>
          <Button onClick={async() => {
            await buyItems(cartData)
            dispatchCart(restart())
            setOpen(!open)
          }} color="primary" autoFocus>
            Buy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
