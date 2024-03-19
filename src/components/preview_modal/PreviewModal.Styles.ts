const previewModalStyles = {
  previewBtn: {
    textTransform: "none",
  },

  modalStyle: {
    display: "flex",
    flexDirection: "column",
    height: { xs: "450px", md: "500px", lg: "580px" },
  },

  modalText: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  fileNameText: {
    font: "600 17px Poppins",
    fontSize: { xs: "14px", sm: "16px", md: "17px" },
    color: "black",
  },

  iFrameBox: {
    width: "100%",
    objectFit: "cover",
    mt: 2,
    flexGrow: 1,
  },
};

export default previewModalStyles;
