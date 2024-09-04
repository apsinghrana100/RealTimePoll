import React, { useState } from 'react';
import {
    Container, Card, Label, Button, Div2, CardHeader, UserForm,
    LabelPortal, InputContainer, Footer, LabelLogin, LabelRegistration,
    NameInput, FooterLabel
} from './signin.style';
import { Link } from 'react-router-dom';

const SignUpPageComponent = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function onHandleClick() {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const userData = {
            username,
            email,
            password,
        };

        try {
            const response = await fetch("http://localhost:4000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Signup successful:", result);
                // Redirect to login or dashboard, or show success message
            } else {
                const errorData = await response.json();
                console.error("Signup failed:", errorData);
                alert("Signup failed: " + errorData.msg); // Display error message
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <>
            <Container>
                <Card>
                    <CardHeader>
                        <LabelLogin>Let's Sign-Up</LabelLogin>
                        <Label>BUZZINESS</Label>
                        <LabelPortal>Portal</LabelPortal>
                    </CardHeader>

                    <UserForm>
                        <InputContainer>
                            <Div2>
                                <LabelRegistration>Username</LabelRegistration>
                            </Div2>
                            <NameInput
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(event) => setUserName(event.target.value.trimStart())}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Div2>
                                <LabelRegistration>User-Email</LabelRegistration>
                            </Div2>
                            <NameInput
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value.trimStart())}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Div2>
                                <LabelRegistration>Password</LabelRegistration>
                            </Div2>
                            <NameInput
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value.trimStart())}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Div2>
                                <LabelRegistration>Confirm-Password</LabelRegistration>
                            </Div2>
                            <NameInput
                                type="password"
                                placeholder="Enter Confirm password"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value.trimStart())}
                            />
                        </InputContainer>

                        <Footer>
                            <Button onClick={onHandleClick}>SignUp</Button>
                            <FooterLabel>Have an Account?<Link to="/loginpage"> Login?</Link></FooterLabel>
                        </Footer>
                    </UserForm>
                </Card>
            </Container>
        </>
    );
};

export default SignUpPageComponent;
