import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List from './List';
const Todo = () => {
    const navigate=useNavigate();
    const initialTodos=[
    ];
    const completedTodos=[]
    const deletedTodos=[]
    const[task,setTask]=useState('');
    const[date,setDate]=useState('');
    const[value,setValue]=useState('');
    const[data,setData]=useState('');
    const[todos,setTodos]=useState(initialTodos);
    const[completed,setCompleted]=useState(completedTodos);
    const[deleted,setDeleted]=useState(deletedTodos);
    const inputHandler=(e)=>{
        setValue(' ');
        setTask(e.target.value);
    }
    const dateHandler=(e)=>{
        setData(' ');
        setDate(e.target.value);
    }
    const AddTask=(e)=>{
        e.preventDefault();
        if(task===''){
            setValue('Please enter data');
        }
        else if(date===''){
            setData('Please select date'); 
        }
        else{
        const item={
            id:todos.length,
            title:task,
            date:date
        };
        setTodos(
           old=>[...old,item]
        )
        }
    }
    const completeHandler=(e,item)=>{
     e.preventDefault();
    setCompleted(old=>[...old,item]);
    console.log(completed);
    }
    const deleteHandler=(e,item)=>{
     e.preventDefault();
     setDeleted(old=>[...old,item]);
     console.log(deleted);
    }
  return (
    <>
    <div>
        <List
        inputHandler={inputHandler}
        value={value}
        dateHandler={dateHandler}
        data={data}
        AddTask={AddTask}
        todos={todos}
        completeHandler={completeHandler}
        deleteHandler={deleteHandler}
        />
            <div id="compbtn">
             <button id="compNavi" onClick={()=>navigate("/select",{state:completed})}>Compete Tasks</button>
             </div>
             <div id="delbtn">
             <button id="delNavi"onClick={()=>navigate("/delete",{state:deleted})}>Deleted Tasks</button>
            </div>
    </div>
    </>
  );
}

export default Todo;
