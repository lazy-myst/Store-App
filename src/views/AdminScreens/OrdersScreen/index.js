import { StyleSheet, View, Text } from 'react-native'

function OrderScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Order Screen</Text>
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "black"
    }
})