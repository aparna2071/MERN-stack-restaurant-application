import { Component } from "react";
//import Navigation from "./Navigation";
//import Chefimg from './images/chefs.jpg'
import axios from 'axios';
import Navbar1 from './Navbar1';
//import OrderPizza1 from "./OrderPizza1";



const api=axios.create({
    baseURL:"http://localhost:7000/"
})

class OrderPizza extends Component{
    constructor(){
        super();
    this.state={
        data:[]
        
    }
}


componentDidMount(){
    api.get("/fetchFruits").then((res)=>{
        console.log(res.data)
        this.setState({data:res.data})
        //console.log(this.state.data[0].name)
    }).catch(err=>{
        console.log(err)
    })
}



render(){

var items=this.state.data.map((data,key)=>{
return <div className="col-6" style={{'boxShadow':'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
<div className="p-3 border light">
    <div className="p-3 border light">
<div className="container"> 
<div className="row">
                        <div className="col">
                            <div className='row'>
                                <h3>{data.name}</h3>
                            </div>
                            <div className='row'>
                                <b><div style={data.type==='veg' ? {height:'20px',width:'20px',backgroundColor:'#006400'}:{height:'20px',width:'20px',backgroundColor:'red'}}></div></b>
                            </div>
                            <br/><br/>
                            <div className='row'>
                                <p><b>₹ {data.price}.00</b></p>    
                            </div>
                             <div className="w-100"></div> 
                        </div>


                            <div className="col-6">
                                <div className='row'>
                                    <p>{data.description}</p>
                                </div>
                                <div className='row'>
                                    <p><b>Ingredients:</b> {data.ingredients.join(",")}</p> 
                                </div>
                                <div className='row'>
                                    <p><b>Toppings: </b>{data.topping.join(",")}</p>
                                </div>

                            </div>

                            <div className="col">

                                <div className='row'>
                                    <img src={data.image} style={{height:'100px',width:'120px'}}/>
                                </div>
                                <br/>
                                <div className='row'>
                                    <button className="btn btn-warning">Add to Cart</button>
                                </div>
                            </div>

                            <div className="w-100"></div>
</div>
</div>
</div>
    </div>      
    </div>              
})






return(
    <div>
        
        <div className="container" style={{'padding':'20px'}}>
             <div className="row g-1 " > 
                  
                    {items} 
                
             </div> 
        </div>
    </div>
        
    
        
  
  
  
  
   

        
    
)
}
}

export default OrderPizza;