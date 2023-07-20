import { useEffect } from "react";
import { fetchAllUsers } from "../Store/slices/users";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const { list: users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <div>
              <img src={user.avatar} alt="" />
              <div>
                <h3>{`${user.first_name} ${user.last_name}`} </h3>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
