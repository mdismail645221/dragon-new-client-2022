import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider';
import {
    useNavigate,
    useLocation
} from "react-router-dom";
import toast from 'react-hot-toast';

const Login = () => {

    const [error, setError] = useState(null);

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const emailPasswordHanler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                toast.success('Successfully Login', {duration: 3000})
                const user = result.user;
                console.log(user)
                form.reset();
                setError('')
                navigate(from, { replace: true });
            })
            .catch(e => {
                setError(e.message)
            })
    }






    return (
        <Form onSubmit={emailPasswordHanler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <br></br>
            <Form.Text className="text-danger py-2">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;