"use client";
import React,{useState} from 'react';
import MainForm  from "./Components/MainForm";
import ElectoratesView from "./Components/ElectoratesView";
import RepsView from './Components/RepsView';
import { Electorate, Reps } from './lib/interfaces';

const Home: React.FC = () => {
  const [electorate,setElectorate]= useState<Electorate[]>([]);
  const [reps, setReps] = useState<Reps[]>([]);
  const [showElectoratesView,setShowElectoratesView] = useState(false)
  const [showRepsView,setShowRepsView] = useState(false)
  const [showMainForm,setShowMainForm] = useState(true)


  return (
    <main >
      {
      showMainForm && 
      <MainForm
        setShowMainForm={setShowMainForm}
        setShowElectoratesView={setShowElectoratesView}
        setElectorate={setElectorate} 
        setReps={setReps}
        setShowRepsView={setShowRepsView}
      />
      }
      {
        showElectoratesView && 
        <ElectoratesView
          electorate={electorate} 
          setShowRepsView={setShowRepsView} 
          setShowElectoratesView={setShowElectoratesView}
          setShowMainForm={setShowMainForm}
      />
      }
      {
        showRepsView && 
        <RepsView
        electorate={electorate}
        reps={reps}
        setShowRepsView={setShowRepsView}
        setShowElectoratesView={setShowElectoratesView}
        setShowMainForm={setShowMainForm}
        />
      }
      
    </main>
  );
}
export default Home