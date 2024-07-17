import { Urls } from './urls'
async function getElectoratesByCp (postcode: string, state: string)  {
    //llama al endpoint de electgorates by cp
 const request = await fetch(`${Urls.electoratesByCp}?state=${state}&postcode=${postcode}`)
    return request
}

function getRepsByElectorate (division: string, state: string) {
        //llama al endpoint de reps by electorate
}
function getRepsByCp (postcode: string, state: string) {
    //llama al endpoint de reps by cp
}
export { getElectoratesByCp, getRepsByElectorate, getRepsByCp }