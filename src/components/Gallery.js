// Package
import { useState } from 'react';
// Components
import GalleryList from './GalleryList';
import ImageModal from './ImageModal';
// Stylesheet
import './Gallery.scss';

export default function Gallery() {
  const [selectedListItem, setSelectedListItem] = useState(null);
  
  return (
    <section className='container Gallery'> 
      <GalleryList setSelectedListItem={setSelectedListItem} />
      {
        selectedListItem && 
        <ImageModal
          selectedListItem={selectedListItem}
          setSelectedListItem={setSelectedListItem}
        />
      }
    </section>
  );
}