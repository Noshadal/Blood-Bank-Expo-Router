<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    //   console.log("User signed in successfully!");
      router.push('(home)');
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://media1.giphy.com/media/B0WxCspNlzKIChtzGT/source.gif' }}
      style={styles.background}
      resizeMode="contain"
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
=======
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { auth, db } from "../../utils/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { router } from "expo-router";

export default function SignIn() {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
 
    function handleSignIn() {
        if(email!="" && password != "") {
            signInWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
                const user = userCredential.user;
                console.log("🚀 ~ .then ~ user:", user)
                router.push('/(drawer)/(tabs)/');
                alert("login done");
                await AsyncStorage.setItem("info", JSON.stringify(user.uid))
                await setDoc(doc(collection(db, "users"), user.uid), {
                    email: email,
                    uid: user.uid,
                });
                setEmail("")
                setPassword("")
            })
            .catch((error) => {
                console.log("🚀 ~ handleSignup ~ error:", error)
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        }else{
            alert("Please fill all the fields")
        }

    }
    return (
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
                    <Text style={styles.linkText} onPress={() => {/* Navigate to sign up */}}>
                        Create an account
                    </Text>
                </Text>
            </View>
        </ImageBackground>
    );
>>>>>>> 4b3fa6ffe269b206c66326a13fc8cb5cb1548045
}

const styles = StyleSheet.create({
  /* Style code here */
});
