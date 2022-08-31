import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import imageData from '../imageData';
import './ImageModal.scss';

export default function ImageModal(props) {
  const { selectedListItem, setSelectedListItem } = props;
  const { id, title, description, source } = selectedListItem;

  const imageIds = Object.keys(imageData).map((id) => Number(id));
  const currentIndex = imageIds.indexOf(id);

  const getNextListItem = (currentIndex) => {
    let nextIndex = undefined;

    // If the current selectedListItem is at the last index, return the first selectedListItem in the array.
    if (currentIndex === imageIds.length - 1) {
      nextIndex = 0;
      return imageData[imageIds[nextIndex]];
    }

    nextIndex = currentIndex + 1;
    return imageData[imageIds[nextIndex]];
  };

  const getPreviousListItem = (currentIndex) => {
    let previousIndex = undefined;

    // If the current selectedListItem is at index 0, return the last selectedListItem in the array.
    if (currentIndex === 0) {
      // nextIndex = 0;
      previousIndex = imageIds.length - 1;
      return imageData[imageIds[previousIndex]];
    }

    previousIndex = currentIndex - 1;
    return imageData[imageIds[previousIndex]];
  };

  return (
    <div className="container ImageModal">
      <FontAwesomeIcon
        className="xmark"
        icon={solid('xmark')}
        onClick={() => setSelectedListItem(null)}
      />
      <FontAwesomeIcon
        className="chevron-left"
        icon={solid('chevron-left')}
        onClick={() => setSelectedListItem(getPreviousListItem(currentIndex))}
      />
      <FontAwesomeIcon
        className="chevron-right"
        icon={solid('chevron-right')}
        onClick={() => setSelectedListItem(getNextListItem(currentIndex))}
      />
      <div className="textbox">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <FontAwesomeIcon className="chevron-up" icon={solid('chevron-up')} />
      </div>
      <img src={source} alt={title} />
    </div>
  );
}
