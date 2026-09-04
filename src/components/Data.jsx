import React,{useState} from 'react';
export default function Data() {
    const [pname, setPname] = useState('Ajay');
    return (
        <div>
            <h2>Data Component</h2>
            <input type="text" value={pname} onChange={(e) => setPname(e.target.value)} />
            <p>Name: {pname}</p>
        </div>
    );
}