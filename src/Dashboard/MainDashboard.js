import React, { useEffect, useState } from 'react'
import HeaderDashboard from './HeaderDashboard'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import SignIn from '../Components/SignIn'
import FooterDashboard from './FooterDashboard'
import AddTopics from './Add-Topics'
import getUsers from '../Firebase/SignIn'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function MainDashboard() {
    let navigate = useNavigate();
    let query = useQuery();
    var Email = query.get("Email");
    const [message, SetMessage] = useState({ error: false, msg: "" });

    useEffect(
        () => {
            const HandleSubmit = async () => {
                try {
                    const docSnap = await getUsers.getuser(Email);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        if (Email === data.Email) {
                            console.log(data);
                            SetMessage({ error: false, msg: " " });
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

        }, [Email, message, navigate]


    )






    if (Email === null) {
        SetMessage({ error: true, msg: "User doesn't found" });
        window.location.href = "/dashboard-error";
    }
    else {

        if (message?.error) {

        }
        else {
    
            return (

                <>
                    <HeaderDashboard />

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