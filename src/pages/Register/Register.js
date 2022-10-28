import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';


const Register = () => {

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const [cheacked, setCheacked] = useState(false)

    const { createUser, updateProfilePicture, verifyEmail} = useContext(AuthContext);


    const emailPasswordHanler = (event) => {
        
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imgURL = form.imgURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, imgURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setSuccess('Successfully');
                console.log(user);
                form.reset()
                updateProfile(name, imgURL);
                handleVerifyEmail()
                toast.success('Successfully Register!! But Second Step: Please Checked the email varify address',  {duration: 5000})
            })
            .catch((e) => {
                setError(e.message);
            })
    }


     const updateProfile = (name, imgURL) => {
        const profile = {
            displayName: name,
            photoURL: imgURL,

        }
       updateProfilePicture(profile)
   }


    const handleDisable = (event) => {
       setCheacked(event.target.checked);
    }


    // verifyEmail
    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.error(e))
    }





    return (
        <div>
            <Form onSubmit={emailPasswordHanler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                {/* imgURL */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name='imgURL' placeholder="Enter imgURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImageURL">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter password"  required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleDisable}
                        label={<>Accept<Link to="/terms">Terms and Condition</Link></>}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!cheacked}>
                         Submit
                </Button>
                <br></br>
                <Form.Text className="text-danger py-2">
                   {error}
                </Form.Text>
                
            </Form>
        </div>
    );
};

export default Register;