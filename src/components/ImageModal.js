import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import imageData from '../imageData';
import './ImageModal.scss';

export default function ImageModal(props) {
  const { modalImage, setModalImage } = props;
  const { id, title, description, source } = modalImage;
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  // Dependencies of getNextListItem & getPreviousListItem.
  const imageIds = Object.keys(imageData).map((id) => Number(id));
  const currentIndex = imageIds.indexOf(id);

  const getNextListItem = (currentIndex) => {
    let nextIndex = undefined;

    // If the current modalImage is at the last index, return the first modalImage in the array.
    if (currentIndex === imageIds.length - 1) {
      nextIndex = 0;
      return imageData[imageIds[nextIndex]];
    }

    nextIndex = currentIndex + 1;
    return imageData[imageIds[nextIndex]];
  };

  const getPreviousListItem = (currentIndex) => {
    let previousIndex = undefined;

    // If the current modalImage is at index 0, return the last modalImage in the array.
    if (currentIndex === 0) {
      // nextIndex = 0;
      previousIndex = imageIds.length - 1;
      return imageData[imageIds[previousIndex]];
    }

    previousIndex = currentIndex - 1;
    return imageData[imageIds[previousIndex]];
  };

  const infoClass = infoIsOpen ? 'info opened' : 'info closed';

  return (
    <div className="container ImageModal">
      <FontAwesomeIcon
        className="xmark"
        icon={solid('xmark')}
        onClick={() => setModalImage(null)}
      />
      <FontAwesomeIcon
        className="chevron-left"
        icon={solid('chevron-left')}
        onClick={() => setModalImage(getPreviousListItem(currentIndex))}
      />
      <FontAwesomeIcon
        className="chevron-right"
        icon={solid('chevron-right')}
        onClick={() => setModalImage(getNextListItem(currentIndex))}
      />
      <div className={infoClass}>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        {!infoIsOpen && (
          <FontAwesomeIcon
            className="chevron-up"
            icon={solid('chevron-up')}
            onClick={() => setInfoIsOpen(true)}
          />
        )}
        {infoIsOpen && (
          <FontAwesomeIcon
            className="chevron-down"
            icon={solid('chevron-down')}
            onClick={() => setInfoIsOpen(false)}
          />
        )}
      </div>
      <img src={source} alt={title} />
    </div>
  );
}
