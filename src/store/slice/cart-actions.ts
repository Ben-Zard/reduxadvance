import { cartActions } from "./cart-slice";
import { CartState } from "./interface";
import { userActions } from "./user-slice";

export const sendcartData = (cart: CartState) => {
  return async (dispatch: any) => {
    const loadingnotification = {
      status: "pending",
      title: "Sending...",
      message: "Sending cart data!",
    };
    dispatch(userActions.showNotifcation(loadingnotification));

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-3eed4-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
        }
      );
      if (!res.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();

      const endloadingnotification = {
        status: "success",
        title: "Success!",
        message: "Sent cart data successfully!",
      };
      dispatch(userActions.showNotifcation(endloadingnotification));
    } catch (error) {
      const errornotification = {
        status: "error",
        title: "Error!",
        message: "Sending cart data failed!",
      };
      dispatch(userActions.showNotifcation(errornotification));
    }
  };
};
export const fetchCartData = () => {
  return async (dispatch: any) => {
    const fetchdata = async () => {
      const res = await fetch(
        "https://react-http-3eed4-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );
      if (!res.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await res.json();
      return data;
    };
    try {
      const cartData: CartState = await fetchdata();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
      }));
    } catch (error) {
      const errornotification = {
        status: "error",
        title: "Error!",
        message: "Fetching cart data failed!",
      };
      dispatch(userActions.showNotifcation(errornotification));
    }
  };
};
