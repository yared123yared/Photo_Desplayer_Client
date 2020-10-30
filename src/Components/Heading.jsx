import React from 'react'
import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
class Heading extends React.Component {
    render() {
        return (

            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
 </Typography>
                </Toolbar>
            </AppBar>

        );
    }
}

export default Heading;