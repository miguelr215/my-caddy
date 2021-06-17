import React, { Component } from 'react';
import BaseBtn from './BaseBtn';
import { IoGolf } from 'react-icons/io5';
import ForestHillsMain from '../images/forest-hills-view.jpg';
import MyCaddyContext from '../MyCaddyContext';

export default class MyCourses extends Component {
    static contextType = MyCaddyContext;

    render() {
        const { currentUser } = this.context;
        const courseList = currentUser.myCourses;
        
        return(
            <section className='container section-myCourses'>
                <div className='section__header'>
                  <h3><IoGolf className='section__header__icon'/> My Courses </h3> 
                </div>

                <BaseBtn 
                    btnText={'My Courses Page'}
                    to={'/courses'} 
                />
                <BaseBtn 
                    btnText={'Add New Course'}
                    to={'/add-course'} 
                />
    
                <div className='row'>
                    <div className='coursesBox'> 
                        {courseList !== undefined ? courseList.map(course => (
                            <div className='coursesBox__course'>
                               <h3>{course.courseName}</h3> 
                               <p>{course.courseCity} {course.courseState}</p> 
                               <p>{course.coursePhone}</p>  
                               <p>
                                   <a 
                                    href={course.courseWebsite}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                    >
                                        {course.courseWebsite}
                                    </a>
                                </p>  
                            </div>
                        )) : ''}
                    </div>
                </div>
            </section>
        );
    };
};