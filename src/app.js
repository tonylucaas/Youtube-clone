import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import  { SearchBar, VideoDetail}  from './components';


class App extends React.Component { 
state = {
    video: [],
    selectedVideo: null,
}
handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
    params: { 
        part: 'snippet',
        maxResults: 5,
        key:'AIzaSyABVLprEtHx_S3DjGLPJ7DOh1wYSU5_UUg',
        q: searchTerm, 
        }
    })

    this.setState({ videos: response.data.items, selectedVideo:response.data.items[0] });
}

    render() { 
        const { selectedVideo } = this.state;
        return(
            <Grid justifiy="center" container spacing= {10}>
                <Grid item xs={12}>
                    <Grid container spacing = {10}>
                             <Grid item xs = {12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                            </Grid> 
                            <Grid item xs = {8}>
                            </Grid>
                            <VideoDetail video={selectedVideo}/>
                            <Grid item xs = {4}>
                            {/* VIDEO LIST */}
                         </Grid>
                    </Grid>
                 </Grid>
            </Grid>
        )
    }
}


export default App;