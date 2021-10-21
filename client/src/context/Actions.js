export const LoginStart = (userCrendentials) => ({
    type: "LOGIN_START"
});

export const LoginSucess = (user) =>({
    type: "LOGIN_SUCESSS",
    payload: user,
});

export const LoginFailure = ()=>({
  type:"LOGIN_FAILURE"  
})