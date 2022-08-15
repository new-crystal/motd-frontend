import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const input_ref = useRef();
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [album, setAlbum] = useState();
  const [musicname, setMusicname] = useState("music file selet!");
  const navigate = useNavigate();
  
  
  const onChangeInputHandler = (e) => {
    setSelectedFile({
        selectedFile: e.target.files[0]
    })
    setMusicname(e.target.files[0].name)
  }

  const onChangeInputTitleHandler = (event) =>{
    setTitle(event.target.value);
  }

  const onChangeInputArtistHandler = (event0) =>{
    setArtist(event0.target.value);
  }

  const onChangeInputAlbumHandler = (event1) =>{
    setAlbum(event1.target.value);
  }

  const postHandler = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    const addMusic = {
       title, artist, album, 
       musicValue: formData
    }

    axios.post("url", addMusic).then(res => {
        setSelectedFile(null);
        alert("파일 업로드 성공!")
        navigate("/")
    }).catch(err=>{
        alert("파일 업로드 실패!")
    })
  }

    return (
        <>
        <React.Fragment>
        <InputBox>
        <h1>My Music of today upload</h1>
        <Input
        type="text"
        ref={input_ref}
        placeholder="music title"
        onChange={onChangeInputTitleHandler}
        />
        <tr/>
         <Input
        type="text"
        ref={input_ref}
        placeholder="artist"
        onChange={onChangeInputArtistHandler}
        />
        <tr/>
        <Input
        type="text"
        ref={input_ref}
        placeholder="album"
        onChange={onChangeInputAlbumHandler}
        />
        <tr/>
        {/* <Input
        type="text"
        onChange={(e)=>{
            e.current?.click();
        }}> {musicname} </Input> */}
        <input
        ref={input_ref}
        type="file"
        id="input-file" 
        name="music" 
        onChange={(e)=>onChangeInputHandler(e)}/>
        <tr/>
        <UploadButton onClick={postHandler}>노래 업로드</UploadButton>
        </InputBox>
        </React.Fragment>
        </>
    );
};

const InputBox = styled.form`
width: 700px;
margin: 20px auto;
align-items: center;
text-align:center;
color:rgb(79, 188, 238);
// input[type="file"] {
//     position: absolute;
//     width: 0;
//     height: 0;
//     padding: 0;
//     margin: -1px;
//     overflow: hidden;
//     clip: rect(0, 0, 0, 0);
//     border: 0;
//   }
label{
    background-color : white;
    color: rgb(79, 188, 238);
    padding: 5px;
    margin: 20px 250px;
    border : 2px solid rgb(79, 188, 238);
    border-radius: 5px;
        &:hover{
    background-color: rgb(79, 188, 238);
    color: white;
}
}
` 


const Input = styled.input`
height: 30px;
width: 250px;
margin: 20px 250px;
border: 1px solid rgb(79, 188, 238);
border-radius: 5px;
`
const FileInput = styled.input`
background-color : white;
color: rgb(79, 188, 238);
padding: 5px;
margin: 20px 250px;
border : 2px solid rgb(79, 188, 238);
border-radius: 5px;
&:hover{
    background-color: rgb(79, 188, 238);
    color: white;
}
`

const UploadButton = styled.button`
background-color : white;
color: rgb(79, 188, 238);
padding: 5px;
margin: 20px 300px;
border : 2px solid rgb(79, 188, 238);
border-radius: 5px;
&:hover{
    background-color: rgb(79, 188, 238);
    color: white;
}
`

export default Upload;