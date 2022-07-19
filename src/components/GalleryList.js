import imageData from '../imageData';
import GalleryListItem from './GalleryListItem';
import './GalleryList.scss';

export default function GalleryList() {
  const galleryListElements = imageData.map(img => (
    <GalleryListItem
      key={img.id}
      title={img.title}
      description={img.description}
      layout={img.layout}
      source={img.source}
    />
  ));
  
  return (
    <div className='container GalleryList'>
      {galleryListElements}
    </div>
  );
}