import { useState } from 'react';

function Sidebar() {
    const [inputFunction, setInputFunction] = useState("");
    const updateFunction = () =>  {
        console.log(inputFunction);
    }

    return (
        <div className="absolute border-2 inset-y-0 p-5">
            <div className="">
                <input className="align-middle border-2 rounded-md mr-2 p-2 text-2xl" type="text" placeholder="Enter function . . . " value={inputFunction} onChange={ e => setInputFunction(e.target.value)}></input>
                <button className="align-middle border-2 rounded-lg p-2 bg-seafoam hover:bg-hover-seafoam md:w-auto" type="submit" onClick={updateFunction}>Graph Function</button>
            </div>
        </div>
    )
}

 export default Sidebar

