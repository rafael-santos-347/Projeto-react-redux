import { combineReducers } from "redux";

function adicionarBule(state = 0, action) {
    if(action.type === "bule") {
        return state + 1;
    } else {
        return state;
    }
}

function adicionarCafe(state = 0, action) {
    if(action.type === "cafe") {
        return state + 1;
    } else {
        return state;
    }
}


const reducers = combineReducers({adicionarBule, adicionarCafe});

export default reducers;