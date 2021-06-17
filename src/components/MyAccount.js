import React, { Component } from 'react';
import { RiAccountCircleFill } from 'react-icons/ri';

export default class MyAccount extends Component {
    render() {
        return(
            <section className='container section-myTournaments'>
                <div className='section__header'>
                  <h3><RiAccountCircleFill className='section__header__icon'/> My Account </h3> 
                </div>
                <div className='row'>    
                    some more stuff here please
                </div>
            </section>
        );
    };
};