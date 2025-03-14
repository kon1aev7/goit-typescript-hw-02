import s from './ImageCard.module.css';
import { Image } from '../../App.types';

type ImageCardProps = {
  item: Image,
  onClick: (item: Image) => void,
};

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  const { urls, alt_description } = item;

  const handleClick = () => {
    onClick(item);
  };

  return (
    <div className={s.card}>
      <img
        className={s.imgCard}
        onClick={handleClick}
        src={urls.small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
