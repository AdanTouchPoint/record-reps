"use client";
import React,{FormEvent, useState} from 'react';
import { MainFormProps } from '../lib/interfaces';
import { checkNumber,checkBoth,checkLetter } from '../lib/helpers';
import { getRepsByCp, getRepsByElectorate, getElectoratesByCp } from '../lib/petitions';
const MainForm: React.FC<MainFormProps> = () => {
const [data,setData] = useState({ postcode:'' , state: 'qlds' })
  const click = async () => {
    const {postcode,state}= data
  
    if(checkBoth(postcode)=== true) {
      return console.log('Introduce a correct postalcode or electorate')
    }
    if(checkNumber(postcode) === true ) {
      const request = await getElectoratesByCp(postcode, state)
      return console.log('is postalCode',request)
    }
    if(checkLetter(postcode)=== true ) {
       return console.log('is Electorate')
    }
    }
    const handleOnChange = (e: FormEvent<HTMLInputElement>)  => {
       return setData ({...data, postcode: (e.target as HTMLInputElement).value}) 
    }
return (
<div className="min-h-screen bg-gray-100 p-0 sm:p-12">
  <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <h1 className="text-2xl font-bold mb-8">Form With Floating Labels</h1>
    <form id="form" >
      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="name"
          placeholder=" "
          required
          onChange={handleOnChange}
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
        <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <button
      onClick={click}
        id="button"
        type="button"
        className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
      >
        Toggle Error
      </button>
    </form>
  </div>
</div>
	);
};

export default MainForm;
