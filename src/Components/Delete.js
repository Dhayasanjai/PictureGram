import { firestore, storage } from '../firebase/config';

const Delete = (fileId, fileName) => {
  const storageRef = storage.ref(fileName);
  console.log(fileName);
  storageRef
    .delete()
    .then((snap) => {
      console.log(snap);
    })
    .catch((err) => {
      console.log(err);
    });
  firestore.collection('Uploading-photos-to-firestore').doc(fileId).delete();
};
export default Delete;
