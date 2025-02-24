import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/user/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.users);
  const status = useSelector((state) => state.users?.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <>
          <h1>Users:</h1>
          {users.map((user) => (
            <>
              <div key={user.id}>{user.name}</div>
            </>
          ))}
        </>
      )}
      {status === "failed" && <p>Error loading users.</p>}
    </div>
  );
};

export default UserList;
