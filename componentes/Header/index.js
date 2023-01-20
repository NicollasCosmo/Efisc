import React from "react";
import { Image, StyleSheet,  } from "react-native";
import {Container, } from './style';
import Logo from '../../assets/Logo.png';





function Header() {
    
    return(
        <Container>

            <Image
            
            source={Logo} style={estilo.logoCrn}

            />
            
        
            
        </Container>

        
        

       
       
    )

}

//          width: 315,
//         height: 135,

const estilo = StyleSheet.create({

    logoCrn: {
        
        width: 215,
        height: 90,
       
    
    }
})



export default Header;