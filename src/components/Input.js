import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './ImageList.css'

export default class BasicTextFields extends Component{

    state={value:''}

    submithandle=(e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.value)
    }

    render(){
        return (
            <form className="form" onSubmit={this.submithandle}>
              <TextField 
              id="outlined-basic" 
              variant="outlined"
              label="Search Photos" 
              value={this.state.value}
              onChange={e=>this.setState({
                  value:e.target.value 
              })} />
            </form>
          );
    }
}
