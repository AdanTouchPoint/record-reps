import { Dispatch, SetStateAction } from 'react';
export interface Electorate {
    division: string;
    postcode : string;
  }
  export interface Reps {
    name: string;
    postalcode : string;
    electorates: string;
    email: string;
    state: string;
  }
export interface MainFormProps {
  setShowElectoratesView: (value: boolean) => void;
  electorate: Electorate [] | undefined;
  setElectorate: Dispatch<SetStateAction<Electorate[]>>;
  reps: Reps[] | undefined;
  setReps:  Dispatch<SetStateAction<Reps[]>>;
  }
  export interface ElectsView {
    electorate: Electorate[] | undefined;

    }
    export interface CandidatesView {
      electorate: Electorate[] | undefined;
      reps: Reps[] | undefined
  
      }
  export interface SBprops {
    hideSB: boolean;
    setHideSuccess: (value: boolean) => void;
  }

