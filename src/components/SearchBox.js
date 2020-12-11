import React from 'react';

class SearchBox extends React.Component {
    state = { searchbox: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchbox)
    }

    render() {
        return (
            <div className='ui segment' style={{backgroundColor: 'lightpink'}}>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Search Box</label>
                        <input 
                            type='text' 
                            value={this.state.searchbox}
                            onChange={(e) => this.setState({ searchbox: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBox;