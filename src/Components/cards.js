import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg } from "reactstrap";


function RenderCards({ topics }) {
    return (
        <Card>
            <Link to={`/quiz/${topics.id}`} >
                <CardImg width="300px" src={topics.image} height='300px' alt={topics.name} />
            </Link>
        </Card>
    )
}

const cards = (props) => {

    const card = props.topics.map((topics) => {
        return (
            <div key={topics.id} className="col-12 col-md-3 p-1">

                <RenderCards topics={topics} />
            </div>
        )
    });

    return (
        <>



            <div className="container">
               
                <div className="row">

                    <div className="col-12">
                        <h3 className="text-center border-dark border-bottom mt-5 mb-5">Test Your Skill</h3>
                    </div>
                </div>

                <div className="row mb-5">
                    {card}
                </div>
            </div>

        </>
    )
}

export default cards