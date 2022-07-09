import React, { useState } from 'react'
import { Col, Container, Form, Input, Label, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import Mcqs from '../Firebase/Add-Mcqs'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Addmcq() {

    let query = useQuery();

    const [mcq, setMcq] = useState("");
    const [mcqtag, setMcqTag] = useState("");
    const [Option1, setOption1] = useState("");
    const [Option2, setOption2] = useState("");
    const [Option3, setOption3] = useState("");
    const [Option4, setOption4] = useState("");
    const [message, setMessage] = useState({ state: false, msg: "" });

    const Topic = query.get("Topic");

    const AddMCQS = async (e) => {
        e.preventDefault();

        if( mcq === "" || Option1 === "" || Option2 === "" || Option3 === "" || Option4 === ""  || mcqtag === "")
        {
            setMessage({ state: true, msg: "All Fields are Manadatory!!" });
            return;
        }
        else{
            try{
                const newMcq = {
                    mcqtag,
                    mcq,
                    Option1,
                    Option2,
                    Option3,
                    Option4,
                };

                await Mcqs.addmcq(mcqtag, Topic, newMcq);
                setMessage({ state: false, msg: "Mcq Added Successfully!!" });
            }
            catch (err){
                setMessage({ state: true, msg: err.message });
            }

            setMcqTag("");
            setMcq("");
            setOption1("");
            setOption2("");
            setOption3("");
            setOption4("");
        }
    }

    return (
        <Container>

            {message?.msg && (<div class={message?.state ? "alert alert-dismissible fade show alert-danger" : " alert alert-dismissible fade show alert-success"} role="alert">
                <strong>{message?.msg}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>)}

            <Form onSubmit={AddMCQS}>
                <Row className=''>
                    <Col>
                        <h5 className='text-primary text-center'>Add Mcqs for {Topic} </h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Label>Mcq Title</Label>
                        <Input type='text' className='input' value={ mcqtag } onChange={ (e) => { setMcqTag(e.target.value) } }></Input> 
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Label>Mcq</Label>
                        <Input type='textarea' className='input' value={ mcq } onChange={ (e) => { setMcq(e.target.value) } }></Input> 
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col sm={6}>
                        <Label>Option1</Label>
                        <Input type='text' className='input' value={ Option1 } onChange={ (e) => { setOption1(e.target.value) } }></Input>
                    </Col>
                    <Col sm={6}>
                        <Label>Option2</Label>
                        <Input type='text' className='input' value={ Option2 } onChange={ (e) => { setOption2(e.target.value) } }></Input>
                    </Col>
                    <Col sm={6}>
                        <Label>Option3</Label>
                        <Input type='text' className='input' value={ Option3 } onChange={ (e) => { setOption3(e.target.value) } }></Input>
                    </Col>
                    <Col sm={6}>
                        <Label>Option4</Label>
                        <Input type='text' className='input' value={ Option4 } onChange={ (e) => { setOption4(e.target.value) } }></Input>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col>
                        <center>
                            <button className='btn btn-primary w-50'> Save </button>
                        </center>
                    </Col>
                </Row>
            </Form>

        </Container>
    )
}

export default Addmcq