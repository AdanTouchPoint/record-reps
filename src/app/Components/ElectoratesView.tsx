"use client";
import React,{FormEvent, useState} from 'react';
import {ElectsView} from '../lib/interfaces';

const ElectoratesView : React.FC<ElectsView> = ({electorate,setShowRepsView,setShowElectoratesView,setShowMainForm, setElectorate,setPostcode }) => {
const click= ( e: FormEvent<HTMLInputElement> ) => {
e.preventDefault();
setPostcode(e.target.value)
//set Rep to show in repView
setShowElectoratesView(false)
//show repView
setShowRepsView(true)
}
const back= ( e: FormEvent<HTMLInputElement>)=> {
    e.preventDefault();
    setShowMainForm(true)
    setElectorate([])
    setShowElectoratesView(false)
}
const renderElements = () => {
    return electorate?.map( (el, index) => (
        <span  className='list-mp-row' key={index}>
            <label>Electorate:</label> <p>{el.division}</p>
            <label>PostalCode:</label> <p>{el.postcode}</p>
            <button value={el.division} onClick={click}>Select</button>
        </span>
    ))
}
return (
<div className={"contenedor main-form-flex-container buttons-list-container list-container"}>
<button onClick={back}>back</button><p>HELOO ELECTS</p>
{renderElements()}
</div>
);
};

export default ElectoratesView;
