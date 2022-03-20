import React, {useState} from "react";
import {StyledAccountBox,TopContainer,BackDrop, InnerContainer } from "./styles/AccountBox.styled";
import {HeaderContainer, HeaderText, SmallText} from "./styles/Header.styled";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { AccountContext } from "./styles/AccountContext";


const BackDropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)",
      },
      collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)",
      },
};
const expandingTransition = {
    type:"spring",
    duration: 2.3,
    stiffness: 30,
  
}


function AccountBox() {
    const [isExpanded, setExpanded] = useState(false);
    const [isActive, setActive] = useState("signin");

    const playAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
          setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const SwitchToSignUp = () => {
        playAnimation();
        setTimeout(() => {
            setActive("signup");
          }, 50);
    }

    const SwitchToSignIn = () => {
        playAnimation();
        setTimeout(() => {
            setActive("signin");
          }, 50);

    }

    const contextValue = {SwitchToSignUp, SwitchToSignIn};
    return ( 
        <AccountContext.Provider value={contextValue}>
            <StyledAccountBox>
                <TopContainer>
                    <BackDrop 
                        initial={false} 
                        animate={isExpanded ? "expanded" : "collapsed" } 
                        variants={BackDropVariants} 
                        transition={expandingTransition} />
                    {isActive === "signin" &&   <HeaderContainer>
                
                        <HeaderText>Welcome Back!</HeaderText>
                        <SmallText>Please sign in to continue</SmallText>
                    </HeaderContainer>}
                    {isActive === "signup" &&   <HeaderContainer>
                        <HeaderText>Create Account</HeaderText>
                        <SmallText>Please sign up to continue</SmallText>
            </HeaderContainer>}
                </TopContainer>
                <InnerContainer>
                    {isActive === "signin" && <LoginForm />}
                    {isActive === "signup" && <SignUpForm />}
                </InnerContainer>
            </StyledAccountBox>
        </AccountContext.Provider>
            );
}
export default AccountBox;