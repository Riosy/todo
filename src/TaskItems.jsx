import React, { useContext } from 'react';
import { taskcontext } from './context';

const TaskItems = ()=>{
    const {taskitems , settaskitems}=useContext(taskcontext);
    
        if (taskitems.length) {

            const handledone =(id)=>{//on payin ID oni ke click shod ro frestadim inja
             const index = taskitems.findIndex(z=> z.id === id) //index onio biar ke IDsh ba ID on payini yekie (chon IDie ke quinie)
              let newtaskitems = [...taskitems] // chon set hamechio pak mikone aval mirizimesh dakhele motaghayer
              newtaskitems[index].done=!newtaskitems[index].done // bad oni ke entekhab kardimo taghir midim
              settaskitems(newtaskitems) // bad state ro fara mikhonim
            }

           const handledelete =(id)=>{
            let newtaskitems = taskitems.filter(x=> x.id !== id) // onayi ke mokhalefe bede
            settaskitems(newtaskitems)
           }

            return(  

                 <ul className="list-group m-0 p-0 mt-2">
       
                {
                  taskitems.map(t=>(
                      <li className={`list-group-item d-flex justify-content-between ${t.done?"list-group-item-success":""}`}> 
                      {t.title}
                      <span>
                          <i className={`me-3 pointer fas  transition_200 text_hover_shadow${t.done ? "fas fa-times text-warning" : "fas fa-check text-success" }`} onClick={()=>{handledone(t.id)}}></i>
                          <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow" onClick={()=>{handledelete(t.id)}}></i>
                      </span>
                  </li>
                  ))
                }
          
                  </ul>

                   )


        } else {
            return(
            <h2 className='text-center text-danger mt-4'>کاری ثبت نشده</h2>
        )
        }
  
    
}

export default TaskItems;