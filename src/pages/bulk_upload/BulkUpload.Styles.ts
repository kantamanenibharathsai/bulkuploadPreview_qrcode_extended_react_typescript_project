const styles = {
  mainContainer: {
    height: "100vh",
    background: "#f7f8fc",
  },

  childContainer: {
    // border: "6px solid green",
    width: { xs: "97%", sm: "90%", md: "80%", lg: "100%" },
    height: "inherit",
    margin: { xs: "auto", lg: 0 },
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: { xs: "center", lg: "strech" },
  },

  leftContainer: {
    width: { xs: "100%", lg: "20%", xl: "15%" },
    background: "#054081",
    display: { xs: "none", lg: "flex" },
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },

  leftChildContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "35px",
    width: "88%",
    // border: "3px solid green",
    mt: "30px",
    height: "90%",
  },

  extendedLogo: {
    width: "120px",
    height: "50x",
  },

  profileContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  userProfileImage: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    mixBlendMode: "multiply",
    filter: "contrast(10)",
  },

  userNameText: {
    fontSize: "16px",
    color: "#ffffff",
    fontWeight: "800",
    mt: "16px",
  },

  userEmail: {
    fontSize: "14px",
    color: "#6285B0",
    fontWeight: "500",
  },

  unorderedList: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    // border: "2px solid red",
    width: "90%",
    alignSelf: "center",
    flexGrow: 1,
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  iconTextContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  listItemLogoImg: {
    width: "20px",
    height: "20px",
    color: "#ffffff",
  },

  listItemText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: "15px",
  },

  rightArrowIcon: {
    color: "#3b6599",
    fontSize: "20px",
  },

  rightContainer: {
    width: { xs: "100%", lg: "100%" },
    // border: "2px solid red",
    height: "100%",
    py: 3.5,
  },

  rightChildContainer: {
    width: { lg: "98%", xl: "95%" },
    // border: "2px solid pink",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    margin: "auto",
  },

  rightNavContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // border: "4px solid black",
  },

  navLogoTextContainer: {
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    gap: "10px",
    // border: "4px solid black"
  },

  rightNavLogo: {
    color: "#3f3f41",
  },

  navHeadingText: {
    color: "#3f3f41",
    fontSize: "18px",
    fontWeight: "700",
  },

  searchInputNotificationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "space-between", lg: "flex-start" },
    gap: "25px",
    // border: "2px solid orange",
    width: { xs: "100%", lg: "auto" },
  },

  searchInputContainer: {
    width: "330px",
    border: "1px solid #07B0E8",
    borderRadius: "6px",
    display: "flex",
    height: "39px",
    alignItems: "center",
    background: "#ffffff",
    pr: 1,
  },

  inputElement: {
    flexGrow: 1,
    height: "36px",
    outline: "none",
    border: "none",
    color: "#3f3f41",
    fontSize: "15px",
  },

  notificationIcon: {
    width: "26px",
    height: "26px",
    color: "#3f3f41",
  },

  rightBodyContainer: {
    // border: "5px solid green",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: { xs: "center", lg: "flex-start" },
    flexGrow: 1,
    justifyContent: { xs: "flex-start", lg: "space-between" },
    gap: { xs: 2, lg: 0 },
  },

  rightBodyLeftContainer: {
    background: "#fff",
    px: { xs: 1, sm: 2 },
    py: { xs: 3, sm: 2 },
    borderRadius: "25px",
    // border: "2px solid orange",
    width: { xs: "100%", lg: "60%" },
  },

  filesBox: {
    background: "#f7f8fc",
    border: "1px dashed #979797",
    borderRadius: "25px",
    height: { xs: "200px", lg: "300px" },
    px: { xs: 1, sm: 4 },
    py: { xs: 3, sm: 4 },
    display: "flex",
    overflowY: "auto",
  },

  file: {
    width: { xs: 40, sm: 60 },
    height: 60,
  },

  dragBox: {
    textAlign: "center",
    mt: 2,
  },

  uploadImage: {
    height: "39px",
    width: "39px",
  },

  dragAndDropText: {
    font: "500 15px Poppins",
    color: "#414042",
    LineHeight: "28px",
  },

  browseBtn: {
    textTransform: "none",
    color: "#fff",
    fontWeight: 600,
    background: "#37b0e8",
    mt: 2,
    py: 1,
    px: 4,
    borderRadius: "20px",
    "&:hover": {
      background: "#37b0e8",
    },
  },

  rightBodyRightContainer: {
    // border: "3px solid black",
    width: { xs: "100%", lg: "38%" },
  },

  uploadedFileText: {
    font: "800 18px Poppins",
    color: "#414042",
    LineHeight: "40px",
  },

  rightListItem: {
    display: "flex",
    alignItems: "center",
    // border: "4px solid red",
  },

  docUploadBox: {
    width: "100%",
    ml: 1.5,
  },

  uploadingBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  fileName: {
    font: "500 14px Poppins",
    color: "#414042",
  },

  closeIcon: {
    color: "#666",
    width: "20px",
    height: "20px",
    cursor: "pointer",
  },

  progressBox: {
    width: "100%",
  },

  progressBar: {
    height: 8,
    borderRadius: 5,
    background: "#d9d9d9",
  },

  sizeBox: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },

  fileSize: {
    font: "500 14px Poppins",
    color: "#414042",
  },

  chooseText: {
    color: "#6666",
  },

  progressUnorderedListContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // border: "3px solid yellow",
    gap: 2,
    height: { xs: "350px", lg: "600px" },
    overflowY: "auto",
    listStyleType: "none",
    p: 0,
    mt: 1,
  },

  previewImg: {
    width: "150px",
    height: "150px",
  },
};

export default styles;
