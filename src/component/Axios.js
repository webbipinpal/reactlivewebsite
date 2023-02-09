import React, { useEffect, useState } from "react";
import axios from 'axios';

const AxiosAPI = () => {
    const [num, setNum] = useState(1);
    const [name, setName] = useState();
    const [move, setMove] = useState();
    const changeHand = (e) => {
        const numData = e.target.value;
        setNum(numData)
    }
    useEffect(() => {
         async function getData(){
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
            setName(response.data.name)
            setMove(response.data.moves.length)
         }
         getData()

    }, [num])

    return(
        <div className="container">
            <h1>Axios API {num}</h1>
            <h2>{name}</h2>
            <h3>{move}</h3>
            <select style={{width:'100px', marginTop:'50px'}} onChange={changeHand}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
        </div>
    )
}

export default AxiosAPI;