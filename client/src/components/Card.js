import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { add, removeOne, restart } from "../actions/cartActions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  namePrice: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function MediaCard({ product_data, cart, dispatchCart }) {
  const {
    product_id,
    product_name,
    product_price,
    product_category,
    product_description,
    product_image,
    product_stock,
  } = product_data;
  const cartItem = cart.find(el=>el.id===product_id) 
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product_image}
          title={product_name}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.namePrice}>
            <Typography gutterBottom variant="h5" component="h3">
              {product_name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
              ${product_price}
            </Typography>
          </div>
          <Typography gutterBottom variant="h6" component="h3">
            {product_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ dispay: "flex", justifyContent: "space-evenly" }}>
        <p>Stock {product_stock}</p>

        {!cartItem?.id ? (
          <Button
          disabled={(cartItem?.count < product_stock)}
            onClick={() => {
              dispatchCart(add(product_id));
            }}
            size="small"
            color="primary"
          >
            Add to cart
          </Button>
        ) : (
          <div>
            <Button
              onClick={() => {
                dispatchCart(removeOne(product_id));
              }}
              size="small"
              color="primary"
            >
              -
            </Button>
              {cartItem?.count}
            <Button
            disabled={!(cartItem?.count < product_stock)}
              onClick={() => {
                dispatchCart(add(product_id));
              }}
              size="small"
              color="primary"
            >
              +
            </Button>
          </div>
        )}
      </CardActions>
    </Card>
  );
}
