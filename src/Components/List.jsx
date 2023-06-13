import React from 'react';

const List = ({inputHandler,value,dateHandler,data,AddTask,todos,completeHandler,deleteHandler}) => {
  return (
    <>
     <div id="form">
        <form>
         <input type="text" placeholder='Enter the task' onChange={(e)=>inputHandler(e)}/><br/>
         <span class="value">{value}</span><br/>
         <input type="date" onChange={(e)=>dateHandler(e)}/><br/>
         <span class="value">{data}</span><br/>
         <div id="container">
         <button id="btnsub" type="submit" onClick={(e)=>AddTask(e)}>Submit</button><br/>
         </div>
        </form>
     </div>
        <div id="table">
            <table border="5" id="mytable">
                <tr id="thtr">
                <th>Id</th>
                <th>Title</th>
                <th>Date</th>
                <th>Completed</th>
                <th>Deleted</th>
                </tr>
            {
            todos?.map((item)=>{
                return(
                    <>
                   <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
                    <td><button id="completebtn"onClick={(e)=>completeHandler(e,item)}>Complete</button></td>
                    <td><button id="deletebtn"onClick={(e)=>deleteHandler(e,item)}>Delete</button></td>
                    </tr>
                    </>
                )
            })
            }
            </table>
            </div>
    </>
  );
}

export default List;
