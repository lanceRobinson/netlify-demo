import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Badge, Typography} from "@mui/material";
import {Search} from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Image from 'next/image'

const styles = {
    // border: {borderStyle: solid}
}

const defaultProps = {
    border: '2px solid',
    bgcolor: 'grey.200',
    borderColor: '#05bdba',
    bgOpacity: '0.5',
    p: 1,

    // style: { width: '5rem', height: '5rem' },
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function AlgoliaSearch() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        // <Box sx={{flexGrow: 1}}>
        <div position="static" color="transparent">
            <Toolbar sx={{justifyContent: "end", flexGrow: 1}}>
                <Badge
                    badgeContent={"?"}
                    onClick={handleOpen}
                    color="primary"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                <Box display="flex" justifyContent="end" alignItems={"center"} borderRadius={3} {...defaultProps}>
                    <Typography variant={"overline"} padding={2}>Search the site</Typography>

                    <div id={'search'} margin={'auto'}></div>
                </Box>
                </Badge>

            </Toolbar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <img
                        // loader={myLoader}
                        src="https://d33wubrfki0l68.cloudfront.net/196079c9dcd7dd82ac51994c0ed1d53f9fcd6b4c/22caa/v3/img/blog/plugin_flow.jpg"
                        alt="Algolia Flow"
                        width={'100%'}
                        height={'100%'}
                    />
                </Box>
            </Modal>
        </div>
        // </Box>

    );
}

