import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native'
import { useState, useRef } from 'react'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import CartItem from '../../../components/UserComponents/CartItems'
import GreenBtn from '../../../components/GreenBtn'
import OrderItem from '../../../components/UserComponents/OrderItem'

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
                <View style={styles.orderTextContainer}>
                    <Text style={styles.orderText}>Orders</Text>
                </View>
                <View style={styles.orderScrollContainer}>
                    <ScrollView contentContainerStyle={styles.orderScroll}>
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                    </ScrollView>
                </View>
                <View style={styles.logoutBtnContainer}>
                    <GreenBtn title='logout' onPress={logoutHandler()} />
                </View>
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
        paddingHorizontal: 15
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
    },
    orderTextContainer: {
        paddingTop: 40
    },
    orderText: {
        color: '#024F9D',
        fontSize: 20,
        fontWeight: 'bold'
    },
    orderScrollContainer: {
        paddingTop: 20,
        flex: 1,
    },
    orderScroll: {
        paddingHorizontal: 20
    },
    orderItem: {
        width: '100%',
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 4,
        marginVertical: 10
    },
    orderDetails: {
        paddingHorizontal: 20
    },
    orderName: {
        paddingVertical: 1
    },
    orderUsername: {
        color: 'black',
        fontSize: 25,
    },
    orderStatusContainer: {
        flexDirection: 'row',
        paddingVertical: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    orderStatus: {
        color: 'black',
        fontSize: 10
    },
    orderNumber: {
        color: 'black',
        fontSize: 10
    },
    orderItems: {
        paddingVertical: 1
    },
    orderItemName: {
        color: '#bfbfbf',
        fontSize: 15
    },
    orderPrice: {
        flexDirection: 'row',
        paddingTop: 2,
        paddingBottom: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    orderTotal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    totalPrice: {
        fontSize: 20,
        color: '#61B846',
        fontWeight: 'bold'
    },
    logoutBtnContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10
    }
})