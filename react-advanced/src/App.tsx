import { Provider } from "react-redux";
import { store } from "./Session_15/store";
import Playlist from "./Session_15/Playlist";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Playlist />
      </Provider>
    </>
  );
}
