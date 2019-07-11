
import React from 'react';
import Channeltv from '../images/pngtree-tv-head.png';
const channelItem = ({channel, onChannelSelect}) => {
    return (
        <div className="item" onClick={()=>onChannelSelect(channel)}>
        
            <div className="middle aligned content">
            <img className="left floated mini ui circular image" alt="..." src={Channeltv}/>
                <a className="header">
                    {channel.name}
                </a>
                <div className="meta">
                    <i className="favorite icon"></i>
                    {channel.id}
                </div>
                <div className="extra">
                    <div className="ui right floated primary button">
                        Click
                    </div>
                </div>
            </div>
        </div>
    );
}
export default channelItem; 