import React, {useState} from "react";
import  {View, Text, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { TitleUser, BotaoMenu, PosicaoBotaoMenu, Topo   } from "./style";


// Obs: {props.user_name.split(' ')[0]} >> Pega apenas a primeira posição do nome
export default function ToolBar(props) {
    const [ModalVisible, setModalVisible]=useState(false);

    return (
        <Topo>
            <Modal transparent visible={ModalVisible}>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <Text>Menu</Text>
                </View>
            </Modal>

            <View>                  
                 <TitleUser>Olá {props.user_name.split(' ')[0]}</TitleUser> 
            </View>
           
           <PosicaoBotaoMenu >
                <BotaoMenu/>
                <BotaoMenu/>
                <BotaoMenu/>
           </PosicaoBotaoMenu>

                
           
        </Topo>

       
    )
}