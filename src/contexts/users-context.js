import { createContext, useEffect, useReducer } from "react";

const UsersContext = createContext();

const USERS_ACTIONS = {
  GET: 'get_all_users',
  ADD: 'add_new_user',
  LOGIN: 'login_user',
  LOGOUT: 'logout_user'
}

const usersReducer = (state, action) => {
  switch (action.type) {
    case USERS_ACTIONS.GET:
      return { ...state, users: action.data };
    case USERS_ACTIONS.ADD:
      fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.user)
      });
      return {
        ...state,
        isLoggedIn: true,
        users: [...state.users, action.user]
      };
    case USERS_ACTIONS.LOGIN:
      return { ...state, isLoggedIn: true };
    case USERS_ACTIONS.LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const UsersProvider = ({ children }) => {
  const [users, dispatchUsers] = useReducer(usersReducer, {
    isLoggedIn: false,
    users: [],
  });

  useEffect(() => {
    fetch('http://localhost:8080/users')
      .then(res => res.json())
      .then(data => dispatchUsers({
        type: USERS_ACTIONS.GET,
        data,
      }))
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        dispatchUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersContext;
export { UsersProvider, USERS_ACTIONS };