import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color: #000000a7;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 600px;
    height: 600px;
    background-color: #353535;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
`;
const Close = styled.div`
    position: absolute;
    top: 10px;
    right:10px;
    cursor: pointer;
`;
const Title = styled.h1`text-align: center;`;

const Input = styled.input`
    border: 3px wheat;
    color: wheat;
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
`;
const Desc = styled.textarea`
    border: 1px black;
    color: white;
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
`;
const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: grey;
    color: wheat;
`;
const Label = styled.label`
    font-size:14px;
    margin-bottom:-20px;
`;


const Upload = ({setOpen}) => {
  return (
    <Container>
        <Wrapper>
            <Close onClick={() => setOpen(false)}>X</Close>
            <Title>Upload Video</Title>
            <Label>Upload Video file</Label>
            <Input type="file" accept='video/*'/>
            <Input type="text" placeholder='Title'/>
            <Desc placeholder='Description' rows={8}/>
            <Input type="text" placeholder='Seperate the domain names with commas'/>
            <Label>Upload Thumbnail Image</Label>
            <Input type="file" accept='image/*'/>
            <Button>Upload</Button>
        </Wrapper>
    </Container>
  )
}

export default Upload;