import { Provider } from "react-redux";
import { store } from "./Session_14/store";
import PlaylistManager from "./Session_14/PlaylistManager";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PlaylistManager />
      </Provider>
    </>
  );
}
