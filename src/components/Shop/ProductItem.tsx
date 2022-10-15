import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { cartActions } from '../../store/slice/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
type Props = {
  title: string;
  price: number;
  description: string;
  id: string;
};
const ProductItem = ({title, price, description,id}:Props) => {
const dispach = useDispatch();
const select = useSelector((state: RootState) => state.cart.items);

const addCartHandler = () => {
  const item = { id, title, price };
  dispach(cartActions.addItemCart(item));

  console.log('Adding to cart...');
  console.log(title, price);
};

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
