import { useState, useEffect } from 'react';

/**
 * progressive image component
 * @returns 점진적 이미지
 */

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ''}
      className="image"
    />
  );
};

export default ProgressiveImg;
