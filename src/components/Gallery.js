// Package
import { useState } from 'react';
// Components
import GalleryList from './GalleryList';
import ImageModal from './ImageModal';
// Stylesheet
import './Gallery.scss';

export default function Gallery() {
  const [selectedListItem, setSelectedListItem] = useState(null);

  // Disable scrolling when an image is selected / opened in the modal.
  if (selectedListItem) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  return (
    <section className="container Gallery">
      <GalleryList setSelectedListItem={setSelectedListItem} />
      {selectedListItem && (
        <ImageModal
          selectedListItem={selectedListItem}
          setSelectedListItem={setSelectedListItem}
        />
      )}
    </section>
  );
}
