import React, { Component } from 'react';

class ChatData extends Component {
    state = { 
        chat : [
            {userName: "Ankit Katare", chatText: "Hello how are you!", time: "4:00 PM", imgPath: "https://cdn.icon-icons.com/icons2/2110/PNG/512/development_icon_131032.png"},
            {userName: "Ankit Katare", chatText: "Hello how are you!", time: "4:00 PM", imgPath: "https://cdn.icon-icons.com/icons2/2110/PNG/512/development_icon_131032.png"},
            {userName: "Ankit Katare", chatText: "Hello how are you!", time: "4:00 PM", imgPath: "https://cdn.icon-icons.com/icons2/2110/PNG/512/development_icon_131032.png"},
            {userName: "Ankit Katare", chatText: "Hello how are you!", time: "4:00 PM", imgPath: "https://cdn.icon-icons.com/icons2/2110/PNG/512/development_icon_131032.png"},
        ]
     }
    render() { 
        return ( 
            <div>
                {this.state.chat.map((data, i) => {
                            return (
                                <div style={{marginTop: 15}}>
                                <div style={{marginBottom: -10}}>
                                <img src={data.imgPath} style={{height: 35}} />
                                <span style={{marginLeft: 5, marginTop: 5, fontWeight: 600}}> {data.userName}</span> 
                                <span style={{marginLeft: 5, marginTop: 10, fontSize: 11, color: '#8f8a8a'}}>|</span> 
                                 <span style={{marginLeft: 5, marginTop: 10, fontSize: 11, color: '#8f8a8a'}} >{data.time}</span>
                                 <br />
                                 </div>
                                <span style={{fontSize: 14, marginLeft: 45}}> {data.chatText}</span>
                            </div>         
                            )
                        })}        
            </div>
         );
    }
}


 
export default ChatData;