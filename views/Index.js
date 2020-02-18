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
        TouchableHighlight
    } from 'react-native'
import { Header } from 'react-native-elements';

export default class Register extends Component {
    render() {
        return(
            <View style={styles.content} >  
            <Header header={style:{backgroundColor:'red'}}
                            leftComponent={{ icon: 'menu', color: '#fff' }}
                            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                            rightComponent={{ icon: 'home', color: '#fff' }}
                            />
                    <View style={styles.content_buttons}> 
                        <Button title="Login" style={styles.buttons_content}/>
                        
                    </View>
            </View>        
        )
    }
}

const styles = StyleSheet.create({
    content:{
    },
    content_buttons:{
        height:10,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40
    },
    header:{
        backgroundColor:'red'
    },
    buttons_content:{
        width:'70%',
        height:60,  
        marginTop: 20,
        margin:10,
    }
})