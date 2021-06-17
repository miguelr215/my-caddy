import React, { Component } from 'react';
import { IoGolf } from 'react-icons/io5';
import { BsTrash } from 'react-icons/bs';
import { BsPlusCircleFill } from 'react-icons/bs';
import BaseBtn from '../components/BaseBtn';
import MyCaddyContext from '../MyCaddyContext';


export default class CoursesPage extends Component {
    static contextType = MyCaddyContext;

    render(){
        const { currentUser } = this.context;
        const courseList = currentUser.myCourses;

        return(
            <section>
                <div className='section__header'>
                  <h3><IoGolf className='section__header__icon'/> My Courses </h3> 
                </div>

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
                                <div className='coursesBox__courseBtnsBox'>
                                    <div
                                        className='moreBtn'>
                                        <BsPlusCircleFill /> <span className='moreBtn__label'>Details</span>
                                    </div>
                                    <div
                                        className='deleteBtn'>
                                        <BsTrash /> <span className='deleteBtn__label'>Delete</span>
                                    </div>
                                </div>
                            </div>
                        )) : ''}
                    </div>
                </div>

            </section>
        )
    }
}