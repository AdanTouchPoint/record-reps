"use client";
import React,{FormEvent, useState} from 'react';
import { CandidatesView } from '../lib/interfaces';
const RepsView : React.FC<CandidatesView> = ({electorate,reps,setShowRepsView,setShowElectoratesView,setShowMainForm}) => {
    const click= () =>{
        console.log('Click')
    }
    const back= ( e: FormEvent<HTMLInputElement>)=> {
        e.preventDefault();
        if(electorate?.length === 0 ) {
            setShowRepsView(false)
            setShowMainForm(true)
            return
        }
        setShowRepsView(false)
        setShowElectoratesView(true)
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
<button onClick={back}>back</button>
<p>HELOO</p>
<div>
{renderElements()}
</div>
</div>
);
};

export default RepsView;
