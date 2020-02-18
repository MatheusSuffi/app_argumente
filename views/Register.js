import React, {Component} from 'react'
import {
        View,
        Text, 
        ImageBackground, 
        StyleSheet,
        TextInput,
        Image,
        Linking,
        Button,
        TouchableHighlight
    } from 'react-native'

export default class Login extends Component {
    render() {
        return(
            <ImageBackground source={require('../assets/imgs/login.jpg')} style={styles.imageLogin}>
                <View style={styles.content} >                       
                    <Image source={require('../assets/imgs/logo_argumente.png')} style={styles.logo}/> 
                    <TextInput placeholder="Nome" style={styles.textFields} />          
                    <TextInput placeholder="Sobrenome" style={styles.textFields}/>
                    <TextInput placeholder="Usuario (Login)" style={styles.textFields}/>
                    <TextInput placeholder="Senha" style={styles.textFields}/>
                    <TextInput placeholder="E-Mail" style={styles.textFields}/>
                    <TextInput placeholder="Código de acesso" style={styles.textFields}/>
                    <TouchableHighlight style={styles.buttons}>
                        <Button title="Registre-se" />
                    </TouchableHighlight>
                </View>        
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imageLogin:{
        flex:1,
        width:null,
        height: null
    },content:{
        flex: 1, 
        alignItems: 'center', 
        marginTop: 10
    },textFields:{
        backgroundColor: '#AAA',
        width:'70%',
        height:40,
        marginTop: 20
    },
    logo:{
        marginTop:20,
        marginBottom:30,
        width:170,
        height:150
    },
    link:{
        color:'blue',
        width:'70%',
        textAlign: 'right',
        fontSize: 20
    },buttons:{
        width:'70%',
        height:40,
        marginTop: 20
    }
})