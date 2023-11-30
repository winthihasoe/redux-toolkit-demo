import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/user/userSlice";

function UserView() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h1>List of user</h1>
      {user.loading && <div>loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : ""}
      {!user.loading && user.user.length ? (
        <ul>
          {user.user.map((user) => (
            <li key={user.id}>name: {user.name}</li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserView;
