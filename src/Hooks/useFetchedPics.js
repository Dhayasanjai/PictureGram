import { useEffect, useState } from 'react';
import { firestore } from '../firebase/config';
const useFetchedPics = ({ collection }) => {
  const [fetchedDocs, setFetchedDocs] = useState([]);
  useEffect(() => {
    const sub = firestore
      .collection(collection)
      .orderBy('createAt', 'desc')
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((docs) => {
          document.push({ ...docs.data(), id: docs.id });
        });
        setFetchedDocs(document);
      });
    return () => {
      sub();
    };
  }, [collection]);
  return fetchedDocs;
};
export default useFetchedPics;
