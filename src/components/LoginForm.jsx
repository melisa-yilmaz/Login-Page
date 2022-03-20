import React, { useContext } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink} from "./styles/Common.styled";
import {Marginer} from "./marginer/index";
import { AccountContext } from "./styles/AccountContext";


function LoginForm(){
    const {SwitchToSignUp} = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#">Forget your password?</MutedLink>
                <Marginer direction="vertical" margin="1.5em" />
                <SubmitButton type="submit">Sign in</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">Don't have an account? <BoldLink href="#" onClick={SwitchToSignUp}> Sign Up </BoldLink></MutedLink>
            </FormContainer>
        </BoxContainer>
    );
}

export default LoginForm;