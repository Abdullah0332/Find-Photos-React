import React, {Component} from 'react';
import BasicTextFields from './Input'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'

export default class App extends Component{

    state={images:[]}

    onSearch = async term => {
        const response =  await unsplash.get('/search/photos',{
            params:{ query: term},
        })
        
        this.setState({ images : response.data.results})
    }

    render(){
        return  (
            <div>
                <BasicTextFields onSubmit={this.onSearch}/>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}