import clsx from 'clsx';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import css from './ImageGallery.module.css';

function ImageGallery({ className }) {
  const [toggler, setToggler] = useState(true);
  const data = [
    {
      id: 0,
      image: 'https://ftp.goit.study/img/campers-test-task/1-1.webp',
    },
    {
      id: 1,
      image: 'https://ftp.goit.study/img/campers-test-task/1-2.webp',
    },
    {
      id: 2,
      image: 'https://ftp.goit.study/img/campers-test-task/1-3.webp',
    },
  ];
  const imageUrl = [
    'https://ftp.goit.study/img/campers-test-task/1-1.webp',
    'https://ftp.goit.study/img/campers-test-task/1-2.webp',
    'https://ftp.goit.study/img/campers-test-task/1-3.webp',
  ];

  return (
    <div className={clsx(css.imagegallery, className)}>
      {data.map(item => (
        <div key={item.id}>
          <img
            className={css.img}
            src={item.image}
            onClick={() => {
              setToggler(!toggler);
            }}
          />
        </div>
      ))}
      <FsLightbox toggler={toggler} sources={imageUrl} type="image" />
    </div>
  );
}

export default ImageGallery;
