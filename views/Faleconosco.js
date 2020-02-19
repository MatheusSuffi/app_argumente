import React, {Component, Fragment} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
        View,
        Text, 
        ImageBackground, 
        StyleSheet,
        TextInput,
        Image,
        Linking,
        Button,
        TouchableHighlight,
        TouchableWithoutFeedback
    } from 'react-native'

export default class Register extends Component {
    render() {
        return(
            <View style={styles.content} >  
                <View style={styles.header}>
                    <View style={styles.iconStart}>
                        <TouchableWithoutFeedback  onPress={()=>{}}>
                            <Icon name="chevron-left" size={40} color='#FFF' /> 
                        </TouchableWithoutFeedback>
                    </View>
                    <View >
                        <Text style={styles.contentTextHeader} >Fale Conosco</Text>
                    </View>

                </View>
                <View  style={styles.paddingTop}>

                </View>

                <View style={styles.content_buttons}> 
                    <TextInput
                        style={styles.textButton}
                        value={"Email: matheus_suffi@live.com"}
                        />  
                </View>

                <View style={styles.content_buttons}> 
                    <TouchableWithoutFeedback style={styles.content_buttons} onPress={()=>{}}>
                        <View >
                            <Icon style={styles.iconStart} name="sign-out" size={40} color='black' />
                            <Text style={styles.textButton} >Sair</Text>
                        </View>
                    </TouchableWithoutFeedback>  
                </View>


            </View>        
        )
    }
}

const styles = StyleSheet.create({
    content:{ //Style do content da pagina
        flex:1,
        width: '100%',
        height: '100%'
    },
    header:{ // Style do Header geral
        backgroundColor:'grey',
        width:'100%',
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        height:60
    },
    iconStart:{ // Style do Icone que fica no start do Header
        justifyContent: 'flex-start',
        position: 'absolute',
        left:0,
        marginLeft:5
        
    },
    contentTextHeader:{ // Style do Texto que fica no centro do header
        justifyContent: 'center',
        color:'white',
        textAlign:'center',
        alignSelf:'center',
        fontSize:20,
        fontFamily: "Arial",
    },
    headerButton:{ //Header de cada um dos botões que vão ficar no corpo da tela
        borderColor:'grey',
        borderWidth:1,
        borderRadius:10,
        width:'100%',
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },

    content_buttons_add:{ // Style dos botões (TouchableHightlight)
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
        borderRadius:10,
    },
    textButton:{ // Texto dos botões que vão ficar no corpo da tela
        color: 'black',
        marginLeft:40,
        fontSize: 20
    },
    paddingTop:{ // Texto dos botões que vão ficar no corpo da tela
        marginTop: 40
    }
    
})