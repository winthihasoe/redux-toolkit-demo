import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./features/cake/cakeSlice";
import IceCreamView from "./Pages/IceCreamView";
import UserView from "./Pages/UserView";

function App() {
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <UserView />
      <h2>Number of cakes: {cakes}</h2>
      <button onClick={() => dispatch(ordered())}>buy cake</button>
      <button onClick={() => dispatch(restocked(3))}>reinstocked cake</button>
      <IceCreamView />
    </div>
  );
}

export default App;
