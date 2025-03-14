import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { Image } from '../../App.types';

type ImageModalProps = {
  item: Image,
  isOpen: boolean,
  onClose: () => void,
};

const ImageModal: React.FC<ImageModalProps> = ({ item, isOpen, onClose }) => {
  const { urls, user, alt_description } = item;

  const customStyles: Modal.Styles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      background: 'white',
      overflow: 'visible',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Modal Image"
      closeTimeoutMS={300}
      shouldCloseOnEsc={true}
      onRequestClose={onClose}
    >
      <img className={s.modalImage} src={urls.regular} alt={alt_description} />
      <p>Author: {user.username}</p>
    </Modal>
  );
};

export default ImageModal;
