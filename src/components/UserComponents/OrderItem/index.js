import { StyleSheet, View, Text } from 'react-native'
function OrderItem() {

    return (
        <View style={styles.orderItem}>
            <View style={styles.orderDetails}>
                <View style={styles.orderName}>
                    <Text style={styles.orderUsername} >User Name</Text>
                </View>
                <View style={styles.orderStatusContainer}>
                    <Text style={styles.orderStatus}>Order Date - OrderStatus</Text>
                    <Text style={styles.orderNumber}>Phone Number</Text>
                </View>
                <View style={styles.orderItems}>
                    <Text style={styles.orderItemName}>2 x Item Name</Text>
                    <Text style={styles.orderItemName}>2 x Item Name</Text>
                </View>
                <View style={styles.orderPrice}>
                    <Text style={styles.orderTotal}>Total</Text>
                    <Text style={styles.totalPrice}>Rs. 500</Text>
                </View>
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
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