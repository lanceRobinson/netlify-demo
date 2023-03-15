import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Typography} from "@mui/material";
import {Search} from "@mui/icons-material";

const styles = {
    search:{

    }
}
export default function AlgoliaSearch() {

    return (
        // <Box sx={{flexGrow: 1}}>
            <div position="static" color="transparent">
                <Toolbar sx={{justifyContent: "end", flexGrow: 1}}>
                    <Typography variant={"overline"} padding={2}>Search the site</Typography>
                            <div id={'search'} margin={'auto'}></div>

                </Toolbar>
            </div>
        // </Box>
    );
}