import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import { RepositoryList } from "./components";
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a npm package</h1>
        <RepositoryList />
      </div>
    </Provider>
  );
}

export default App;
