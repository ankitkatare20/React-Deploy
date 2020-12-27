import React, { Component } from 'react';


class ChannelRoom extends Component {
    state = { 
        users: [
            {id: 1001, channelName: "Justin Coleman",  imgPath: "https://cdn.icon-icons.com/icons2/2110/PNG/512/development_icon_131032.png"},
            {id: 1002, channelName: "Development",  imgPath: "https://cdn.icon-icons.com/icons2/2110/PNG/512/development_icon_131032.png"},
            {id: 1003, channelName: "Derek Lee", imgPath: "https://cdn.icon-icons.com/icons2/2110/PNG/512/development_icon_131032.png"}
        ]
       }
    render() { 
    
        return ( 
            <div>
                 {this.state.users.map((data, i) => {
                            return (
                                <div className="onHov">
                                <div className="row" key={i} style={{ height: 45}}>
                                <img src={data.imgPath} style={{height: 30, marginTop: 5, marginLeft: 50}} /> 
                                <span style={{marginTop: 10, marginLeft: 30}}> # {data.channelName}</span>
                           </div> 
                           </div>          
                            )
                        })}

            </div>
         );
    }

   
}
 
export default  ChannelRoom;