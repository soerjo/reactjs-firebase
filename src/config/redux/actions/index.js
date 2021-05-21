const ActionTypes = {
  CHECK_LOGIN: "CHECK_LOGIN",
  CHECK_SIGNUP: "CHECK_SIGNUP",
};

export const checkLogin = () => {
  return {
    type: ActionTypes.CHECK_LOGIN,
  };
};

export const CHECK_SIGNUP = () => {
  return {
    type: ActionTypes.CHECK_SIGNUP,
  };
};
