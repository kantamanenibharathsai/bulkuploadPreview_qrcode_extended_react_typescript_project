import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { useCallback, useState, } from "react";
import styles from "./BulkUpload.Styles";
import { useDropzone } from "react-dropzone";
import docImage from "../../assets/bulk_upload_images/docImage.png";
import upload from "../../assets/bulk_upload_images/MaskGroup.png";
import CloseIcon from "@mui/icons-material/Close";
import extendedLogo from "../../assets/bulk_upload_images/extendedLogo.png"
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { CiSearch } from "react-icons/ci";
import homeLogo from "../../assets/sidebar_logos/home.png";
import categoryLogo from "../../assets/sidebar_logos/category.png";
import productLogo from "../../assets/sidebar_logos/product.png";
import cartLogo from "../../assets/sidebar_logos/cart.png";
import aboutUsLogo from "../../assets/sidebar_logos/aboutus.png";
import supportLogo from "../../assets/sidebar_logos/support.png";
import settingsLogo from "../../assets/sidebar_logos/settings.png";
import tableOfContentsLogo from "../../assets/bulk_upload_images/tableOfContents.png";
import PreviewModal from "../../components/preview_modal/PreviewModal";
const profileUrl = "https://s3-alpha-sig.figma.com/img/d0ed/14b4/d17eb57bc99f73c6449f1c79f0a51ca6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l9cYq7TvLK5gZnnXB71zVkCau-tUrUdEUv3LhEndCs7v~~tSnnJ4fYlI9iyAmqqdXUOSxbvzqNkxK~IFRv94rNWqZ~SutmtkrtvSK4CgYc4j2iOTEltq6EEzlO06ORzQQIZT6178g6uDHgOSOmXqjgJyeuQSiUHPgzTZYkWrtfayvlN9pWtDPFM6vGzqU6TjrbpruxZmdIrbl~VGuiA3ledvHTsZAbUmyrs644PPtRTM~EKwaGajfrUoxD2iJQGua99PlUZmzzHfD-Oakl~PWgPjDVLITLiEnJ5OCVOT36gXrrg62JeAfY1LfnUJ-cRA51oL6Vx0GiaUUDXImWYjpg__"


interface IState {
  progress: number;
  filesData: {
    fileId: number;
    fileName: string;
    fileSize: number;
    fileType: string;
  }[];

  data: {
    name: string;
    size: number;
    type: string;
  };
}


// const handleImageSrc = (path: string) => {
//   switch(path) {
//     case path.includes(".png");
//     return 
//   }
// }

const BulkUpload = () => {
  const [progress, setProgress] = useState<IState["progress"]>(0);
  const [filesData, setFilesData] = useState<File[]>([]);


  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      setFilesData([...filesData, file])
    });

    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [filesData]);



  const renderFileUpload = () => {
    if (filesData.length > 0) {
      return (
        <Box>
          {filesData.map((file) => {
            return (
              <Box component="img" src={docImage} sx={styles.file} key={filesData.indexOf(file)} />
            );
          })}
        </Box>
      );
    } else {
      return (
        <Box sx={styles.chooseText}>
          <Typography>Choose files to upload</Typography>
        </Box>
      );
    }
  };

  const { getRootProps, getInputProps, } = useDropzone({ onDrop });

  const handleRemoveClick = (index: number) => {
    const allFiles = [...filesData];
    allFiles.splice(index, 1)
    setFilesData(allFiles);
  };

  const renderProgressBar = () => {
    if (filesData.length > 0) {
      return (
        <Box component="ul" sx={styles.progressUnorderedListContainer}>
          {filesData.map(eachFile => (
            <Box component="li" key={filesData.indexOf(eachFile)} sx={styles.rightListItem}>
              <Box component="img" src={docImage} />
              <Box sx={styles.docUploadBox}>
                <Box sx={styles.uploadingBox}>
                  <Typography sx={styles.fileName}>{eachFile.name}</Typography>
                  <Box sx={styles.sizeBox}>
                    <Typography sx={styles.fileSize}>{eachFile.size}kb</Typography>
                    <PreviewModal file={eachFile} />
                    <CloseIcon
                      sx={styles.closeIcon}
                      onClick={() => handleRemoveClick(filesData.indexOf(eachFile))}
                    />
                  </Box>
                </Box>
                <Box sx={styles.progressBox}>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={styles.progressBar}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      );
    } else {
      return <Typography>No file uploads.</Typography>;
    }
  };


  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.childContainer}>
        <Box sx={styles.leftContainer}>
          <Box sx={styles.leftChildContainer}>
            <Box component="img" alt="extended-logo" sx={styles.extendedLogo} src={extendedLogo} />
            <Box sx={styles.profileContentContainer}>
              <Box component="img" sx={styles.userProfileImage} alt="Travis Howard" src={profileUrl} />
              <Typography sx={styles.userNameText}>James Bond</Typography>
              <Typography sx={styles.userEmail}>jamesbond59@gmail.com</Typography>
            </Box>
            <Box component="ul" sx={styles.unorderedList}>
              <Box component="li" sx={styles.listItem}>
                <Box sx={styles.iconTextContainer}>
                  <Box component="img" alt="home-logo" sx={styles.listItemLogoImg} src={homeLogo} />
                  <Typography sx={styles.listItemText}>Home</Typography>
                </Box>
                <ChevronRightOutlinedIcon sx={styles.rightArrowIcon} />
              </Box>
              <Box component="li" sx={styles.listItem}>
                <Box sx={styles.iconTextContainer}>
                  <Box component="img" alt="category-logo" sx={styles.listItemLogoImg} src={categoryLogo} />
                  <Typography sx={styles.listItemText}>Category</Typography>
                </Box>
                <ChevronRightOutlinedIcon sx={styles.rightArrowIcon} />
              </Box>
              <Box component="li" sx={styles.listItem}>
                <Box sx={styles.iconTextContainer}>
                  <Box component="img" alt="product-logo" sx={styles.listItemLogoImg} src={productLogo} />
                  <Typography sx={styles.listItemText}>Product</Typography>
                </Box>
                <ChevronRightOutlinedIcon sx={styles.rightArrowIcon} />
              </Box>
              <Box component="li" sx={styles.listItem}>
                <Box sx={styles.iconTextContainer}>
                  <Box component="img" alt="cart-logo" sx={styles.listItemLogoImg} src={cartLogo} />
                  <Typography sx={styles.listItemText}>Cart</Typography>
                </Box>
                <ChevronRightOutlinedIcon sx={styles.rightArrowIcon} />
              </Box>
              <Box component="li" sx={styles.listItem}>
                <Box sx={styles.iconTextContainer}>
                  <Box component="img" alt="aboutUs-logo" sx={styles.listItemLogoImg} src={aboutUsLogo} />
                  <Typography sx={styles.listItemText}>About Us</Typography>
                </Box>
                <ChevronRightOutlinedIcon sx={styles.rightArrowIcon} />
              </Box>
              <Box component="li" sx={styles.listItem}>
                <Box sx={styles.iconTextContainer}>
                  <Box component="img" alt="support-logo" sx={styles.listItemLogoImg} src={supportLogo} />
                  <Typography sx={styles.listItemText}>Support</Typography>
                </Box>
                <ChevronRightOutlinedIcon sx={styles.rightArrowIcon} />
              </Box>
              <Box component="li" sx={styles.listItem}>
                <Box sx={styles.iconTextContainer}>
                  <Box component="img" alt="settings-logo" sx={styles.listItemLogoImg} src={settingsLogo} />
                  <Typography sx={styles.listItemText}>Settings</Typography>
                </Box>
                <ChevronRightOutlinedIcon sx={styles.rightArrowIcon} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.rightContainer}>
          <Box sx={styles.rightChildContainer}>
            <Box sx={styles.rightNavContainer}>
              <Box sx={styles.navLogoTextContainer}>
                <Box component="img" alt="table-of-contents-logo" sx={styles.rightNavLogo} src={tableOfContentsLogo} />
                <Typography sx={styles.navHeadingText}>Bulk Upload</Typography>
              </Box>
              <Box sx={styles.searchInputNotificationContainer}>
                <Box sx={styles.searchInputContainer}>
                  <CiSearch className="search-icon" />
                  <Box component="input" sx={styles.inputElement} placeholder="Search" />
                </Box>
                <NotificationsNoneOutlinedIcon sx={styles.notificationIcon} />
              </Box>
            </Box>
            <Box sx={styles.rightBodyContainer}>
              <Box sx={styles.rightBodyLeftContainer}>
                <Box
                  sx={styles.filesBox}
                  {...getRootProps()}
                >
                  <Box component="input" {...getInputProps()} />
                  {renderFileUpload()}
                </Box>
                <Box sx={styles.dragBox}>
                  <Box component="img" src={upload} alt="upload-img" sx={styles.uploadImage} />
                  <Typography sx={styles.dragAndDropText}>Drag And Drop, Or Browse Files</Typography>
                  <Box
                    component={"input"}
                    {...getInputProps()}
                    display={"none"}
                    id="fileInput"
                  />
                  <Button
                    sx={styles.browseBtn}
                    disableElevation
                    disableFocusRipple
                    disableTouchRipple
                    disableRipple
                    onClick={() => {
                      document.getElementById("fileInput")?.click();
                    }}
                  >
                    Browse File
                  </Button>
                </Box>
              </Box>
              <Box sx={styles.rightBodyRightContainer}>
                <Typography sx={styles.uploadedFileText}>Uploaded File</Typography>
                {renderProgressBar()}
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default BulkUpload;
