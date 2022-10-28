// import Button from 'react-bootstrap/Button';
import { GoogleAuthProvider } from 'firebase/auth';
import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import { AuthContext } from '../contexts/AuthProvider';
import Carousel from 'react-bootstrap/Carousel';
import image01 from '../assets/images/image01.jpg'
import image02 from '../assets/images/image02.jpg'

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


             <div className="d-grid gap-2 mt-2">
                <Button variant="light" size="lg">
                    <FaFacebook /> Facebook
                </Button>
                <Button variant="light" size="lg">
                    <FaWhatsapp /> Whatsapp
                </Button>
                <Button variant="light" size="lg">
                    <FaTwitter /> Twitter
                </Button>
                <Button variant="light" size="lg">
                    <FaTwitch /> Twitch
                </Button>
                <Button variant="light" size="lg">
                    Vestibulum as acors
                </Button>
            </div>


            {/* Carousel */}

            <div>
                 <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image01}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image02}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image01}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            

        </div>
    );
};

export default RightSideaside;