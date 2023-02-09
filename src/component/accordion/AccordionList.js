import React, {useState} from "react";

const AccordionList = (props) => {
    const [show, setShow] = useState(false);

    const ToggleData = () => {
        setShow(!show)
    }
    return(
        <>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button onClick={ToggleData} className={`accordion-button ${show == false ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            {props.data.question}
            </button>
            </h2>
            {show && 
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                {props.data.answer}
                </div>
            </div>
            }
        </div>
        </>
    )
}

export default AccordionList;