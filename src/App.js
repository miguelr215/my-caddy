import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Hero from './components/Hero.js';
import MyCourses from './components/MyCourses';
import MyTournaments from './components/MyTournaments';
import MyAccount from './components/MyAccount';
import CoursesPage from './components/CoursesPage';
import CoursesHero from './components/CoursesHero';
import AddCourse from './components/AddCourse';
import TournamentsPage from './components/TournamentsPage';
import TournamentsHero from './components/TournamentsHero';
import MyCaddyContext from './MyCaddyContext';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: {},
      // myCourses: [],
      // myScheduledTournaments: [],
      // myPastTournaments: []
    }
  };

  componentDidMount(){
    Promise.all([fetch('./user.json')])
      .then(([userRes]) => {
        if(!userRes.ok){
          return userRes.json().then(e => Promise.reject(e));
        }
        return Promise.all([userRes.json()])
      })
      .then(([user]) => {
        this.setState({currentUser: user});
        // this.setState({myCourses: user.myCourses});
        // this.setState({myScheduledTournaments: user.myScheduledTournaments});
        // this.setState({myPastTournaments: user.myPastTournaments});
        
      })
      .catch(error => {
        console.error(error)
      });
    // fetch('./user.json')
    //   .then(response => response.json())
    //   .then(result => {
    //     const userInfo = result.map(item => {
    //       item.active = !this.state.active;
    //       this.setState({active: !this.state.active});
    //       return item;
    //     })
    //     this.setState({
    //       currentUser: userInfo
    //     });
    //   });
      // .catch(error => {
      //   console.error(error)
      // });
  };


  renderHero(){
    return(
      <div className='heroRow'>
        <Switch>

          <Route
            exact
            path='/'
            component={Hero} 
          />

          <Route 
            path='/courses'
            component={CoursesHero}
          />

          <Route 
            path='/add-course'
            component={CoursesHero}
          />

          <Route 
            path='/tournaments'
            component={TournamentsHero}
          />
        </Switch>
      </div>
    )
  }

  renderNav(){
    return(
      <nav>
        <ul>
          <li>
            <Link
              to='/'>
              Home
            </Link> 
          </li>
          <li>
            <Link
              to='/courses'>
              Courses
            </Link> 
          </li>
          <li>
            <Link
              to='/tournaments'>
              Tournaments
            </Link> 
          </li>
          <li>My Account</li>
        </ul>
      </nav>
    )
  }

  render() {

    const contextValue = {
      currentUser: this.state.currentUser
    }


    return (
      <MyCaddyContext.Provider value={contextValue}>
        <main className='App'>
          {this.renderHero()}

          <Switch>
            <Route
              exact
              path='/'
              render={() => 
                <>
                  <MyCourses />
                  <MyTournaments />
                  <MyAccount />
                </>
              }>
            </Route>

            <Route 
              path='/courses'
              render={() =>
                <>
                  {this.renderNav()}
                  <CoursesPage />
                </>
              }
            />

            <Route 
              path='/add-course'
              render={() =>
                <>
                  {this.renderNav()}
                  <AddCourse />
                </>
              }
            />

            <Route 
              path='/tournaments'
              render={() =>
                <>
                  {this.renderNav()}
                  <TournamentsPage />
                </>
              }
            />

          </Switch>
          

        </main>
      </MyCaddyContext.Provider>
    );
  }
}

