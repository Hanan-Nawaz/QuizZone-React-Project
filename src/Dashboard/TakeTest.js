import { doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Col, Container, Label, Row } from 'reactstrap'
import Mcqs from '../Firebase/Add-Mcqs';
import Results from '../Firebase/Results'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function TakeTest() {

    let query = useQuery();
    const Email = query.get("Email");
    const ID = query.get("ID");
    const LVL = query.get("lvl");
    const Topic = query.get("Topic");
    const [data, setData] = useState([]);
    const [question, setQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [Answer, setAnswer] = useState("");
    const [Id, setId] = useState("");

    const url = `?Email=${Email}&ID=${ID}&lvl=${LVL}&Topic=${Topic}`;

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

        const CheckAnswer = async (e) => {
            e.preventDefault();

            const tag = document.getElementById('docid');
            setId(tag.innerText);

            if(Answer === ""){
                return(
                    <Container>
                        <Row>
                            <Col>
                                <alert class='text-warning bg-danger'>Please Select one Option!!!</alert>
                            </Col>
                        </Row>
                    </Container>
                )
            }
            else{
                const docSnap = await Mcqs.getmcq(Topic, Id);
                if(docSnap.exists()){
                    const data = docSnap.data();
    
                        if(data.correctOption === Answer){
                            setScore(score + 1);
                            console.log(score);
                        }
                        else{
                            setScore(score);
                        }      
                }
                else{
                    console.log("Not Found");
                }
    
                setQuestion(question + 1);
            }

            
        }

  return (
    <Container>
        <Row>
            <Col>
                <h5 className=' text-center text-primary'> Test for { Topic } </h5>
            </Col>
        </Row>

        {data.map((doc,index) => {
            if(question === index){
            return(
                <div className='container' key={doc.id}>
                    
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                <Row>
                    <Col sm={9}>
                        <Label className='text-primary h6 ' > Question:{index+1}</Label>
                        <h4 className=''> {doc.mcq} </h4>
                    </Col>
                    <Col sm={3}>
                    <Label className='text-success h6 float-right ml-2' id='docid' value={doc.id} onChange={(e) => setId(e.target.value)}> {doc.id} </Label> <Label className='text-success h6 float-right' > Tag: </Label> 
                    </Col>
                    
                </Row>
                <Row>
                    <Col sm={6}>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id={`${doc.Option1}`} value={`${doc.Option1}`} onChange={ (e) => { setAnswer(e.target.value) } } />
                    <label class="form-check-label" for={`${doc.Option1}`}>
                        {doc.Option1}
                    </label>
                    </div>
                    </Col>
                    <Col sm={6}>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id={`${doc.Option2}`} value={`${doc.Option2}`} onChange={ (e) => { setAnswer(e.target.value) } }/>
                    <label class="form-check-label" for={`${doc.Option2}`}>
                    {doc.Option2}
                    </label>
                    </div>
                    </Col>
                    <Col sm={6}>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id={`${doc.Option3}`} value={`${doc.Option3}`} onChange={ (e) => { setAnswer(e.target.value) } }/>
                    <label class="form-check-label" for={`${doc.Option3}`}>
                    {doc.Option3}
                    </label>
                    </div>
                    </Col>
                    <Col sm={6}>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id={`${doc.Option4}`} value={`${doc.Option4}`} onChange={ (e) => { setAnswer(e.target.value) } }/>
                    <label class="form-check-label" for={`${doc.Option4}`}>
                    {doc.Option4}
                    </label>
                    </div>
                    </Col>
                </Row>

                <Row className='mb-5 mt-5'>
                    <Col>
                        <center>
                            <button className='btn btn-primary w-50' onClick={CheckAnswer}> Next &raquo;</button>
                        </center>
                    </Col>
                </Row>

               
            </div>
           
        
            )
        }
        else
        {
            const newResult = {
                Email,
                Topic,
                score,
                question,
            }

             Results.addResult(Email, Topic, newResult);
                return(
                <>
             
                    <Row className='mb-5 mt-5'>
                        <Col>
                        <center>
                            <alert class={ score > 7 ? 'alert bg-success text-white' : 'alert bg-danger text-warning'}>(After Completion!! OtherWise You Fail) For Result . Please Click here <Link to={`/results${url}`} className='error btn'> Result </Link></alert>
                        </center>
                        </Col>
                    </Row>
                    
            
            </>

            )
        }
        })}
    </Container>
  )
}

export default TakeTest