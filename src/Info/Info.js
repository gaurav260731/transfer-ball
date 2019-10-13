import React from 'react';
import './Info.css';

class bubble extends React.Component {
    constructor() {
        super();
        this.state = {
                name:'',
            
        }
    }

    handleClick(event) {
        this.setState({
            name:event.target.innerText,
        })
    }

    render() {
        const {name, data} = this.state;
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>{this.state.name}</button>
                {
                    name &&
                    <p>This is {this.state.name}</p>
                }
            </React.Fragment>
        )
    }
    
}

export default bubble;