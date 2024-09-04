
import React, { useState } from 'react';
// import { Link,NavLink } from 'react-router-dom';
import {
    Container, Card, Label, NameLabel, NameInput, Button, Div2, LabelPassword,
    CardHeader, UserForm, LabelPortal, InputContainer, FooterLabel,
    Footer, LabelLogin,Color

} from './loginPage.style';

import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function onHandleClick() {
        console.log("I am click");
    
        const userData = {
            emailid:username, 
            password 
        };
    
        try {
            const response = await fetch("http://localhost:4000/loginpage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
    
            if (response.ok) {
                const result = await response.json();
                
                console.log(result);
                // Assuming the user ID is returned in the response as `userId`
                localStorage.setItem('userId', result.userdetail);
                localStorage.setItem('currentUserId',result.currentUserId)
                 // Save the user ID in localStorage
                
                navigate('/dashboard');
            } else {
                console.log("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }
    
    return (
        <>
            <Container >
                <Card>
                    <CardHeader>
                        <LabelLogin>Log in to your </LabelLogin>
                        <Label>BUZZINESS</Label>
                        <LabelPortal>Portal</LabelPortal>
                    </CardHeader>

                    <UserForm>

                        <InputContainer>
                            <Div2>
                                <NameLabel>Username</NameLabel>
                                {/* <LabelPassword><NavLink to="/forgetUsernamepage">Forget?</NavLink></LabelPassword> */}
                            </Div2>
                            
                            <NameInput
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(event) => {
                                    setUserName(event.target.value.trimStart());
                                }}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Div2>
                                <NameLabel>Password</NameLabel>
                                {/* <LabelPassword> <Link to="/forgetpasswordpage">Forget?</Link></LabelPassword> */}
                            </Div2>
                            <NameInput
                                type="password"
                                placeholder='Enter password'
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value.trimStart());
                                }}
                            />
                        </InputContainer>
                        <Footer>
                            <Button onClick={() => {
                                onHandleClick();
                            }}>Login</Button>
                            <FooterLabel>Don't have an Account?<Link to="/signup">Register?</Link></FooterLabel>
                        </Footer>

                    </UserForm>
                </Card>
            </Container>
        </>

    )
};

export default LoginPage;