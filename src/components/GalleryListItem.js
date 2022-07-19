import './GalleryListItem.scss';

export default function GalleryListItem(props) {
  const { layout, source, title } = props;
  const imgClass = layout; // 'portrait' or 'landscape'

  return (
    <div className='container GalleryListItem'>
      <img 
        className={imgClass}
        src={source}
        alt={title}
      />
    </div>
  );
}