import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/ImgUpload.css'


function ImgUpload() {
    const [img, setImg] = useState('')
    const [previewImg, setPreviewImg] = useState('');
    
    const serverUrl = "http://127.0.0.1:5000"

    function uploadImg(e){
        e.preventDefault()
  
        let formData = new FormData();

        formData.append('image', img)
        formData.append('filename', img.name)
        console.log(formData)
        axios.post(serverUrl+'/upload', formData).then((res)=>{
            console.log(res)
        })

    }

    function handlePreviewImg(e) {
        const selectedImg = e.target.files[0];
        setImg(selectedImg);
    
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewImg(reader.result);
        };
        reader.readAsDataURL(selectedImg);
      }

  return (
    <div className='ImgUpload'>
        <div className='upload'>
            <div className='upload-g'>
                <p>이미지 업로드</p>
                <form className='upload_form' onSubmit={(e)=>uploadImg(e)}>
                    <input type='file' accept="image/*"onChange={handlePreviewImg}/>{/* accept속성으로 image파일만 업로드 가능하게 설정/ (e)=>{setImg(e.target.files[0])}} */}
                    <button className='btn' type='submit'>전송</button> {/* onChange={handleApi} */}
                </form>
            </div>
            
        </div>
        <div className='preview'>
            <p>투입한 이미지 화면</p>
            <div className='preview-img'>
            
            {previewImg && (
            <img
              src={previewImg}
              alt='투입한 이미지'
              style={{ width: '400px', height:'533px' }}
            />
          )}
            </div>
        </div>
    </div>
  )
}

export default ImgUpload