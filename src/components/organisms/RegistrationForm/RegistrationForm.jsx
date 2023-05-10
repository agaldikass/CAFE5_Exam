
import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledForm, StyledLabel, StyledInput, StyledButton, StyledFormContainer, StyledBtnContainer,StyledContainer } from './styles'
import UserList from "../../molecules/UserList";


function RegistrationForm() {
    const [registration, setRegistration] = useState({
        name: "",
        surname: "",
        email: "",
        age: "",

    });

    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {

        axios
            .get("http://localhost:3000/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => console.log(error));
    }, []);


    function toggleForm() {
        setShowForm(!showForm);
        setFormSubmitted(false);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:3000/users", registration)
            .then((response) => {
                const newUser = response.data;
                setUsers([...users, newUser]);
                localStorage.setItem("userId", newUser.id);
                setRegistration({
                    name: "",
                    surname: "",
                    email: "",
                    age: "",
                });
                setFormSubmitted(true);

            })
            .catch((error) => console.log(error));

    };


    return (

    <StyledContainer>
        <StyledFormContainer>
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel>
                    Name:
                    <StyledInput
                        type="text"
                        value={registration.name}
                        onChange={(e) =>
                            setRegistration((prevState) => ({
                                ...prevState,
                                name: e.target.value,
                            }))
                        }
                        required
                    />
                </StyledLabel>
                <StyledLabel>
                    Surname:
                    <StyledInput
                        type="text"
                        value={registration.surname}
                        onChange={(e) =>
                            setRegistration((prevState) => ({
                                ...prevState,
                                surname: e.target.value,
                            }))
                        }
                        required
                    />
                </StyledLabel>
                <StyledLabel>
                    Email:
                    <StyledInput
                        type="email"
                        value={registration.email}
                        onChange={(e) =>
                            setRegistration((prevState) => ({
                                ...prevState,
                                email: e.target.value,
                            }))
                        }
                        required
                    />
                </StyledLabel>
                <StyledLabel>
                    Age:
                    <StyledInput
                        type="number"
                        value={registration.age}
                        onChange={(e) =>
                            setRegistration((prevState) => ({
                                ...prevState,
                                age: e.target.value,
                            }))
                        }
                        required
                    />
                </StyledLabel>
                <StyledBtnContainer>
                    <StyledButton onClick={toggleForm}>Register</StyledButton>
                </StyledBtnContainer>
            </StyledForm>
        </StyledFormContainer>

            <div>{formSubmitted && (
                <UserList users={users} />

                )}
            </div>

    </StyledContainer>

    );
}

export default RegistrationForm;