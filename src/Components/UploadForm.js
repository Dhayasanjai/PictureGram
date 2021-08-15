import ProgressBar from './ProgressBar';

import { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const type = ['image/jpeg', 'image/png'];
  const photoChangeHandler = (event) => {
    if (event.target.files[0] && type.includes(event.target.files[0].type)) {
      setError(null);
      setFile(event.target.files[0]);
    } else {
      setFile(null);
      setError(' please upload .jpg or .jpeg format file!');
    }
  };
  const setFileHandler = () => {
    setFile(null);
  };
  return (
    <form className="text-center mt-20">
      <h2 className=" font-bold text-xl text-purple-900 p-4 ">
        You can upload by click this button down below.
      </h2>
      <div className="relative -left-10">
        <i
          style={{ zIndex: '-1' }}
          className="fas fa-upload text-2xl  relative  left-20 top-2 text-white   bg-purple-800 px-6  py-1 rounded-full "
        ></i>
        <input
          type="file"
          className="opacity-0 h-10 w-20"
          onChange={photoChangeHandler}
        ></input>
      </div>
      <div>
        {!error && !file && (
          <p className="font-bold text-xl text-white opacity-0 text-center mt-4 mb-2">
            {'  thanks for visiting this page '}
          </p>
        )}
        {error && (
          <p className="font-bold text-xl text-red-600 text-center mt-4  mb-2">
            {error}
          </p>
        )}
        {file && (
          <p className="font-bold text-xl text-blue-600 text-center mt-4  mb-2">
            {'Uploading "' + file.name + '"...'}
          </p>
        )}
      </div>
      <ProgressBar file={file} setFileHandler={setFileHandler}></ProgressBar>
    </form>
  );
};
export default UploadForm;
