import React, { useState } from 'react'
import '../styles/ImgPreview.css'

function Preview() {
  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <div className='ImgPreview'>
      <p>이미지 미리보기</p>
      <input type="file" onChange={(e) => {
        encodeFileToBase64(e.target.files[0]);
      }} />
      <div className='preview'>
        {imageSrc && <img src={imageSrc} alt="preview-img" />}
      </div>
      <div className='img-values' id='labels'>

      </div>
      <div className='img-values' id='metadata'>

      </div>
    </div>
  )
}

export default Preview