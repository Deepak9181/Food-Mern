import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            let food = action.payload;
            const index = state.items.findIndex(item=> item.id  === food.id)
            if(index>=0){
                state.items[index]=food;
            }else{
                state.items.push(food);
            }
        },
        removeItem:(state,action)=>{
            let id = action.payload;
            state.items = state.items.filter(item=>item.id !== id)
        }
    }
})


export const{addItem,removeItem} = cartslice.actions;

export default cartslice.reducer;
