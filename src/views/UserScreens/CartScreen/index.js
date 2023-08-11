import { StyleSheet, View, Text } from 'react-native'

function CartScreen() {
    return (
        <View style={styles.container}>
            <Text>Cart Screen</Text>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})