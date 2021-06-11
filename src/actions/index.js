
import { addTodo, removeTodo, toInProgress, toDone } from './index.js';

// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 1
export const addTodo = "AddTodo";
export const removeTodo = "RemoveTodo";
export const toInProgress = "InProgress";
export const toDone = "Done";


export default function addTodo_f(title,status){
// payload =title: 'ejercicio',status: 'Todo',id: 1
    return {
        type: addTodo,
        payload: {
        title:title,   
        status:status,
        id:todoId++
        }
    }
}

export default function removeTodo_f(valor){
    
    return {type: removeTodo,payload:valor}
}

export default function toInProgress_f(valor){
    return {type: toInProgress, payload:valor}
}

export default function toDone_f(valor){
    return {type: toDone, payload:valor}
}