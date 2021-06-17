import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BaseBtn extends Component {
    render() {
       return(
            <Link 
                to={this.props.to}
                className='baseBtn'
            >
                {this.props.btnText}
            </Link>
        ); 
    };  
};