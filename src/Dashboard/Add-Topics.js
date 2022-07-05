import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'reactstrap'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../Firebase/Firebase-Services'
import Topics from '../Firebase/Topics';

function AddTopics() {

  const [Name, SetName] = useState("");
  const [Image, SetUrl] = useState("");
  const [message, SetMessage] = useState({ error: false, msg: "" });

  const [isfile, setFile] = useState(null);
  const handleImageAsFile = (e) => {
    document.getElementById('picname').innerText = isfile.name;
    setFile(e.target.files[0]);
  }

  const addlist = async (event) => {
    try {
      event.preventDefault();
      let file = isfile;

      var storagePath = 'uploads/' + file.name;

      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', (snapshot) => {
        // progrss function ....
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
        (err) => {
          // error function ....
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            SetUrl(downloadURL);
          });
        });

       

    } catch (err) { 
      SetMessage({ error: true, msg: err.message  });

    }
    console.log(Image);

     const url = `https://firebasestorage.googleapis.com/v0/b/quizzone-limited.appspot.com/o/uploads%2F${isfile.name}?alt=media&token=fb1068ae-f025-4436-acc7-8ae93ac95d42`


    const newTopic = {
      Image: url,
      Name: Name,
    };

    await Topics.addtopic(Name, newTopic);

    SetMessage({ error: false, msg: "Topic Added Successfully!!" });
    setFile(null);
    SetName("");
    SetUrl("");
  }

  return (
    <Container>

{message?.msg && (<div class={ message?.error ? "alert alert-dismissible fade show alert-danger" : " alert alert-dismissible fade show alert-success" } role="alert">
  <strong>{message?.msg}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>) }

      <Row>
        <Col>
          <h3 className='text-center mt-2 mb-5'> <i className='fa fa-plus'></i> Add Topics</h3>
        </Col>
      </Row>
      <Form onSubmit={addlist}>

        <Row className='mb-5'>
          <Col sm={6} className='mt-3'>
            <div class="custom-file">
              <input type="text" class="form-control" id="validationTooltip01" placeholder="Name of Language"
              value={Name} onChange={ (e) => { SetName(e.target.value) } }
              required />
            </div>
          </Col>
          <Col sm={6} className='mt-3'>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="validatedCustomFile" onChange={handleImageAsFile} required />
              <label class="custom-file-label" id='picname' for="validatedCustomFile">Choose Image File</label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <center>
              <button className=' btn btn-primary w-50 mb-5 '>Add</button>
            </center>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default AddTopics