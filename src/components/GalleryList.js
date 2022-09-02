import GalleryListItem from './GalleryListItem';
import imageData from '../imageData';
import './GalleryList.scss';

export default function GalleryList({ setModalImage }) {
  const renderedImages = Object.keys(imageData).map((id) => (
    <GalleryListItem
      key={imageData[id].id}
      id={imageData[id].id}
      title={imageData[id].title}
      description={imageData[id].description}
      layout={imageData[id].layout}
      source={imageData[id].source}
      setModalImage={setModalImage}
    />
  ));

  return <div className="container GalleryList">{renderedImages}</div>;
}
