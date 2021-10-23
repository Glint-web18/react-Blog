export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
});

export const LoginSucess = (user) =>({
    type: "LOGIN_SUCCESSS",
    payload: user,
});

export const LoginFailure = ()=>({
  type:"LOGIN_FAILURE"  
})