import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { userActions } from '../../store/slice/user-slice';
import { RootState } from '../../store';


const CartButton = () => {
const dispatch = useDispatch();
const total = useSelector((state: RootState) => state.cart.totalQuantity); 
const toggleCartHandler = () => {
  dispatch(userActions.toggleVisable());
};

  return (
 <button className={classes.button} onClick = {toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>

  );
};

export default CartButton;
