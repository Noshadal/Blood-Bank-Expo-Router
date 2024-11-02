import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";

export default function SignIn() {
    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1580281658628-bff44a11f0d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxibG9vZCUyMGRvbmF0aW9ufGVufDB8fHx8MTY3NzY1Mjc1Mw&ixlib=rb-1.2.1&q=80&w=1080' }}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.heading}>Welcome Back!</Text>
                <Text style={styles.subheading}>Sign in to continue</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#B22222"
                    keyboardType="email-address"
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#B22222"
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                
                <Text style={styles.footerText}>
                    New here?
                    <Text style={styles.linkText} onPress={() => {/* Navigate to sign up */}}>
                        {" "}Create an account
                    </Text>
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingVertical: 20,
        borderRadius: 15,
        marginHorizontal: 20,
    },
    heading: {
        fontSize: 32,
        color: '#8B0000',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subheading: {
        fontSize: 16,
        color: '#8B0000',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderColor: '#B22222',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        color: '#8B0000',
    },
    button: {
        backgroundColor: '#B22222',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerText: {
        fontSize: 14,
        color: '#8B0000',
    },
    linkText: {
        color: '#B22222',
        fontWeight: 'bold',
    },
});
