import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "./../../store/cartSlice";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(
      cartAction.addItemToCart({
        // itemId: newItem.id,
        // price: newItem.price,
        // quantity: 1,
        // totalPrice: newItem.price,
        // title: newItem.title,
      })
    );
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
