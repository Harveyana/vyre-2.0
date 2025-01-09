
import { getStorage, ref, deleteObject, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AppStorage } from '../firebaseConfig'

export const useConverters = () => {

    const objectToArray = (obj:{}) => {
        return Object.entries(obj).map(([key, value]) => ({ key, value }));
    };

    const formatNumber = (number: number): string => {
      if(!number){ return}
      return new Intl.NumberFormat('en-US').format(number);
    };

    const getImageUrls = async(imagefiles: File[])=>{

    const storage = getStorage()
    // upload product images 
    const ProductImages = await Promise.all(imagefiles.map(async (file: File) => {
      const storageRef = ref(AppStorage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Wait for the upload to complete
      await new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          null,
          (error) => reject(error),
          () => resolve()
        );
      });

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    }));

    console.log(ProductImages)

    return ProductImages

    }

    const getImageUrl = async(file: File)=>{

    const storage = getStorage()
    
    const storageRef = ref(AppStorage, `file/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Wait for the upload to complete
    await new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          null,
          (error) => reject(error),
          () => resolve()
        );
    });

    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL

    }

    const deletefromStorage = async(imageUrl:string)=>{

    // const storage = getStorage()
   const imageRef = ref(AppStorage,imageUrl);
    // upload product images 
    
    deleteObject(imageRef).then(() => {
      // File deleted successfully
      return true
    }).catch((error) => {
      // Uh-oh, an error occurred!
       return false
    });

    }

    
    return {
      objectToArray,
      getImageUrls,
      getImageUrl,
      deletefromStorage,
      formatNumber
    }

}