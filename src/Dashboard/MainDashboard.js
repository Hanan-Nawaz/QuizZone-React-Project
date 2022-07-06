import React, { useEffect, useState } from 'react'
import HeaderDashboard from './HeaderDashboard'
import { Route, Routes, useLocation } from 'react-router-dom'
import SignIn from '../Components/SignIn'
import FooterDashboard from './FooterDashboard'
import AddTopics from './Add-Topics'
import getUsers from '../Firebase/SignIn'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function MainDashboard() {

    let query = useQuery();
    var Email = query.get("Email");
    var ID = query.get("ID");
    var LVL = query.get("lvl");
    const [message, SetMessage] = useState({ error: false, msg: "" });

    useEffect(
        () => {
            const HandleSubmit = async () => {
                try {
                    const docSnap = await getUsers.getuser(Email);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        if (Email === data.Email) {
                            if( ID === data.ID){
                                SetMessage({ error: false, msg: " " });
                            }
                            else{
                                SetMessage({ error: true, msg: "doesn't found" });
                                window.location.href = "/dashboard-error";  
                            }
                        }
                        else {
                            SetMessage({ error: true, msg: "doesn't found" });
                            window.location.href = "/dashboard-error";
                        }
                    }
                    else {
                        SetMessage({ error: true, msg: "doesn't found" });
                        window.location.href = "/dashboard-error";
                    }
                } catch (err) {
                    SetMessage({ error: true, msg: err.message });
                }


            }
            HandleSubmit();

        }, [Email , ID]


    )

    if (Email === null && ID === null) {
        SetMessage({ error: true, msg: "User doesn't found" });
        window.location.href = "/dashboard-error";
    }
    else {

        if (message?.error) {

        }
        else {

            return (

                <>
                    <HeaderDashboard Email={Email} ID={ID} LVL={LVL} />

                    <div className='bodydashboard'>

                        <Routes>
                            <Route path="/add-topics" element={<AddTopics />}></Route>
                            <Route path='/signin' element={<SignIn />}></Route>
                        </Routes>
                        <FooterDashboard />
                    </div>
                </>
            )
        }
    }
}

export default MainDashboard