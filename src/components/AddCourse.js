import React, { Component } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

export default class AddCourse extends Component {

    constructor(){
        super();
        this.state = {
            courseList: [],
            lastIndex: 0,
            confirmation: false,
            courseName: "",
            courseID: "",
            courseImg: "",
            courseImgName: "",
            coursePhone: "",
            courseWebsite: "",
            courseAddress: "",
            courseCity: "",
            courseState: "",
            courseZip: ""
        }
    }

    // function for confirmation


    // function to create selected golf course object and call function to add to users mycourses list
    handleAdd = (e, course) => {
        e.preventDefault();

        this.setState({
            courseName: course.courseName,
            courseID: course.courseID,
            courseImg: course.courseImg,
            courseImgName: course.courseImgName,
            coursePhone: course.coursePhone,
            courseWebsite: course.courseWebsite,
            courseAddress: course.courseAddress,
            courseCity: course.courseCity,
            courseState: course.courseState,
            courseZip: course.courseZip,
            confirmation: true
        })
    }

    // on component did mount, make api call for full list of available courses
    componentDidMount(){
        fetch('./courseList.json')
            .then(response => response.json())
            .then(result => {
                const courses = result.map(item => {
                    item.courseListID = this.state.lastIndex;
                    this.setState({ lastIndex: this.state.lastIndex + 1 });
                    return item;
                })
                this.setState({
                    courseList: courses
                })
            });
    }

    render(){
        let filteredCourses = this.state.courseList;
        let confirmation = this.state.confirmation;

        return(
            <section>
                <div className='section__header'>
                  <h3><BsPlusCircleFill className='section__header__icon'/> Add Course</h3> 
                </div>

                {/** create confirmation box once course is selected **/}
                <div className='confirmationBox'>
                    {confirmation === true ? (
                        'Are you sure you want to add this course to your list?'
                    ) : ''}
                </div>


                {/* create component for search filter box */}


                {/* create component for listing available or filtered courses */}
                <div className='coursesBox'>
                    {confirmation === false ? filteredCourses.map(course => (
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
                            <div
                                className='addNewCourseBtn'
                                onClick={e => this.handleAdd(e, course)}
                            >
                                <BsPlusCircleFill /> 
                                <span className='addNewCourseBtn__label'>
                                    Add Course
                                </span>
                            </div>
                        </div>
                    )) : ''}
                </div>

            </section>
        )
    }
}