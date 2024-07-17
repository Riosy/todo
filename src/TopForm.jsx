import React, { useState } from 'react';
import { useContext } from 'react';
import { taskcontext } from './context';

const TopForm = ()=>{
    const [task , settask] = useState("")
    const {taskitems , settaskitems} = useContext(taskcontext)

const handletask = (event)=>{//event eshare dare be elemani ke dare az fun estefade mikone
 settask(event.target.value)//ba harbar taghir (on Change) value marbot be in input ro beriz to state
}

const savetask = (event)=>{
    event.preventDefault()// bara inke reset nashe
settaskitems([...taskitems , {id:Math.random() , title:task , done:false}])
settask("") //kadro khali kon
}

    return(
        <>
            <h4 className="text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
            <form onSubmit={savetask}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" value={task} onChange={handletask}/>
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;