import React, {useContext} from "react";
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink} from "./styles/Common.styled";
import {Marginer} from "./marginer/index";
import { AccountContext } from "./styles/AccountContext";


function SignUpForm(){
    const {SwitchToSignIn} = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
     
                <Marginer direction="vertical" margin="1.5em" />
                <SubmitButton type="submit">Sign Up</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">Already have an account? <BoldLink href="#" onClick={SwitchToSignIn}>Sign In</BoldLink></MutedLink>

            </FormContainer>
        </BoxContainer>
    );
}

export default SignUpForm;