import React from 'react';
import Channel from '../apis/channel';
import CategoryMenu from './categorymenu';
import ChannelDetail from './channeldetail.js';
import ChannelList from './channellist';
const apiKey ="c1a81ddb203a447fbb5303f075fd8c6b";
class app extends React.Component {
    state = {channels : [],channelSelected : {}};

    componentDidMount(){
        this.onhandleclick("entertainment");
    }
    onhandleclick = async (category) => {
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
                
                    <div className="ui internally celled grid">
                        <div className="row">
                            <div className="sixteen wide column">
                                <CategoryMenu handleClick = {this.onhandleclick}/>
                            </div>
                        </div>
                        <div className="ui horizontal hidden divider"></div>
                        <div className="row">
                            <div className="ten wide column">
                                <ChannelDetail channel={this.state.channelSelected}/>
                            </div>
                            <div className="six wide column">
                                <ChannelList   onChannelSelect={this.onChannelSelect} channels={this.state.channels} />
                            </div>
                        </div>
                    </div>
                
        )
    }
}

export default app;