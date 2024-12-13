
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Убедитесь, что путь корректен
import store from "./redux/store"; // Проверьте, что путь к store правильный
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
