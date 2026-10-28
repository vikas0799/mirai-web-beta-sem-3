import react from 'react';
import C from './C';


function B({name,age}){
    console.log(name)
    return (
        <div>
            B components
            <C name={name} age={age}/>
        </div>
    )
}

export default B;