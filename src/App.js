import { Fragment, useState } from 'react';
import Title from './Components/Title';
import UploadForm from './Components/UploadForm';
import SelectedImage from './Components/SelectedImage';
import OutputPhotos from './Components/OutputPhotos';
function App() {
  const [SelectedImageUrl, setSelectedImage] = useState(null);
  const [id, setId] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const imageSetHandler = (url, fileId, fileName) => {
    setSelectedImage(url);
    setId(fileId);
    setSelectedFileName(fileName);
  };

  return (
    <Fragment>
      <div className="">
        <Title></Title>
        <UploadForm></UploadForm>
        <OutputPhotos imageSetHandler={imageSetHandler} />
      </div>

      {SelectedImageUrl && (
        <SelectedImage
          fileName={selectedFileName}
          id={id}
          SelectedImage={SelectedImageUrl}
          setSelectedImage={setSelectedImage}
        ></SelectedImage>
      )}
    </Fragment>
  );
}

export default App;
