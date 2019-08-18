export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_USER_REQUEST',
    payload: { data },
  };
}

export function updateProfileSucces(user) {
  // console.tron.log(user);
  return {
    type: '@user/UPDATE_SUCCESS',
    payload: { user },
  };
}
