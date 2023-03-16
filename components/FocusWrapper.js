import {Badge} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Modal from "@mui/material/Modal";


const defaultProps = {
    border: '2px solid',
    bgcolor: 'pink',
    borderColor: '#05bdba',
    m:1,
    p: 1,
    width:'100%'

    // style: { width: '5rem', height: '5rem' },
};

const badgeStyle = {
    "& .MuiBadge-badge": {
        width: 35,
        height: 25,
        right: `20px`,
    }
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function FocusWrapper({visible=true, text='',imageSrc, children}) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <Box sx={{ width: '100%' }}>
            {!visible ? null :
                <Badge

                    badgeContent={text}
                    display={'flex'}
                    color="primary"
                    // m={1}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'middle',
                    }}

                    onClick={imageSrc ? handleOpen : handleClose}
                >
                    <Box className="StaticWrapper" borderRadius={3} {...defaultProps}>
                        {children}
                    </Box>
                </Badge>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <img
                        // loader={myLoader}
                        src={imageSrc}

                        alt="Algolia Flow"
                        width={'100%'}
                        height={'100%'}
                    />
                </Box>
            </Modal>
        </Box>

    );
}