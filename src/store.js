import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const reducer = combineReducers({
    // userLogin: userLoginReducer,
    // userRegister: userRegisterReducer,
})

const userFromStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")):
null

const initialState = {
    userLogin: {userInfo: userFromStorage},
    userRegister: {userInfo: userFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    
    );


export default store;

