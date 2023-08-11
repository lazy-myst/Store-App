import { View, StyleSheet, Image, Text, TextInput, Pressable } from "react-native"
import GreenBtn from "../../components/GreenBtn"
import { useRef, useState } from 'react'
import HeroHeading from "../../components/HeroHeading"


function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const pwdInputref = useRef()

    const handleSubmit = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <View >
                    <HeroHeading mainSize={50} subSize={25} />
                </View>
                <View
                    style={styles.formContainer}>
                    <View style={styles.tInputSection}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Email"
                            placeholderTextColor={"#D4D3D3"}
                            autoFocus
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
                    {/*it'll be Pressable and Function for Forgot Password */}
                    <Text style={styles.ftPwdStyle}>Forgot Password ?</Text>
                    <View style={styles.loginbtn}>
                        <GreenBtn title='Sign In' func={handleSubmit} />
                    </View>
                    <View style={styles.regsTextContainer}>
                        <Text style={styles.regsText}>Dont have an account ? </Text>
                        <Text
                            style={[styles.regsText, { textDecorationLine: 'underline', fontWeight: 'bold' }]}
                            onPress={() => navigation.navigate('Signup')}
                        >
                            Register
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center'
    },
    headingContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: 80
    },
    formContainer: {
        marginTop: 70,
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
    ftPwdStyle: {
        color: '#024F9D',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'flex-start',
        marginVertical: 20,
        marginLeft: 5
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