import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CartItems } from '../../store/slice/interface';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const  cartitems = useSelector((state:RootState) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
         {cartitems.map((item:CartItems) => (
        <CartItem 
        key = {item.id}
        item={{
          id: item.id,
            title: item.title,
            quantity: item.quantity,
            total: item.total,
            price: item.price,
          }}

        />
        ))}
        </ul>
    </Card>
  );
};

export default Cart;
