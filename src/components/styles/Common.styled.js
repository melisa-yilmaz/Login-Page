import styled from "styled-components";

export const BoxContainer = styled.div`

    width: 90%;
    display: flex;
    padding: 0px 40px;
    padding-bottom: 50px;
    flex-direction: column;
    align-items: center;
    margin-top: -15px;
`
export const FormContainer = styled.form`

    width: 80%
    flex-direction: column;

`;

export const MutedLink = styled.a`
    font-size: 12px;
    color: rgba(200,200,200, 0.8);
    font-weight: 500;
    padding: 0 35px;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

`;

export const BoldLink = styled.a`
    font-size: 12px;
    color:rgba(252,70,107,1);
    font-weight: 500;
    text-decoration: none;
`;

export const Input = styled.input` 

    width: 80%;
    height: 45px;
    outline: none;
    border: 1px solid rgba(200,200,200,0.4);
    padding: 0px 15px;
    box-sizing: border-box;
    border-bottom: 1.3px solid rgba(200,200,200,0.4);
    transition: all, 200ms ease-in-out;

    &:placeholder {
        color: rgba(200,200,200, 1);
    }

    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200,200,200,0.4);
    }


    &:focus {
       outline: none;
       border-bottom: 2px solid rgb(63,94,251);
    } 

`;

export const SubmitButton = styled.button`
    width: 80%;
    padding: 10px 30px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 15px 15px 15px 15px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 18%, rgba(252,70,107,1) 75%);

    &:hover {
        filter: brighntness(1.03);
    }
`;