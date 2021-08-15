import { motion } from 'framer-motion';
import Delete from './Delete';
const SelectedImage = ({ id, fileName, SelectedImage, setSelectedImage }) => {
  const backdropCloseHandler = (event) => {
    if (event.target.classList.contains('backdrop')) {
      console.log('insides');
      setSelectedImage(null);
    }
  };
  const deletePhotoHandler = () => {
    Delete(id, fileName);
    setSelectedImage(null);
  };
  return (
    <div>
      <motion.div
        style={{ backgroundColor: 'rgba(0,0,0,0.7 )' }}
        className="backdrop w-full fixed top-0 left-0 h-full mx-auto    z-20 "
        onClick={backdropCloseHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className=" mx-auto w-1/12 text-center mt-16">
          <span className="mx-auto ">
            <motion.i
              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={deletePhotoHandler}
              className=" fas fa-trash-alt   mb-4 mx-auto bg-red-700 rounded-lg px-2 py-1 cursor-pointer  text-white  font-bold z-100  text-3xl"
            ></motion.i>
          </span>
        </div>
        <motion.img
          className=" mx-auto  object-cover"
          style={{
            maxHeight: '70%',
            maxWidth: '70%',
            border: '1px solid white',
            boxShadow: '3px 4px 5px rgba(0,0,0,0.5)',
          }}
          src={SelectedImage}
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        ></motion.img>
      </motion.div>
    </div>
  );
};
export default SelectedImage;
