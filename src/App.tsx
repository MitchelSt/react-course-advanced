import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/shop" component={Shop} />
      </Router>
    </>
  );
}
