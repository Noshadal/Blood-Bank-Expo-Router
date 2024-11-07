import { useState } from 'react';
import { ImageBackground, TouchableOpacityBase } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return (
        <View className='p-4 w-full items-center'>
            <Text className='text-2xl font-bold'>Donate blood</Text>
            <ImageBackground
                source={{ uri: 'https://media1.giphy.com/media/B0WxCspNlzKIChtzGT/source.gif' }} // Replace with your signup background image URL
                style={styles.background}
                resizeMode="contain"
            >
                <View style={styles.container}>
                    <Text style={styles.heading}>Welcome Back!</Text>
                    <Text style={styles.subheading}>Sign in to continue</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#B22222"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        value={email}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#B22222"
                        secureTextEntry
                        onChangeText={setPassword}
                        value={password}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <Text style={styles.footerText}>
                        New here?
                        <Text style={styles.linkText} onPress={() => {/* Navigate to sign up */ }}>
                            Create an account
                        </Text>
                    </Text>
                </View>
            </ImageBackground>
        </View>
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
        paddingVertical: 20,
        borderRadius: 15,
        marginHorizontal: 20,
    },
    heading: {
        fontSize: 32,
        color: '#B22222',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subheading: {
        fontSize: 16,
        color: '#B22222',
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
        color: '#B22222',
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
        color: '#B22222',
    },
    linkText: {
        color: '#8B0000',
        fontWeight: 'bold',
    },
});
