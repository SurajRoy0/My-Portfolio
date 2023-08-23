import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { v4 as uuid } from "uuid";

export const scrollToSection = (goTo) => {
  document.querySelector("#" + goTo).scrollIntoView({ behavior: "smooth" });
};

export const uploadImageHandler = async (file) => {
  return new Promise((resolve, reject) => {
    const uniqueFilename = `${file.name}_${uuid()}`;
    const storageRef = ref(storage, "project-images/" + uniqueFilename);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Error uploading:", error);
        reject(error); // Reject the promise if an error occurs
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at", downloadURL);
          resolve({ imageUrl: downloadURL, uniqueFilename }); // Resolve the promise with the download URL
        } catch (error) {
          console.error("Error getting download URL:", error);
          reject(error); // Reject the promise if an error occurs
        }
      }
    );
  });
};
