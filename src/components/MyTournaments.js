import React, { Component } from 'react';
import BaseBtn from './BaseBtn';
import { GiPodiumWinner } from 'react-icons/gi';
import MyCaddyContext from '../MyCaddyContext';

export default class MyTournaments extends Component {
    static contextType = MyCaddyContext;

    render() {
        const { currentUser } = this.context;
        const myScheduledTournaments = currentUser.myScheduledTournaments;
        const myPastTournaments = currentUser.myPastTournaments;

        return(
            <section className='container section-myTournaments'>
                <div className='section__header'>
                  <h3><GiPodiumWinner className='section__header__icon'/> My Tournaments </h3> 
                </div>

                <BaseBtn 
                    btnText={'Tournaments Page'} 
                    to={'/tournaments'} 
                />
                <BaseBtn 
                    btnText={'Find New Tournament'}
                    to={'/new-tournament'} 
                />

                <div className='row'>    
                    <div className='tournamentBox'>
                        <div className='tournamentBox__activeBox'>
                            {myScheduledTournaments !== undefined ? myScheduledTournaments.map(tournament => (
                                <div className='tournamentBox__activeBox__tournament'>
                                    <div className='tournamentBox__activeBox__tournamentTag'>REGISTERED</div>
                                    <div className='tournamentBox__activeBox__tournamentDetail'>
                                        <h3> 
                                            {tournament.tournamentType} &#x00040; {tournament.courseName}
                                        </h3>
                                        <p>Date:  {tournament.date}</p> 
                                        <p>Tee Time:  {tournament.time}</p>
                                        <p>Prizes</p>
                                        <p>1st:  ${tournament.prizes.first}</p>
                                        <p>2nd:  ${tournament.prizes.second}</p>
                                        <p>3rd:  ${tournament.prizes.third}</p>
                                    </div>
                                </div>
                            )) : ''}                 
                        </div>
                        <div className='tournamentBox__pastBox'>
                            {myPastTournaments !== undefined ? myPastTournaments.map(tournament => (
                                <div className='tournamentBox__pastBox__tournament'>
                                    <div className='tournamentBox__pastBox__tournamentTag'>PAST</div>
                                    <div className='tournamentBox__pastBox__tournamentDetail'>
                                        <h3> 
                                            {tournament.tournamentType} &#x00040; {tournament.courseName}
                                        </h3>
                                        <p>Date:  {tournament.date}</p> 
                                        <p>Tee Time:  {tournament.time}</p>
                                        <p>Score:  {tournament.score}</p>
                                        <p>Finish:  {tournament.finish}</p>
                                    </div>
                                </div>
                            )) : ''} 
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};