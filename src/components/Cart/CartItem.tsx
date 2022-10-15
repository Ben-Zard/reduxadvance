import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/slice/cart-slice';

type Props = {
  item: {
  title: string;
  quantity: number;
  total: number;
  price: number;
  id: string;
  };
};
const CartItem = ({item}: Props) => {
const { title, quantity, total, price,id} = item; 
const dispatch = useDispatch(); 
const removeItemHandler = () => {
dispatch(cartActions.removeItemCart(item.id));
};

const addItemHandler = () => {
dispatch(cartActions.addItemCart({
  id,
  title,
  price,
}));
};
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
       { `$${total.toFixed(2)}`}
          <span className={classes.itemprice}>{`($${price.toFixed(2)}/item)`}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};
export default CartItem;



