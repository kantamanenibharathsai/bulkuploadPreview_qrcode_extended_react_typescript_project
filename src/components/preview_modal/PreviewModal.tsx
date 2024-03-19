import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import previewModalStyles from "./PreviewModal.Styles";
import { Close } from "@mui/icons-material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: "95%", sm: "85%", md: "80%", lg: "60%", xl: "45%" },
    height: { xs: "500px", md: "600px", lg:"650px"},
    bgcolor: '#d3e0d7',
    borderRadius: 4,
    p: 3,
};


const handleTag = (path: string) => {
    switch (true) {
        case path.includes(".jpg"):
            return "img";
        case path.includes(".webp"):
            return "img";
        case path.includes(".png"):
            return "img";
        default:
            return "iframe";
    }
}


const PreviewModal = ({ file }: { file: File }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Button disableElevation disableRipple disableFocusRipple disableTouchRipple onClick={handleOpen} sx={previewModalStyles.previewBtn}>Preview</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Box sx={previewModalStyles.modalStyle}>
                        <Box sx={previewModalStyles.modalText}>
                            <Typography variant="h6" component={"h2"} sx={previewModalStyles.fileNameText}>
                                {file.name}
                            </Typography>
                            <IconButton onClick={handleClose}>
                                <Close />
                            </IconButton>
                        </Box>
                        <Box component={handleTag(file.name)} sx={previewModalStyles.iFrameBox} style={{ width: '100%', height: "100%", flexGrow: 1, }} src={URL.createObjectURL(file)} />
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default PreviewModal