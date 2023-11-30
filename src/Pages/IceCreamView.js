import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../features/icecream/iceCreamSlice";

function IceCreamView() {
  const iceCream = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Number of Ice-cream: {iceCream}</h3>
      <button onClick={() => dispatch(ordered())}>Buy Ice-cream</button>
      <button onClick={() => dispatch(restocked(5))}>
        Restocked Ice-cream
      </button>
    </div>
  );
}

export default IceCreamView;
