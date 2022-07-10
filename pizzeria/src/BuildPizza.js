import React, { useState, useEffect } from 'react'
import { Table, Form , Button} from "react-bootstrap"
import axios from "axios"
//import {ingredients} from '../Sample json/ingredients.js'
function BuildPizza() {
    const [ingredients, setIng] = useState([])
    const [check, setCheck] =useState(new Map())
    const [cost, setCost] = useState(0);
    useEffect(() => {
        axios.get("http://localhost:7000/fetchEmployee")
            .then(res => {
                console.log(res.data)
                setIng(res.data)
            })
    }, [])

    const handleCheck = (event, price ) =>{
        const item = event.target.name;
        const isChecked = event.target.checked;
        
        setCheck(prev=>prev.set(item, isChecked))
        if(isChecked){
            setCost(cost+price)
        }else{
            setCost(cost-price)
        }
    }

    return (
        <div className="build-inner">
            <h5 style={{textAlign:"center"}}>Pizzeria Lets you build your own pizza. Customise your pizza by choosing ingredients from list below.</h5>
            <hr/>
            <table class="table table-striped">

                {/* <thead> */}
                    {/* <tr>
                        <th>IMAGE</th>
                        <th>DESCRIPTION</th>
                        <th>ADD TOPPING</th>
                    </tr> */}
                {/* </thead> */}
                <tbody>
                    {ingredients && ingredients.map(data => {
                        return (
                            <tr>
                                <td>
                                    <img src={data.image} alt="ingredient" width='100' height="100" />
                                </td>
                                <td>
                                    <span style={{ fontWeight: 700}}>{data.tname}</span> {"   "}
                                    <span style={{ fontWeight: 700}}> ₹{data.price}.00</span>
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        name={data.id}
                                        style={{color:"#999900"}}
                                        label="Add" 
                                        onChange={(event)=>handleCheck(event, data.price)}
                                        checked={check.get(data.id)}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <h2 style={{color:"blue"}}><b>Total cost:</b> <b>{cost}</b></h2>
                <p align="center">
                <Button  size="lg" variant="dark" style={{color:"yellow"}}>Build Ur pizza</Button>
                </p>
            </div>
        </div>
    )
}

export default BuildPizza;