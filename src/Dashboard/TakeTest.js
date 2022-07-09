import { doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Col, Container, Label, Row } from 'reactstrap'
import Mcqs from '../Firebase/Add-Mcqs';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function TakeTest() {

    let query = useQuery();
    // const Email = query.get("Email");
    // const ID = query.get("ID");
    // const LVL = query.get("lvl");
    const Topic = query.get("Topic");
    const [data, setData] = useState([]);

    useEffect(() => {
        const getallMcqs = async () => {
            const docSnap = await Mcqs.getmcqs(Topic);
            setData(docSnap.docs.map((doc) => (
                {
                ...doc.data(),  id: doc.id
            })))

        }

        getallMcqs();
    })

  return (
    <Container>
        <Row>
            <Col>
                <h5 className=' text-center text-primary'> Test for { Topic } </h5>
            </Col>
        </Row>

        {data.map((doc,index) => {
            return(
                <div className='container' key={doc.id}>
                    
                <Row>
                    <Col>
                        <Label className='text-primary h6' > Question:{index+1}</Label>
                        <h4> {doc.mcq} </h4>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        {doc.Option1}
                    </label>
                    </div>
                    </Col>
                    <Col sm={6}>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label" for="flexRadioDefault2">
                    {doc.Option2}
                    </label>
                    </div>
                    </Col>
                    <Col sm={6}>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                    <label class="form-check-label" for="flexRadioDefault2">
                    {doc.Option3}
                    </label>
                    </div>
                    </Col>
                    <Col sm={6}>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                    <label class="form-check-label" for="flexRadioDefault2">
                    {doc.Option4}
                    </label>
                    </div>
                    </Col>
                </Row>
            </div>
           
        
            )
        })}
    </Container>
  )
}

export default TakeTest