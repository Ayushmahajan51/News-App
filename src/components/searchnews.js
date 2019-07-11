import React from 'react';

class searchNews extends React.Component {
    state = {
        q : '',
    };
    handlechange = (event) => {
        this.setState({
            q : event.target.value,
        })
    };
    handlesubmit = (event) => {
        event.preventDefault();
        this.props.onformSubmit(this.state.q)
    }
    render(){
        return(
            
            <div className="ui container">
                <form className="ui form" onSubmit={this.handlesubmit}>
                    <div className="field">
                    <div className="ui fluid action input focus">
                            <input type="text" value={this.state.q} placeholder="Search Query" onChange={this.handlechange}/>
                            <div className="ui primary button" onClick={this.handlesubmit}>Search</div>
</div>

                        
                    </div>
                </form>
            </div>
            
            
        ) 
    };
}

export default searchNews;