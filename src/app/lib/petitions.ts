import { Urls } from './urls'
import { Electorate } from './interfaces';
async function getElectoratesByCp (postcode: string, state: string)  {
    //llama al endpoint de electgorates by cp
    const requestOptions : RequestInit = {
        method: "GET"
      };
    const response = await fetch(`${Urls.electoratesByCp}?state=${state}&postcode=${postcode}`,requestOptions)
    const data = await response.json();
    return data.data
}
function getRepsByElectorate (division: string, state: string) {
        //llama al endpoint de reps by electorate
}
function getRepsByCp (postcode: string, state: string) {
    //llama al endpoint de reps by cp
}
export { getElectoratesByCp, getRepsByElectorate, getRepsByCp }