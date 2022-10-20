// import Button from 'react-bootstrap/Button';
import { GoogleAuthProvider } from 'firebase/auth';
import React, {useContext} from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../contexts/AuthProvider';

const RightSideaside = () => {

    const { googleSignInPopUp } = useContext(AuthContext);

    const googleProvder = new GoogleAuthProvider();

    // google Sign In fun
    const handleGoogleSign = () => {
        googleSignInPopUp(googleProvder)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
            console.error(error)
        })
    }

    return (
        <div>
            RightSideaside

            <div className="googleAndGithubSignIn d-flex align-items-center flex-column">
                <button onClick={handleGoogleSign} className='w-100 btn btn-outline-primary my-3'>
                    <FaGoogle className='text-danger fw-bold fs-4' /> GOOGLE Sign In
                </button>
                <button className='w-100 btn btn-outline-primary  '>
                    <FaGithub className='text-dark fw-bold fs-4'  /> GitHub Sign In
                </button>
            </div>

        </div>
    );
};

export default RightSideaside;