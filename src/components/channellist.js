import React from 'react';
import ChannelItem from './channelitem';
const ChannelList =({channels,onChannelSelect})=> {
    const renderedList=channels.map(channel=>{
        return <ChannelItem key={channel.id} onChannelSelect={onChannelSelect} channel={channel}/>
    })
    return (
        <div className="ui divided stackable items" > 
        {renderedList}
        </div>
    )
} 
export default ChannelList;

