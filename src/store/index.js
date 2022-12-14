import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterstate={ counter:0,showCounter:true};



const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterstate,
    reducers:{
        increment(state) {
            state.counter++;
        },
        decrement(state) {
           state.counter--;
        },
        increase(state,action) {
            state.counter=state.counter+action.payload
        },
        toggleCounter(state) {
            state.showCounter=!state.showCounter
        }
    }
});

const initialAuthState={
    isAuthenticated: false
}

const authSlice= createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
})








// const counterReducer=(state=initialstate,action)=>{
// if(action.type==='increment'){
//     return {
//         counter:state.counter+5,
//         showCounter:state.showCounter
//     }
// }

// if(action.type==='decrement'){
//     return {
//         counter:state.counter-5,
//         showCounter:state.showCounter
//     }
// }

// if(action.type==='increase'){
//     return {
//         counter:state.counter+action.amount,
//         showCounter:state.showCounter
//     }
// }

// if(action.type==='toggle'){
//     return {
//         showCounter:!state.showCounter,
//         counter:state.counter
//     }
// }

// return state;

// }



// const store=createStore(counterReducer);
// const store =configureStore({
//     reducer:{ counter:counterSlice.reducer}
//     reducer:counterSlice.reducer
// });

const store=configureStore({
    reducer:{counter:counterSlice.reducer, auth:authSlice.reducer}
})

export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;

export default store;