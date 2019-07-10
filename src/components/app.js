import React from 'react';
import Channel from '../apis/channel';
import SearchChannel from './searchchannel';
import ChannelDetail from './channeldetail.js';
import ChannelList from './channellist';
const apiKey ="c1a81ddb203a447fbb5303f075fd8c6b";
class app extends React.Component {
    state = {channels : [],channelSelected : {}};

    componentDidMount(){
        this.onformSubmit();
    }
    onformSubmit = async (category) => {
        const response = await Channel.get('v2/sources',{
            params:{
                category,
                apiKey,

            }
        }
        );
        
        this.setState({
            channels : response.data.sources,    
            channelSelected : response.data.sources[0],
        });
    };
    onChannelSelect = (channel) =>{
        this.setState({
            channelSelected : channel,
        });
    };
    render(){
        return(
            <div className="ui container">
                <SearchChannel onformSubmit = {this.onformSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <ChannelDetail />
                        </div>
                        <div className="six wide column">
                            <ChannelList   onChannelSelect={this.onChannelSelect} Channels={this.state.channels} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default app;