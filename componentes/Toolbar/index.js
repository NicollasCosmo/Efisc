import React from "react";
import  {View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { TitleUser, BotaoMenu, PosicaoBotaoMenu, Topo   } from "./style";



export default function TooBar() {
    return (
        <Topo>

            <View>
                 <TitleUser>Olá Nicollas</TitleUser>
            </View>
           
           <PosicaoBotaoMenu>
                <BotaoMenu/>
                <BotaoMenu/>
                <BotaoMenu/>
           </PosicaoBotaoMenu>

                
           
        </Topo>

       
    )
}