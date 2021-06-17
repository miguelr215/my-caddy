import React from 'react';

const MyCaddyContext = React.createContext({
    currentUser: {},
    myCourses: [],
    myScheduledTournaments: [],
    myPastTournaments: []
});

export default MyCaddyContext;