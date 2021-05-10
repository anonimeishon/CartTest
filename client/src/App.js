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
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const [filter, setFilter] = useState("all");
  const [shownElements, setShownElements] = useState([]);
  const [state, setState] = useState(0);
  const classes = useStyles();

  const fetchProducts = async () => {
    try {
      const data = await publicFetch.get("get-products");
      dispatchProducts(initProduct(data.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  const buyItems = async (data) => {
    try {
      data.forEach(async (val) => {
        await publicFetch.post("buy-products", {
          count: val.product_stock - val.count,
          id: val.product_id,
        });
      });
      
      await fetchProducts();
      setState(1)
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    setState(0)
  }, [state]);

  useEffect(() => {
    let auxProd = [];

    if (filter === "all") {
      auxProd = [...products];
    } else if (filter === "Vegetal") {
      auxProd = products.filter((val) => val.product_category === "Vegetal");
    } else if (filter === "Fruta") {
      auxProd = products.filter((val) => val.product_category === "Fruta");
    }
    auxProd.sort(function (a, b) {
      return a.product_id - b.product_id;
    });
    setShownElements([...auxProd]);
  }, [filter, products]);

  return (
    <div>
      <SearchAppBar
        buyItems={buyItems}
        products={products}
        cart={cart}
        dispatchCart={dispatchCart}
        setFilter={setFilter}
      />
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
