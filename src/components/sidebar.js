import React, {components} from 'react';
import Profile from './images/profile_pic.png';
import SearchIcon from './images/Icon-search.png';
import AllUsers from './images/icon_account.png';
import AllChannel from './images/icon-channel.png';
import Noti from './images/icon_notifi.png';
import Sett from './images/icon_setting.png';     
import UserList from './usersList';
import ChannelRoom from './channelRoom';

const SideBar = () => {
    return ( 
        <div style={{borderRight: '1px solid #ddd'}}>
           <div className="row" >
            <div className="col-md-3">
                <img src={Profile} style={{width: 40, margin: 15, marginLeft: 25}} />
            </div>
            <div className="col-md-4" style={{textAlign: 'left', marginTop: 15, marginLeft: -20}}>
                <span>Appristine</span> <span className="fa fa-caret-down"></span>
                <span style={{fontSize: 12, color: '#aca7a7'}}>Online</span>
            </div>
            <div className="col-md-5">
                <span style={{fontSize: 22, marginTop: 28, color: '#38ed4f', float: 'right'}} className="fa fa-toggle-on"></span>
            </div>
            <br/><br/>  
           </div>
           <div className="row" style={{background: '#f3f2f2', height: 35, borderTop: ' 1px solid #ddd', marginRight: 0}}>
                <img src={SearchIcon} style={{height: 20, marginTop: 5, marginLeft: 50}} /> 
                <span style={{marginTop: 1, marginLeft: 50}}> Search</span>
           </div>
           <div className="row" style={{ height: 40, marginTop: 5}}>
                <img src={AllUsers} style={{height: 20, marginTop: 5, marginLeft: 50}} /> 
                <span style={{marginTop: 1, marginLeft: 50}}> All Users</span>
           </div>
           <div className="row" style={{ height: 40}}>
                <img src={AllChannel} style={{height: 20, marginTop: 5, marginLeft: 50}} /> 
                <span style={{marginTop: 1, marginLeft: 50}}> All Channels</span>
           </div>
           <div className="row" style={{ height: 40}}>
                <img src={Noti} style={{height: 20, marginTop: 5, marginLeft: 50}} /> 
                <span style={{marginTop: 1, marginLeft: 50}}> Notifications</span>
           </div>
           <div className="row" style={{ height: 40}}>
                <img src={Sett} style={{height: 20, marginTop: 5, marginLeft: 50}} /> 
                <span style={{marginTop: 1, marginLeft: 50}}> Settings</span>
           </div>

           <div className="row" style={{ height: 40}}>
                
                <span style={{marginLeft: 40}}>+</span>  <span style={{marginLeft: 5}}> Create Channel </span>
                <span style={{marginTop: 5, marginLeft: 5}} className="fa fa-caret-down"></span>
           </div>

          
          <ChannelRoom />

           <div className="row" style={{ height: 40}}>
                
                 <span style={{marginLeft: 50}}> Users </span>
                <span style={{marginTop: 5, marginLeft: 5}} className="fa fa-caret-down"></span>
           </div>

           <UserList />

        </div>

        
     );
}
 
export default SideBar;