import React from 'react';
import Channel from '../apis/channel';
import NewsList from './newslist';
import SearchNews from './searchnews';
import GirlReporter from '../images/reporter.png';
import MaleReporter from '../images/malereporter.png';
import Language from  '../images/language.png';
const apiKey="c1a81ddb203a447fbb5303f075fd8c6b";

class channelDetail extends React.Component{
    state = {News : []};
     
    componentDidMount(){
        this.onhandleclick("entertainment");
    }
    onhandleclick = async (q) => {
        const response = await Channel.get('v2/everything',{
            params:{
                q,
                pageSize:35,
                apiKey,

            }
        }
        );
        
        this.setState({
            News : response.data.articles,    
        });
    };
    render(){
        const  channel=this.props.channel;
        const  countryflag = channel.country + " flag";
        return(
                <div className="container" >
                    <div className="ui grid">
                        <div className="row">
                            <div className="sixteen wide column">
                                <SearchNews onformSubmit={this.onhandleclick} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="sixteen wide column">
                            <div className="ui raised centered card">
                                <div className="ui slide masked reveal image">
                                    <img alt="Loading..." src={GirlReporter} className="hidden content" />
                                    <img alt="Loading..." src={MaleReporter} className="visible content" />
                                </div>
                                <div className="content">
                                    <div className="ui right floated red button" onClick={()=>{this.onhandleclick(channel.name)}}>
                                        News Snippets
                                    </div>
                                    <a href={channel.url} className="header">{channel.name}</a>
                                    <div className="meta">
                                        <span className="date">{channel.id}</span>
                                    </div>
                                    <div className="description">
                                        {channel.description}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <div className="item">
                                        <a href={channel.url}>
                                            <i className="paper plane icon"></i>
                                            {channel.url}
                                        </a>
                                    </div>
                                    <div className="item">
                                        <i className={countryflag}></i>
                                        {channel.country}
                                    </div>
                                    <div className="item">
                                        <img alt="..." className="ui mini image"src={Language} />
                                        {channel.language}
                                        <i className="right floated like icon"></i>
                                        <i className="right floated star icon"></i>
                                    </div>
                                </div>
                            </div> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="sixteen wide column">
                                <NewsList    News={this.state.News} />
                            </div>

                        </div>
                    </div>
                    
                </div>
        )
    }
}
/*const  countryflag = channel.country + " flag";
    return(
        
        <div className="ui raised centered card">
  <div className="ui slide masked reveal image">
    <img alt="Loading..." src={GirlReporter} className="hidden content" />
    <img alt="Loading..." src={MaleReporter} className="visible content" />
  </div>
  <div className="content">
  <i className="right floated like icon"></i>
    <i className="right floated star icon"></i>
    <a href={channel.url} className="header">{channel.name}</a>
    <div className="meta">
      <span className="date">{channel.id}</span>
    </div>
    <div className="description">
      {channel.description}
    </div>
  </div>
  <div className="extra content">
    <div className="item">
        <a href={channel.url}>
      <i className="paper plane icon"></i>
      {channel.url}
    </a></div>
    <div className="item">
        <i className={countryflag}></i>
        {channel.country}
    </div>
    <div className="item">
        <img alt="..." className="ui mini image"src={Language} />
        {channel.language}
    </div>
  </div>
</div>

    )*/
export default channelDetail;