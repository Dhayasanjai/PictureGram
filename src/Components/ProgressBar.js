import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import useStore from '../Hooks/useStore';
const ProgressBar = ({ file, setFileHandler }) => {
  const { url, progress } = useStore(file);
  useEffect(() => {
    if (url) {
      setFileHandler();
    }
  }, [url, setFileHandler]);
  if (progress === 100 || progress === null) {
    return (
      <div style={{ height: '11px', opacity: '0', marginBottom: '1rem' }}>
        no progress
      </div>
    );
  }
  return (
    <React.Fragment>
      <div
        style={{ height: '11px' }}
        className="w-10/12 md:w-10/12 max-w-4xl mx-auto bg-white border-2 flex gap-1 rounded-full border- mb-4"
      >
        <motion.div
          className="progress-bar bg-purple-600   rounded-full  "
          style={{ height: '7px' }}
          initial={{ width: 0 }}
          animate={{ width: progress + '%' }}
        ></motion.div>
      </div>
    </React.Fragment>
  );
};
export default ProgressBar;
