"use client";
import React,{FormEvent, useState} from 'react';
import { CandidatesView } from '../lib/interfaces';
const RepsView : React.FC<CandidatesView> = ({electorate,reps,setShowRepsView,setShowElectoratesView,setShowMainForm, postcode}) => {
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
    console.log(reps)
    const renderElements = () => {
        return reps?.map( (el, index) => (
            <span  className='list-mp-row' key={index}>
                <label>name:</label> <p>{el.name}</p>
                <label>electorate:</label> <p>{el.electorates}</p>
                <button onClick={click}>Select</button>
            </span>
        ))
    }
    const renderFilterElements = (postcode: string) => {
        console.log(postcode)
        const data = reps?.filter(item => item.electorates === postcode)
        return data?.map( (el, index) => (
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
{ electorate?.length > 0 ? renderFilterElements(postcode) : renderElements()}
</div>
</div>
);
};

export default RepsView;
