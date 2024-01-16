import { Provider } from "react-redux";
import "./App.css";
import { Body } from "./pages/Body";
import appStore from "./store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
