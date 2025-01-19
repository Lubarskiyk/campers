import clsx from 'clsx';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import css from './ImageGallery.module.css';

function ImageGallery({ className, data }) {
  const [toggler, setToggler] = useState(true);
  const galleryData = [];
  for (let i = 0; i < data.length; i++) {
    galleryData.push(data[i].original);
  }

  return (
    <div className={clsx(css.imagegallery, className)}>
      {data.map((item, index) => (
        <div key={index}>
          <img
            className={css.img}
            src={item.thumb}
            onClick={() => {
              setToggler(!toggler);
            }}
          />
        </div>
      ))}
      <FsLightbox toggler={toggler} sources={galleryData} type="image" />
    </div>
  );
}

export default ImageGallery;
