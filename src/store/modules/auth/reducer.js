const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return { ...state };

    // case '@auth/SIGN_IN_SUCCESS'

    default:
      return state;
  }
}
