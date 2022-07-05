import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg } from "reactstrap";
import Topics from '../Firebase/Topics'

function Cards() {

    const [data, SetData] = useState([]);
    const [loading, SetLoading] = useState({ status: false });

    useEffect(() => {
        SetLoading({ status: true });
        HandleSubmit();
    }, []);

    const HandleSubmit = async () => {
        const docSnap = await Topics.getTopics();
        console.log(docSnap.docs);
        SetData(docSnap.docs.map((doc) => (
            {
                ...doc.data(), id: doc.id
            }
        )))

        SetLoading({ status: false });

    }

    return (
        <>
            <div className="container">

                <div className="row">

                    <div className="col-12">
                        <h3 className="text-center border-dark border-bottom mt-5 mb-5">Test Your Skill</h3>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <center>
                            {loading?.status ? <button class="btn btn-primary w-50 h1" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                                : <></>
                            }
                        </center>
                    </div>
                </div>

                <div className="row mb-5">

                    {data.map((doc) => {

                        return (

                            <div key={doc.id} className="col-12 col-md-3 p-1">

                                <Card className='border border-primary'>
                                    <Link to={`/quiz/${doc.id}`} >
                                        <CardImg width="300px" src={doc.Image} height='300px' alt={doc.Name} />
                                    </Link>
                                </Card>
                            </div>

                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default Cards