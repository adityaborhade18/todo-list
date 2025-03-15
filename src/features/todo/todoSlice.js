import { createSlice , nanoid  } from "@reduxjs/toolkit";

// nanoid generates unique id //



const initialState={
    todos:[
        {
            id:1,
            text:"hello "
        }
    ]
}
// slice is nothing but the version of reducer and reducer is nothing but functinality
export const todoSlice=createSlice({
    //slices k name  hote hai. aapke uper  depend krta hai kya naam dena hai. u can give any name ,here we have given todo name
    name:'todo', // it is property of redux toolkit
    //slices ki initial sate hoti hai ,
    //i can create initial here also 
    initialState,

    //reduers mai aate hai property and fucntion
    // here addtodo and removetodo are property and tyanche pudhhe function aaahe 
    // here comes diffrence between context api and redux k context api mai bs hum function likh rhy thy without function body yha function eith function body  likh rhe hai
    //How It Works
        //The reducer takes in the current state and an action.
       // It checks the action.type and returns a new state accordingly.
       //  If no action matches, it returns the current state.
    reducers:{
        // it is syntax it always gives access of these two i.e state and action
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload //payload is an object isme kuch b aasakta hai id email anything
            }
            state.todos.push(todo)
        },
        //state:-it gives access of whatever present in initialstate right now or abhi kya situation hai woh hand to hand de deta hai
        // action:- there will be some function for which values will be requires like here to remove any todo(activity )
        //          we required id of that todo and it will get us from the action
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id!==action.payload)
        },
    }
})

// 1. jitni functionality hai unko export krenge sbse pehle qk 
// hum isi functianlity k through state ko update karenge 

export const  {addTodo, removeTodo} =todoSlice.actions


// for the store functionn we required this 
export default todoSlice.reducer  