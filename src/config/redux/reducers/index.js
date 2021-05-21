const initialState = {
  isSuccess: "false",
  isLogin: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_REGISTER":
      return { ...state, isSuccess: action.payload };
    default:
      return state;
  }
};
