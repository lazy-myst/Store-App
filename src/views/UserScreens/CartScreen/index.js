import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native'
import { useState, useRef } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import CartItem from '../../../components/UserComponents/CartItems'
import GreenBtn from '../../../components/GreenBtn'

function CartScreen() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [address, setAddress] = useState("")

    const emailInputRef = useRef()
    const contactInputRef = useRef()
    const addressInputref = useRef()

    const placeOrder = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.upperSection}>
                <View style={styles.userIconContainer}>
                    <View style={styles.userImgBorder}>
                        <Image
                            style={styles.userImg}
                            source={require('../../../../assets/usericon.png')} />
                    </View>
                </View>
                <View style={styles.headingContainer}>
                    <View style={styles.headingText}>
                        <Text style={styles.headingTxt}>Shopping</Text>
                        <Text style={styles.subHeadingTxt}>Cart</Text>
                    </View>
                    <View>
                        <EvilIcons name='trash' color='#61B846' size={35} />
                    </View>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        {/* items will be mapped here */}
                        <CartItem name='Item Name' price={50} />
                    </ScrollView>
                </View>
            </View>
            <View style={styles.lowerSection}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.priceText}>Rs 185.00</Text>
                </View>
                <ScrollView
                    contentContainerStyle={{ flex: 1, minHeight: 300 }}
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => setName(text)}
                            placeholder="Full Name"
                            placeholderTextColor={"#D4D3D3"}
                            returnKeyType="next"
                            onSubmitEditing={() => { emailInputRef.current.focus() }}
                        />
                        <TextInput
                            ref={emailInputRef}
                            style={styles.textInput}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Email"
                            placeholderTextColor={"#D4D3D3"}
                            returnKeyType="next"
                            onSubmitEditing={() => { contactInputRef.current.focus() }}
                        />
                        <TextInput
                            ref={contactInputRef}
                            style={styles.textInput}
                            onChangeText={(text) => setContactNo(text)}
                            placeholder="Phone Number"
                            placeholderTextColor={"#D4D3D3"}
                            returnKeyType="next"
                            onSubmitEditing={() => { addressInputref.current.focus() }}
                        />
                        <TextInput
                            ref={addressInputref}
                            style={[styles.textInput, { flex: 2 }]}
                            onChangeText={(text) => setAddress(text)}
                            placeholder="Shipping Address"
                            placeholderTextColor={"#D4D3D3"}
                            returnKeyType="done"
                            onSubmitEditing={() => placeOrder()}
                        />
                        <View style={styles.orderBtn}>
                            <GreenBtn
                                title='Place Order'
                                onPress={placeOrder()} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    upperSection: {
        flex: 2,
        paddingTop: 15,
    },
    lowerSection: {
        flex: 2,
        paddingHorizontal: 20
    },
    userIconContainer: {
        width: '100%',
        alignItems: 'flex-end'
    },
    userImgBorder: {
        borderRadius: 50,
        borderColor: '#61B846',
        borderWidth: 2,
        padding: 1
    },
    userImg: {
        height: 30,
        width: 30,
    },
    headingContainer: {
        width: '100%',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5
    },
    headingTxt: {
        fontSize: 30,
        fontWeight: '500',
        color: '#024F9D'
    },
    subHeadingTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#61B846'
    },
    scrollContainer: {
        paddingTop: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        flex: 1,
        borderColor: '#bfbcbc'
    },
    totalContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    totalText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    priceText: {
        color: '#61B846',
        fontWeight: 'bold',
        fontSize: 20
    },
    formContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-around',
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#D4D3D3',
        width: '80%',
        fontSize: 20,
        color: 'black'
    },
    orderBtn: {
        paddingVertical: 15
    }
})