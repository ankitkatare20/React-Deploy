import React, { Component } from 'react';


class UserList extends Component {
    state = { 
        users: [
            {id: 1001, userName: "Ankit katare", isOnline: true, imgPath: "https://img1.pnghut.com/7/9/8/Y38a7cY0Df/online-advertising-facial-hair-head-audio-smile.jpg", unreadMessage: 8},
            {id: 1002, userName: "Sagar katare", isOnline: false, imgPath: "https://img1.pnghut.com/7/9/8/Y38a7cY0Df/online-advertising-facial-hair-head-audio-smile.jpg", unreadMessage: 0},
            {id: 1003, userName: "Sushant Kulkarni", isOnline: true, imgPath: "https://img1.pnghut.com/7/9/8/Y38a7cY0Df/online-advertising-facial-hair-head-audio-smile.jpg", unreadMessage: 2},
            {id: 1003, userName: "Nikhil Kulkarni", isOnline: false, imgPath: "https://img1.pnghut.com/7/9/8/Y38a7cY0Df/online-advertising-facial-hair-head-audio-smile.jpg", unreadMessage: 2},
            {id: 1004, userName: "Cody Stevens", isOnline: false, imgPath: "https://img1.pnghut.com/7/9/8/Y38a7cY0Df/online-advertising-facial-hair-head-audio-smile.jpg", unreadMessage: 0}

        ]
       }
    render() { 
    
        return ( 
            <div>
                 {this.state.users.map((data, i) => {
                            return (
                    <div className="row" key={i} style={{ height: 45}}>     
                    <img src={data.imgPath} style={{height: 30, marginTop: 5, marginLeft: 50}} /> 
                    <span style={{marginTop: 10, marginLeft: 30}}> {data.userName}</span> 
                    <span style={{fontSize: 8,marginTop: 18,marginLeft: 10}} className={(data.isOnline == true) ? "userActive" : "userInactive"}> <span className="fa fa-circle"></span></span>
                     <span className={(data.unreadMessage !== 0) ? "userUnreadMessage" : "userReadMessage"}> 
                     <span style={{marginLeft: 6}}>{data.unreadMessage}</span> </span>
                     </div>
                            )
                        })}

            </div>
         );
    }

   
}
 
export default UserList;