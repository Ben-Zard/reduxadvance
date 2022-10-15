import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { RootState } from "./store";
import { AppDispatch } from "./store";
import { fetchCartData, sendcartData } from "./store/slice/cart-actions";
let isintial = true;

function App() {
  const visable = useSelector((state: RootState) => state.user.isVisable);
  const cart = useSelector((state: RootState) => state.cart);
  const dispach = useDispatch<AppDispatch>();
  const notification = useSelector(
    (state: RootState) => state.user.notifcation
  );
useEffect(() => {
  dispach(fetchCartData());
}, [dispach]);

  useEffect(() => {
    if (isintial) {
      isintial = false;
      return;
    }
    if (cart.changed) {
      dispach(sendcartData(cart));
    }
  }, [cart]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {visable && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

//**************normal useeffect way of using a reducer to send  */
// const loadingnotification = {
//   status: "pending",
//   title: "Sending...",
//   message: "Sending cart data!",
// };
// const endloadingnotification = {
//   status: "success",
//   title: "Success!",
//   message: "Sent cart data successfully!",
// };

// useEffect(() => {
//   const SendCartData = async () => {
//     dispach(userActions.showNotifcation(loadingnotification));
//     const res = await fetch(
//       "https://react-http-3eed4-default-rtdb.firebaseio.com/cart.json",
//       {
//         method: "PUT",
//         body: JSON.stringify(cart),
//       }
//     );
//     if (!res.ok) {
//       throw new Error("Sending cart data failed.");
//     }
//     dispach(userActions.showNotifcation(endloadingnotification));
//     // const resdata = await res.json();
//   };
//   if (isintial) {
//     isintial = false;
//     return;
//   }
//   SendCartData().catch((error) => {
//     const errornotification = {
//       status: "error",
//       title: "Error!",
//       message: "Sending cart data failed!",
//     };
//     dispach(userActions.showNotifcation(errornotification));
//   });
// }, [cart, dispach]);
