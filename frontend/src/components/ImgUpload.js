import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/ImgUpload.css'


function ImgUpload() {
    const [img, setImg] = useState('')
    const serverUrl = "http://127.0.0.1:5000"

    // const [data, setData] = useState([{}])
    // useEffect(()=>{
    //     fetch(serverUrl+"/members").then(
    //         res=>res.json()
    //     ).then(
    //         data=>{
    //             setData(data)
    //             console.log(data)
    //         }
    //     )
    // },[])
    //서버 통신 테스트 코드

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

  return (
    <div className='ImgUpload'>
        <div className='upload'>
            <p>이미지 업로드</p>
            <form className='upload_form' onSubmit={(e)=>uploadImg(e)}>
                <input type='file' accept="image/*"onChange={(e)=>{setImg(e.target.files[0])}}/>{/* accept속성으로 image파일만 업로드 가능하게 설정 onChange={uploadImg} */}
                <button className='btn' type='submit'>전송</button> {/* onChange={handleApi} */}
            </form>

        </div>
    </div>
  )
}

export default ImgUpload