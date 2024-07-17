import { Dispatch, SetStateAction } from 'react';
export interface electorates {
    division: string;
    postalcode : string;
  }
  export interface reps {
    name: string;
    postalcode : string;
    electorate: string;
    email: string;
    state: string;
  }
export interface MainFormProps {

  }
  export interface SBprops {
    hideSB: boolean;
    setHideSuccess: (value: boolean) => void;
  }
  export interface APprops {
    hideAP: boolean;
    setHideSuccess: (value: boolean) => void;
  }
  export interface PDprops {
    hidePD: boolean;
    setHideSuccess: (value: boolean) => void;
  }
  export interface SuccessProps {
    hideSuccess: boolean;
    setHideSuccess: Dispatch<SetStateAction<boolean>>;
  }
  export interface GHLinks {
    AP: string;
    PD: string;
    SB: string;
  }
