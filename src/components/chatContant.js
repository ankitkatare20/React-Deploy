import React from 'react';
import G1 from './images/group_pic-2.png';
import Add from './images/add.png';
import Call from './images/call.png';
import Info from './images/info.png';
import ChatData from './chatdata';

const ChatContent = () => {
    return ( 
        <div>
        <div className="row" style={{borderBottom: '1px solid #ddd', marginLeft: -30}}>
            <div className="col-md-3">
            <div className="row"  style={{ height: 45, float: 'left'}}>
            <img src={G1} style={{height: 30, marginTop: 10, marginLeft: 20}} /> 
            <span style={{marginTop: 10, marginLeft: 15, fontSize: 14, fontWeight: 600}}> # Development Group</span>
            <span style={{ fontSize: 13, marginLeft: 75, marginTop: -10, color: '#939090'}}>32 Members</span>
            </div> 
            </div>
            <div className="col-md-7">
             <div className="main" >   
            <div className="form-group has-search" style={{marginBottom: 2}}>
             <span className="fa fa-search form-control-feedback"></span>
             <input type="text" className="form-control" placeholder="Search" />
            </div>
            </div>
               
            </div>
            <div className="col-md-2" style={{marginTop: 18}}>
            <img src={Call} style={{height: 30, marginRight: 10}} />
            <img src={Add} style={{height: 30, marginRight: 10}} />
            <img src={Info} style={{height: 30}} />
                </div>
        </div>
        <ChatData />
        </div>
     );
}
 
export default ChatContent;