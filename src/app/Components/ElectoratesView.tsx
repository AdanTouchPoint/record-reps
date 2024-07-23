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
            <h1>{el.division}</h1>
            <label>PostalCode:</label> <p>{el.postcode}</p>
           <span> <button value={el.division} onClick={click}>Select</button></span>
        </span>
    ))
}
return (
<div className={"container-content"}>
<div className='contenedor main-form-flex-container buttons-list-container  list-container'>
<button className='circular-button' onClick={back}><span className='arrow-left'></span></button>
<h1 className="main-texts-color main-text-title" >Select your electorate</h1>
<h2 className="main-texts-color main-text-instruction" >Electorates:</h2>
{renderElements()}
<p className="main-texts-color main-text-instruction" >Can’t find your electorate? Go back to the previous page and
try again. Make sure your postcode it correct.</p>
</div>
</div>
);
};

export default ElectoratesView;
