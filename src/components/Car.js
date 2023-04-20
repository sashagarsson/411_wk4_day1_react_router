import React from 'react'
import cars from '../cars.json'
import { useParams } from 'react-router-dom'
// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const params = useParams();
    console.log(params.id)

    const car = cars.find((car) => car.id === Number(params.id))
    console.log("Found car", car);

    return (
        <div>
        <h1>A specific car with an id of {car.id}</h1>
        <h2>{car.Name}</h2>
        <h3>{car.Miles_per_Gallon}</h3>
        </div>
    )
}

export default Car