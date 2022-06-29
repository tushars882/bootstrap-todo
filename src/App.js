import React, { Component } from 'react'
import './App.css'
import './index.css'
export default class App extends Component {
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h2 className='text-center text-white shadow-lg p-3'>Today's plan</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" placeholder='Add Your Plan' className='form-control' />
              </div>
              <div className="col-2">
                <button className='btn btn-warning px-3 fw-bold'>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

