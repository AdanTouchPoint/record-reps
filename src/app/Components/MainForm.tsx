"use client";
import React, { KeyboardEvent, FormEvent, useState } from "react";
import { Electorate, MainFormProps, Reps } from "../lib/interfaces";
import {
  checkNumber,
  checkBoth,
  checkLetter,
  checkElectorateAmount,
} from "../lib/helpers";
import {
  getReps,
  getRepsByElectorate,
  getElectoratesByCp,
} from "../lib/petitions";
/*import {
  LaborPartyCandidates,
  LNPCandidates,
  greensPartyCandidate,
  oneNationPartyCandidates,
  KAPPartyCandidates,
  IndependentsCandidates,
  LCQPartyCandidates,
  FFPCandidates,
  DLPCandidates,
  demCandidates,
} from "../lib/orderBD";*/
import ErrorPopUp from "./ErrorPopUp";

const MainForm: React.FC<MainFormProps> = ({
  setShowMainForm,
  setShowElectoratesView,
  setElectorate,
  setReps,
  setShowRepsView,
}) => {
  const [data, setData] = useState({ postcode: "", state: "qlds" });
  const [error, setError] = useState(false);
  const [noDataErr, setNoDataErr] = useState(false);
  /*  function transformData(data, party) {
    let lenghtData = Object.values(data).length;
    let payload = new Array();
    for (let index = 0; index < lenghtData; index++) {
      payload.push({
        party: party,
        name: Object.values(data)[index],
        Electorate: Object.keys(data)[index],
      });
    }
    console.log(payload);
    return payload;
  }
  const go = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const test = transformData(LaborPartyCandidates, "Labor");
  };*/

  const click = async () => {
    const { postcode, state } = data;
    if (postcode === "") return setNoDataErr(true);
    if (checkBoth(postcode) === true) {
      setError(true);
      return;
    }
    if (checkNumber(postcode) === true) {
      const request = await getElectoratesByCp(postcode, state);
      if (request.length === 0) return setNoDataErr(true);
      const payload: Electorate[] = request;
      const getRepsData: [Reps] = await getRepsByElectorate(payload);
      setReps(getRepsData);
      const data = await checkElectorateAmount(
        payload,
        setShowElectoratesView,
        setElectorate,
        setShowMainForm,
        setShowRepsView
      );
      return;
    }
    if (checkLetter(postcode) === true) {
      const getRepsData: Reps[] = await getReps(postcode.toUpperCase());
      if (getRepsData.length === 0) return setNoDataErr(true);
      setShowMainForm(false);
      setReps(getRepsData);
      setShowRepsView(true);
      return;
    }
  };
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    return setData({ ...data, postcode: (e.target as HTMLInputElement).value });
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      click();
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    click();
  };
  const closeError = () => {
    setError(false);
    setNoDataErr(false);
  };
  return (
    <>
      {error && (
        <ErrorPopUp
          message={
            "Please enter a postalcode or electorate, but not both at same time."
          }
          onClose={closeError}
        />
      )}
      {noDataErr && (
        <ErrorPopUp
          message={
            "No Candidates or electorates found, please enter a correct postalcode or electorate."
          }
          onClose={closeError}
        />
      )}
      <div className={"contenedor container-content  "}>
        <div className={"form-container container "}>
          <h1 className="main-texts-color main-text-title">Vote for life!</h1>
          <p className="main-texts-color main-text-instruction">
            Learn your candidates stance on life in the upcoming QLD election by
            entering your postcode or electorate below.
          </p>
          <form onSubmit={handleSubmit} id="form" className="search-form">
            <input
              className="u-full-width input-color main-form-inputs main-search-input"
              type="text"
              name="name"
              placeholder="e.g. 2000 or Ben Brown"
              required
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
            />
            <button
              className={
                " capitalize-style find-btn-main-form main-search-button"
              }
              onClick={click}
              id="button"
              type="button"
            >
              Search!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainForm;
