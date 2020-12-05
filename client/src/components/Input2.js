import React, { useState,Component } from "react";

class Input2 extends Component {


   state = {
         options:[]
   }


   addOption(){
    this.setState({options:[...this.state.options,"" ]}
      )
   }

   handleChange(e,index){
      this.state.options[index] = e.target.value

      //set changed state...
      this.setState({options:this.state.options})
   }

    handleRemove(index){
      this.state.options.splice(index,1)

      console.log(this.state.options,'$$$$')

      //update state

      this.setState({options:this.state.options})
    }

   handleSubmit(e){
    console.log(this.state,"ew")
   }

render() { 
     return (

        <div className="input">
         <label> Title </label>

         {
          this.state.options.map((option,index) => {
            return(
               <div key ={index}>
                   <input onChange={(e)=>this.handleChange(e,index)} value={option} />
                   <button onClick={()=>this.handleRemove(index)}>  </button>
               </div>
            )
          })
         }
         <hr />

         <button onClick={(e)=>this.addOption(e)}> Add Option </button>

         <hr />
         
         <button onClick={(e)=>this.handleSubmit()}> Submit </button>

        </div>

     	);
   }
 }

export default Input2;