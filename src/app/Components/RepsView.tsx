"use client";
import React,{FormEvent, useState} from 'react';
//import {  } from '../lib/interfaces';
import { checkNumber,checkBoth,checkLetter,checkElectorateAmount } from '../lib/helpers';
import { getRepsByCp, getRepsByElectorate, getElectoratesByCp } from '../lib/petitions';
import { CandidatesView } from '../lib/interfaces';
const RepsView : React.FC<CandidatesView> = ({electorates,reps}) => {
    const click= () =>{
        console.log('Click')
    }
    const renderElements = () => {
        return reps?.map( (el, index) => (
            <span  className='list-mp-row' key={index}>
                <label>name:</label> <p>{el.name}</p>
                <label>electorate:</label> <p>{el.electorates}</p>
                <button onClick={click}>Select</button>
            </span>
        ))
    }
return (
<div className={"contenedor main-form-flex-container buttons-list-container list-container"}>
<p>HELOO</p>
<div>
{renderElements()}
</div>
</div>
);
};

export default RepsView;
