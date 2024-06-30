import { useState } from "react"

const ToDoList = () => {
let [task,setTask] = useState("");
let [taskArray,setTaskArray] = useState([]);

    let clickHandler=()=>{
        console.log("clicked")
        setTaskArray([...taskArray,task]);
        console.log(taskArray);
    }
let onChangehandler =(e) => {
console.log( e.target.value );
setTask(e.target.value)
}

    return ( 
        <>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Task</label>
            <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
                onChange = {onChangehandler}
            />
            
        </div>
        <button onClick={clickHandler}> Add Task</button><br/>
        <ol>
            {
            taskArray.map( (elem) => {
                return <li> {elem} </li>

            })
        }
        </ol>
        </>
     );
}
 
export default ToDoList;