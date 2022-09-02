import './GalleryListItem.scss';

export default function GalleryListItem(props) {
  const { id, title, description, source, setModalImage } = props;
  const image = { id, title, description, source };

  return (
    <div
      className="container GalleryListItem"
      onClick={() => setModalImage(image)}
    >
      <img src={source} alt={title} />
    </div>
  );
}
