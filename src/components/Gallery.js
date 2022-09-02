import { useState } from 'react';
import GalleryList from './GalleryList';
import ImageModal from './ImageModal';
import './Gallery.scss';

export default function Gallery() {
  const [modalImage, setModalImage] = useState(null);

  // Disable scrolling & user select when an image is opened in the modal.
  if (modalImage) {
    document.body.style.overflow = 'hidden';
    document.body.style.userSelect = 'none';
  } else {
    document.body.style.overflow = 'visible';
    document.body.style.userSelect = 'auto';
  }

  return (
    <section className="container Gallery">
      <GalleryList setModalImage={setModalImage} />
      {modalImage && (
        <ImageModal modalImage={modalImage} setModalImage={setModalImage} />
      )}
    </section>
  );
}
