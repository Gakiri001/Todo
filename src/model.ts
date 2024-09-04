export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// import React, {useReducer} from 'react'

// type Actions = 
//   | {type: "Add", payload:string}
//   | {type: "remove", payload:number}
//   | {type: "done", payload:number}

// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, [])

//   const TodoReducer = (state: Todo[],action:Actions) => {
//     switch(action.type){
//       case "Add":
//         return [
//           ...state,
//           {id: Date.now(), todo: action.payload, isDone: false}
//         ]
//     }
//   }
//   return (
//     <div>ReducerExample</div>
//   )
// }

// export default ReducerExample
