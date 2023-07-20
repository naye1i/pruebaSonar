import UserList from "./Components/UserList";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Store";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <UserList />
      </Provider>
    </Router>
  );
}

export default App;
