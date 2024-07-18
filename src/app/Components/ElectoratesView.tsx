"use client";
import React,{FormEvent, useState} from 'react';
import { Electorate, ElectsView } from '../lib/interfaces';
import { checkNumber,checkBoth,checkLetter,checkElectorateAmount } from '../lib/helpers';
import { getRepsByCp, getRepsByElectorate, getElectoratesByCp } from '../lib/petitions';
const ElectoratesView : React.FC<ElectsView> = ({electorate }) => {
console.log(typeof(electorate))
const renderElements = () => {
    return electorate?.map( (el, index) => (
        <span key={index}>
            <label>Electorate:</label> <p>{el.division}</p>
            <label>PostalCode:</label> <p>{el.postcode}</p>
        </span>
    ))
}
return (
<div>
<p>HELOO ELECTS</p>
{renderElements()}
</div>
);
};

export default ElectoratesView;
