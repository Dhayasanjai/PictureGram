import { motion } from 'framer-motion';

import useFetchedPics from '../Hooks/useFetchedPics';

const OutputPhotos = (props) => {
  const docs = useFetchedPics({
    collection: 'Uploading-photos-to-firestore',
  });

  return (
    <div className="w-11/12 md:w-10/12 max-w-4xl mx-auto mb-10 grid grid-cols-3 shadow-2xl p-2 border border-purple-200">
      {docs &&
        docs.map((doc) => (
          <motion.div key={doc.id} layout className="p-1">
            <motion.img
              className="w-full h-full object-cover max-h-28 md:max-h-60  "
              src={doc.url}
              onClick={() => {
                props.imageSetHandler(doc.url, doc.id, doc.fileName);
              }}
              alt="pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
export default OutputPhotos;
