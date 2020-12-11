import React from 'react';
import unsplash from '../api/unsplash';
import SearchBox from './SearchBox';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        this.setState( {images: response.data.results} );
    };

    render() {
        return (
            <div className='ui container' style={{marginTop: '20px'}}>
                <SearchBox onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} Images.
                <ImageList images={this.state.images} />
            </div>
        );
    };
}

export default App;