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
        showElectoratesView={showElectoratesView}
        setShowElectoratesView={setShowElectoratesView}
        electorate={electorate}
        setElectorate={setElectorate} 
        reps={reps}
        setReps={setReps}
      />
      }
      {
        showElectoratesView && 
        <ElectoratesView 
          electorate={electorate} 
          setShowRepsView={setShowRepsView} 
          setShowElectoratesView={setShowElectoratesView}
      />
      }

      {
        showRepsView && 
        <RepsView
        reps={reps}
        
        />
      }
      
    </main>
  );
}
export default Home