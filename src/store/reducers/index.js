const INITIAL_STATE = {
    
    user : {
name : "talha",
email : "talha@gmail.com"
    }
}


export default (state = INITIAL_STATE,action) => { 
switch (action.type) {
    case "FACEBOOKLOGIN" : 
    return ({
        ...state,
        user : action.payload
    })
}
return state;
}