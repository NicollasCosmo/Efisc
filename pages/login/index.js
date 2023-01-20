import React from "react"
import Header from "../../componentes/Header"
import { KeyboardView, Title, Container, Input, ButtonSubmit, TextButton, TitleApp    } from "./style"

function Login() {

    return (
        <KeyboardView>
        <Header />
        <Container>
        
        <>
       <TitleApp>Efisc</TitleApp>
        </>
        <Title>Login-Efisc</Title>

        <Input 

        placeholderTextColor="#fff"
        placeholder="E-mail"
        
        />

        <Input
        placeholderTextColor="#fff"
        placeholder="Senha"
        secureTextEntry
        />

        <ButtonSubmit>

            <TextButton>Entrar</TextButton>

        </ButtonSubmit>
        
        </Container>
        

        </KeyboardView>
        
    )
}

export default Login