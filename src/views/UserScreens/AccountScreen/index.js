import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native'
import { useState, useRef } from 'react'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import CartItem from '../../../components/UserComponents/CartItems'
import GreenBtn from '../../../components/GreenBtn'

function CartScreen() {

    const [name, setName] = useState("")

    const updateName = () => {

    }

    const logoutHandler = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.upperSection}>
                <Text style={styles.mainHeading}>Settings</Text>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={require('../../../../assets/usericon.png')} />
                </View>
                <View style={styles.nameContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => setName(text)}
                        placeholder="Update Full Name"
                        placeholderTextColor={"#D4D3D3"}
                        returnKeyType="done"
                        onSubmitEditing={() => updateName()}
                    />
                    <AntDesignIcons name='check' color='#61B846' size={20} style={styles.checkBtn} />
                </View>
            </View>
            <View style={styles.lowerSection}>
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
        flex: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        width: '100%'
    },
    lowerSection: {
        flex: 3,
        paddingHorizontal: 20
    },
    mainHeading: {
        color: '#024F9D',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 20
    },
    imgContainer: {
        height: 130,
        width: 130,
        borderRadius: 50,
        padding: 5,
        borderColor: '#61B846'
    },
    img: {
        objectFit: 'fill'
    },
    nameContainer: {
        width: '70%',
        flexDirection: 'row',
        borderBottomColor: '#bfbcbc',
        borderBottomWidth: 1,
        justifyContent: 'center',
        paddingTop: 10,
        alignItems: 'center'
    },
    textInput: {
        width: '70%',
        fontSize: 20,
        color: 'black'
    },
    checkBtn: {
        width: '10%',
    }
})