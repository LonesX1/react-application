import React from 'react';
import classes from './style_module/MainScreen.module.css';
import UsersList from './UsersList';

const MainScreen = ({users, setting, currentSortedUsers}) => {

    return ( 
        <div className={classes.main}>
            <div className={classes.header}>
                <span>Id</span>
                <span>Name</span>
                <span>Surname</span>
                <span>Fields</span>
            </div>
            <UsersList currentSortedUsers={currentSortedUsers} users={users} setting={setting}></UsersList>
        </div>
     );
}
 
export default MainScreen;