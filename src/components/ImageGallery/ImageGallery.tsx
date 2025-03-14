import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { Image } from '../../App.types';

type ImageGalleryProps = {
  items: Image[],
  onClick: (item: Image) => void,
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onClick }) => {
  return (
    <ul className={s.menuList}>
      {items.map(item => (
        <li className={s.list} key={item.id}>
          <ImageCard item={item} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
