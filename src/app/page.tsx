"use client";
import React,{useState} from 'react';
import MainForm  from "./Components/MainForm";
//import ElectoratesView from "./Components/ElectoratesView";
//import RepsView from './Components/RepsView';
import { electorates, reps } from './lib/interfaces';

export default function Home() {

  const [electorates,setElectorates]= useState<electorates>();
  const [reps, setReps] = useState<reps>();
  return (
    <main>
      <MainForm/>

    </main>
  );
}
