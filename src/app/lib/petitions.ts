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
async function getRepsByElectorate (electorates: Electorate[]) {
        //llama al endpoint de reps by electorate
       
            const data = electorates.map( el => {
               return el.division
            })
        const payload = await fetch(`${Urls.repsByElectorate}?electorate=${[data]}`)
        const repsData = await payload.json()
        return repsData.data
        
        

}
async function getReps(electorate: string) {
    //llama al endpoint de reps by cp
    const payload = await fetch(`${Urls.repsByElectorate}?electorate=${electorate}`)
    const repsData = await payload.json()
    return repsData.data
}
export { getElectoratesByCp, getRepsByElectorate, getReps }