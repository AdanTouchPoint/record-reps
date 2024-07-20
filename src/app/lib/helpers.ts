import { Electorate } from "./interfaces";

function checkLetter(string: string): boolean {
    return /[a-zA-Z]/.test(string);
}
function checkNumber(string: string): boolean {
    return /\d/.test(string);
}
function checkBoth(string: string): boolean {
    const checkLetter = /[a-zA-Z]/.test(string);
    const checkNumber = /\d/.test(string);
    return checkLetter && checkNumber;
}
async function checkElectorateAmount(data: Electorate[], setShowElectoratesView, setElectorate, setShowMainForm,setReps,respData) {
    console.log(data)
    if(data.length > 1) {
      //mostrar vista de electorados
      setShowMainForm(false)
      setElectorate(data)
      setShowElectoratesView(true)
      
    }
    if(data.length === 1) {
        setReps(respData)
        setShowMainForm(false)
        //getrepsby elect
        //mostrar vista de reps
        setShowElectoratesView(true)
    }
}

export{checkBoth,checkLetter,checkNumber,checkElectorateAmount}