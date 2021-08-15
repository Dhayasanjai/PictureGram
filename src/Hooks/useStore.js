import { useState, useEffect } from 'react';
import { storage, firestore, timestamp } from '../firebase/config';
const useStore = (file) => {
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (file) {
      const storageRef = storage.ref(file.name);
      const firestoreRef = firestore.collection(
        'Uploading-photos-to-firestore'
      );
      storageRef.put(file).on(
        'state_changed',
        (snapShot) => {
          const percentage =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setProgress(percentage);
        },
        (error) => {
          setError(error);
          console.log(error);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          const createAt = timestamp();
          firestoreRef.add({
            fileName: file.name,
            url,
            createAt,
          });
          setUrl(url);
        }
      );
    }
  }, [file]);
  return { url, progress, error };
};
export default useStore;
