import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyCaddyContext from '../MyCaddyContext';

export default class Hero extends Component {
    static contextType = MyCaddyContext;

    render() {
        const { currentUser } = this.context;
        
        return (
            <section className='container section-hero--main'>
                <div className='section-hero--main__greetingBox u-center-text'>
                    <h2>Welcome Back {currentUser ? `${currentUser.firstName}` : ''}</h2>
                    <div className='section-hero--main__greetingBox__navBox'>
                        <ul className='u-flex-center'>
                            <li>
                                <Link
                                    to='/'
                                    className='section-hero--main__greetingBox__navLink'
                                >
                                    My Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/'
                                    className='section-hero--main__greetingBox__navLink'
                                >
                                    Tournaments
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/'
                                    className='section-hero--main__greetingBox__navLink'
                                >
                                    Credits
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        
        );
    };
};