"use client";
import React,{FormEvent, useState} from 'react';
import { Electorate, ElectsView } from '../lib/interfaces';
import { checkNumber,checkBoth,checkLetter,checkElectorateAmount } from '../lib/helpers';
import { getRepsByCp, getRepsByElectorate, getElectoratesByCp } from '../lib/petitions';
const ElectoratesView : React.FC<ElectsView> = ({electorate,setShowRepsView,setShowElectoratesView }) => {
const click= ( e: FormEvent<HTMLInputElement> ) => {
e.preventDefault();
//set Rep to show in repView
setShowElectoratesView(false)
//show repView
setShowRepsView(true)
}
const renderElements = () => {
    return electorate?.map( (el, index) => (
        <span  className='list-mp-row' key={index}>
            <label>Electorate:</label> <p>{el.division}</p>
            <label>PostalCode:</label> <p>{el.postcode}</p>
            <button onClick={click}>Select</button>
        </span>
    ))
}
return (
<div className={"contenedor main-form-flex-container buttons-list-container list-container"}>
<button>back</button>
<p>HELOO ELECTS</p>
{renderElements()}
</div>
);
};

export default ElectoratesView;
