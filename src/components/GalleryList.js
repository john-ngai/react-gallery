// Data
import imageData from '../imageData';
// Component
import GalleryListItem from './GalleryListItem';
// Stylesheet
import './GalleryList.scss';

export default function GalleryList({ setSelectedListItem }) {
  const galleryListElements = Object.keys(imageData).map(id => (
    <GalleryListItem
      key={imageData[id].id}
      id={imageData[id].id}
      title={imageData[id].title}
      description={imageData[id].description}
      layout={imageData[id].layout}
      source={imageData[id].source}
      setSelectedListItem={setSelectedListItem}
    />
  ));
  
  return (
    <div className='container GalleryList'>
        {galleryListElements}
    </div>
  );
}