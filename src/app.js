import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import  { SearchBar, VideoDetail}  from './components';


class App extends React.Component { 
    render() { 
        return(
            <Grid justifiy="center" container spacing= {16}>
                <Grid item xs={12}>
                    <Grid container spacing = {16}>
                             <Grid item xs = {12}>
                            <SearchBar/>
                            </Grid> 
                            <Grid item xs = {8}>
                            </Grid>
                            <VideoDetail/>
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