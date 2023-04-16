import React from 'react';
import classes from './style_module/MainScreen.module.css';

const UsersList = ({users, setting, currentSortedUsers}) => {

    return ( 
            <ol className={classes.listUsers}>
                {
                    currentSortedUsers ? currentSortedUsers.map(i => 
                        <li className={classes.user} key={i.id}>
                            <div className={classes.id}>{i.id}</div>
                            <div className={classes.name}>{i.name}</div>
                            <div className={classes.surnames}>{i.surnames}</div>
                            <div className={classes.fields}>
                                {
                                    setting.checkedField ? setting.checkedField.length ? setting.checkedField.map((elem, index) => <span key={index}>{i.fields[elem.id - 1]}</span> ) : "No one choosed" : 'No one choosed'
                                }
                            </div>    
                        </li>
                    ) :
                    users.length !== 0 || users ? users.map(i => 
                        <li className={classes.user} key={i.id}>
                            <div className={classes.id}>{i.id}</div>
                            <div className={classes.name}>{i.name}</div>
                            <div className={classes.surnames}>{i.surnames}</div>
                            <div className={classes.fields}>
                                {
                                    setting.checkedField ? setting.checkedField.length ? setting.checkedField.map((elem, index) => <span key={index}>{i.fields[elem.id - 1]}</span> ) : "No one choosed" : 'No one choosed'
                                }
                            </div>    
                        </li>
                    ) : 'error'
                }
            </ol>
     );
}
 
export default UsersList;