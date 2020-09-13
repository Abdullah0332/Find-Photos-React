import React, { Component } from 'react'

export default class ImageCard extends Component{

    constructor(props){
        super(props)
        this.imagerefs=React.createRef();
        this.state={ span:0 }
    }

    componentDidMount(){
        this.imagerefs.current.addEventListener('load', this.setspan);
    }

    setspan=()=>{

        const height=this.imagerefs.current.clientHeight;
        const span= Math.ceil(height/10);
        this.setState({ span })
    }

    render(){
        const {description,urls}=this.props.image;
        return(
            <div style={{ gridRowEnd : `span ${this.state.span}` }}>
                <img ref={this.imagerefs} alt={description} src={urls.regular}/>
            </div>
        )
    }
}