import { useState } from 'react'
import { StyledButton } from './styles'
import RegistrationForm from '../../organisms/RegistrationForm/RegistrationForm'

const Button = () => {
    const [showForm, setShowForm] = useState(false);
    
    function toggleForm() {
        setShowForm(!showForm);
    }

    return (
        <div>
            <StyledButton onClick={toggleForm}>Customer registration</StyledButton>
            {showForm && (
                <RegistrationForm />
            )}
        </div>
    );
};

export default Button;