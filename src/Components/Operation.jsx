import React from 'react';
import { useLocation } from 'react-router-dom';
export const Select = () => {
    const {state}=useLocation();
    console.log(state);
  return (
    <>
    <div id="table">
    <table border="5" id="mytable">
        <tr id="thtr">
            <th>ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
        </tr>
    {
        state.map((item)=>{
            return(
                <tr>
                    <td> <h4>{item.id}</h4></td>
                    <td> <h4>{item.title}</h4></td>
                    <td> <h4>{item.date}</h4></td>
                    <td><h4 style={{color:'green'}}>Completed</h4></td>
                </tr>
            )
        })
    }
    </table>
    </div>
    </>
  );
}

export const Delete = () => {
    const {state}=useLocation();
    console.log(state);
  return (
    <>
    <div id="table">
    <table border="5" id="mytable">
        <tr id="thtr">
            <th>ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
        </tr>
    {
        state.map((item)=>{
            return(
                <tr>
                    <td> <h4>{item.id}</h4></td>
                    <td> <h4>{item.title}</h4></td>
                    <td> <h4>{item.date}</h4></td>
                    <td><h4 style={{color:'red'}}>Deleted</h4></td>
                </tr>
            )
        })
    }
    </table>
    </div>
    </>
  );
}
