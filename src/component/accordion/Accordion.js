import React, {useState} from "react";
import AccordionList from "./AccordionList";
import './Accordion.css'
import {question} from './AccordionAPI'

const Accordion = () => {
    const [data, setData] = useState(question);
    return(
        <div className="container mt-3">
           <div className="accordion-cont">
            <h1>Accordion</h1>
            <div class="accordion" id="accordionExample">
                {data.map((data, i) => {
                    return <AccordionList data={data} key={i}/>
                })}
            </div>
                
           </div>
        </div>
    )
}
export default Accordion;