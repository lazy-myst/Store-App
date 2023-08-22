import { View, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView } from "react-native"
import GreenBtn from "../../components/GreenBtn"
import { useRef, useState } from 'react'
import HeroHeading from "../../components/HeroHeading"


function SignUpScreen({ navigation }) {
    const [name, setName] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const contactInputRef = useRef()
    const emailInputRef = useRef()
    const pwdInputref = useRef()

    const handleSubmit = () => {

    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior="position" style={styles.headingContainer}>
                <View >
                    <HeroHeading mainSize={50} subSize={25} />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.tInputSection}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setName(text)}
                            placeholder="Full Name"
                            placeholderTextColor={"#D4D3D3"}
                            autoFocus
                            returnKeyType="next"
                            onSubmitEditing={() => { contactInputRef.current.focus() }}
                        />
                        <Image
                            source={require("../../../assets/username_icon.png")}
                        />
                    </View>
                    <View style={styles.tInputSection}>
                        <TextInput
                            ref={contactInputRef}
                            style={styles.textInput}
                            onChangeText={(text) => setContactNo(text)}
                            placeholder="Contact"
                            placeholderTextColor={"#D4D3D3"}
                            returnKeyType="next"
                            onSubmitEditing={() => { emailInputRef.current.focus() }}
                        />
                        <Image
                            source={require("../../../assets/phone_icon.png")}
                        />
                    </View>
                    <View style={styles.tInputSection}>
                        <TextInput
                            ref={emailInputRef}
                            style={styles.textInput}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Email"
                            placeholderTextColor={"#D4D3D3"}
                            returnKeyType="next"
                            onSubmitEditing={() => { pwdInputref.current.focus() }}
                        />
                        <Image
                            source={require("../../../assets/email_icon.png")}
                        />
                    </View>
                    <View style={styles.tInputSection}>
                        <TextInput
                            ref={pwdInputref}
                            secureTextEntry={true}
                            style={styles.textInput}
                            onChangeText={(text) => setPassword(text)}
                            placeholder="Password"
                            placeholderTextColor={"#D4D3D3"}
                            returnKeyType="done"
                            onSubmitEditing={() => handleSubmit()}
                        />
                        <Image
                            source={require("../../../assets/password_icon.png")}
                        />
                    </View>
                    <View style={styles.loginbtn}>
                        <GreenBtn title='Sign Up' onPress={handleSubmit} />
                    </View>
                    <View style={styles.regsTextContainer}>
                        <Text style={styles.regsText}>Already have an account ? </Text>
                        <Text
                            style={[styles.regsText, { textDecorationLine: 'underline', fontWeight: 'bold' }]}
                            onPress={() => navigation.navigate('Login')}
                        >
                            Login
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headingContainer: {
        alignSelf: 'center',
        paddingTop: 80
    },
    formContainer: {
        marginTop: 60,
        alignSelf: 'center',
        width: '80%'
    },
    tInputSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D4D3D3',
        height: 40,
        marginVertical: 20
    },
    textInput: {
        height: 50,
        width: '90%',
        fontSize: 20,
        color: 'black'
    },
    loginbtn: {
        marginVertical: 30,
    },
    regsTextContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    regsText: {
        color: '#024F9D',
        fontWeight: '500',
        fontSize: 20
    }
})