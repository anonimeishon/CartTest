import { useState, useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchAppBar from "./components/AppBar";
import publicFetch from "./util/axios";
import productsReducer from "./reducers/productsReducer";
import { initProduct } from "./actions/productActions";
import cartReducer from "./reducers/cartReducer";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./components/Card";


const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "0 auto",
    padding: "1rem",
    maxWidth: "1300px",
  },
}));

export default function App() {
  const [products, dispatchProducts] = useReducer(productsReducer, []);
  const [cart, dispatchCart] = useReducer(cartReducer, {});
  const [filter, setFilter] = useState('all');
  const [shownElements, setShownElements] = useState([]);
  const classes = useStyles();

  const filterItems=(filter, products) => {
    if(filter==='all'){
      setShownElements([...products])
    }
    else if(filter==='Vegetal'){
      setShownElements(products.filter(val=>val.product_category === 'Vegetal'))
    }
    else if(filter==='Fruta'){
      setShownElements(products.filter(val=>val.product_category === 'Fruta'))
    }
  }

  const fetchProducts = async () => {
    try {
      const data = await publicFetch.get("get-products");
      dispatchProducts(initProduct(data.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterItems(filter, products)
  }, [filter, products]);

  return (
    <div>
      <SearchAppBar cart={cart} setFilter={setFilter} />
      <Grid
        className={classes.grid}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        {shownElements.map((val, index) => (
          <Grid item key={val.product_id}>
            <MediaCard
              product_data={{ ...val }}
              cart={cart}
              dispatchCart={dispatchCart}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
