
import React from 'react';

const channelItem = ({channel, onChannelSelect}) => {
    return (
        <div onClick={()=>onChannelSelect(channel)}>
            
            <div className="content">
                <div className="header" >{channel.name}</div>
            </div>
        </div>
    );
}
export default channelItem; 