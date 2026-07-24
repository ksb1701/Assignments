import { Provider } from "react-redux";
import { store } from "./Session_16/store";
import RestaurantList from "./Session_16/RestaurantList";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RestaurantList />
      </Provider>
    </>
  );
}
