import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Card, Container, CardImg, CardTitle, CardBody, CardText } from 'reactstrap'
import Topics from '../Firebase/Topics'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Topicslist() {

    const [data, setData] = useState([]);
    const [lvl, setLvl] = useState({ status : false});
    let query = useQuery();

    const Email = query.get("Email");
    const ID = query.get("ID");
    const LVL = query.get("lvl");
   

    useEffect(() => {
        const getData = async () => {
            const docSnap = await Topics.getTopics();

            setData(docSnap.docs.map((doc) => (
                {
                    ...doc.data(), id: doc.id
                })))
                
                if(LVL === '1'){
                    setLvl({ status: true});
                }
            
        };

        getData();
    }, [LVL])

  return (
    <Container>
        <div className="row">

<div className="col-12">
    <h3 className="text-center text-dark mt-1 mb-2"><i className='fa fa-list'></i> Topic List</h3>
</div>
</div>
            <div className="row mb-5">

{data.map((doc) => {

    return (

        <div key={doc.id} className="col-12 col-md-4 p-1">

            <Card className='border border-primary'>
                    <CardImg width="300px" src={doc.Image} height='300px' alt={doc.Name} />
                            <CardTitle className='text-center h4  text-primary' >{doc.Name}</CardTitle>
                            <CardBody className=''>
                            <CardText className=' d-inline-block h5 text-primary' ><Link className='nav-link text-success ' to={`/take-test?Email=${Email}&ID=${ID}&lvl=${1}&Topic=${doc.id}&Test=1`}> Take Test</Link></CardText>
                                    { lvl?.status ?  
                                <CardText className='d-inline-block h5 float-right text-success ' ><Link className='nav-link text-secondary ' to={`/add-mcqs?Email=${Email}&ID=${ID}&lvl=${1}&Topic=${doc.id}`}> Add Mcqs</Link></CardText>
                                :
                                <></>    
                                }
                            </CardBody>
            </Card>
        </div>

    )
})}

</div>
    </Container>
  )
}

export default Topicslist