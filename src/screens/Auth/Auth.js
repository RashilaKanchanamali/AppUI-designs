import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, TextInput } from 'react-native';
import HeadingText from '../../screens/components/UI/HeadingText/HeadingText';
import Button from '../components/UI/Button/Button';


class AuthScreen extends Component {

    static Navigation ={
        tabBarVisible: false
    }

    render () {
        //let headingText = null;

        headingText1= (
            <HeadingText style={styles.textHeading}>One JIT</HeadingText>
        );

        return (
            <View style={styles.container}>
                {headingText1}
                    <View style={styles.container2}>
                        <Text style={styles.textSignIn}>Sign In</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                placeholder="Username"
                                style={styles.input}
                                />
                            </View>
                            <View>
                                <TextInput
                                placeholder="Password"
                                style={styles.input}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button>LOGIN</Button>
                            </View>
                            <View style={styles.wordContainer}>
                            <Text>Developed By Techsys</Text>
                            </View>
                    </View>
                   
            </View>
        );
    }
}

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        backgroundColor: "#778899",
        paddingTop: 20
    },
    container2: {
        paddingTop: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        width: 300,
        height: 400,
        alignItems: "center"
    },
    textSignIn: {
        fontSize: 23,
        color: "#9c27b0",
        paddingBottom: 50
    },
    input: {
        fontSize:15,
        backgroundColor: "#e6e6fa",
        borderRadius: 4,
        width: 250,
    },
    inputContainer: {
        padding: 10
    },
    buttonContainer: {
        paddingTop: 30,
        paddingBottom: 70
    }
})