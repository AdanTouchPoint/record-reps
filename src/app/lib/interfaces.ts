import { Dispatch, SetStateAction } from "react";
export interface Electorate {
  division: string;
  postcode: string;
}
export interface Reps {
  name: string;
  labelpostcode: string;
  electorates: string;
  email: string;
  state: string;
  party: string;
}

export interface MainFormProps {
  setShowMainForm: (value: boolean) => void;
  setShowElectoratesView: (value: boolean) => void;
  setElectorate: Dispatch<SetStateAction<Electorate[]>>;
  setReps: Dispatch<SetStateAction<Reps[]>>;
  setShowRepsView: (value: boolean) => void;
}
export interface ElectsView {
  electorate: Electorate[] | undefined;
  setShowRepsView: (value: boolean) => void;
  setShowElectoratesView: (value: boolean) => void;
  setShowMainForm: (value: boolean) => void;
  setElectorate: Dispatch<SetStateAction<Electorate[]>>;
  setPostcode: Dispatch<SetStateAction<String>>;
}
export interface CandidatesView {
  electorate: Electorate[] | undefined;
  reps: Reps[] | undefined;
  setShowRepsView: (value: boolean) => void;
  setShowElectoratesView: (value: boolean) => void;
  setShowMainForm: (value: boolean) => void;
  postcode: string;
}
export interface SBprops {
  hideSB: boolean;
  setHideSuccess: (value: boolean) => void;
}
