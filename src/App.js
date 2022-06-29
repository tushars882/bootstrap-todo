import React, { Component } from 'react'
import './App.css'
import './index.css'

import { Plan } from './Plan'
export default class App extends Component {
  state={
    items:[],
    text:""
  }
  handleChange=(e)=>{
    this.setState({text: e.target.value})
  }
  handleAdd=(e)=>{
    if(this.state.text!==""){
      const items=[...this.state.items,this.state.text];
      this.setState({items: items, text:""});
    }
    else{
    
    }
  }

  handleDelete=(id)=>{
      console.log("deleted",id);
      const oldItems=[...this.state.items]
      console.log("oldItems", oldItems);
      const items=oldItems.filter((elements,index)=>{
        return index !== id
      })
      this.setState({items:items});
  }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h2 className='text-center text-white shadow-lg p-3'>Today's plan</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" placeholder='Add Your Plan' value={this.state.text} onChange={this.handleChange} className='form-control' />
              </div>
              <div className="col-2">
                <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}>
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className='list-unstyled row m-5 p-6 '>
                  
                {
                  this.state.items.map((value,i)=>{
                    return <Plan key={i} id={i}value={value} sendData={this.handleDelete}/>
                  })
                }
                </ul>
                {/* <ul className='list-unstyled row m-5 p-6'>
                  <Plan p={this.state.items} sendDelete={this.handleDelete}/>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

