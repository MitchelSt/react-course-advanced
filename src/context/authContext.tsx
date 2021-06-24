import React, { createContext, useReducer } from "react";

type AppState = typeof initialState;
type Action = { type: "SET_AUTHED" };

interface AuthProviderProps {
  children: React.ReactNode;
}

const initialState = {
  authed: false,
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_AUTHED":
      return {
        ...state,
        authed: true,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
