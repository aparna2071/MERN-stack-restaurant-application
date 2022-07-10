import React, {Component} from 'react';
let BaseComponent=(ModifiedComponent)=>class extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    incrementCount(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
            
            <ModifiedComponent count={this.state.count}
            increment={()=>this.incrementCount()}/>
            </div>
        )
    }
}
const Button=(props)=>{
    console.log(props)
    return(
        <button onClick={props.increment}>Count:{props.count}</button>
    )
}
let NewButton=BaseComponent(Button);

class AddToCart extends Component{
    render(){
        return(
            <div>
            <NewButton/>
            
            </div>
        )
    }
}
export default AddToCart;