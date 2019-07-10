import React from 'react';

class searchChannel extends React.Component {
    state = {
        category : '',
    };
    handlechange = (event) => {
        this.setState({
            category : event.target.value,
        })
    };
    handlesubmit = (event) => {
        event.preventDefault();
        this.props.onformSubmit(this.state.category)
    }
    render(){
        return (
            <div className="search-bar ui container">
                <form className="ui form" onSubmit={this.handlesubmit}>
                    <div className="field">
                        <label>Search Category</label>
                        <input type="text" value={this.state.category} onChange={this.handlechange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default searchChannel;