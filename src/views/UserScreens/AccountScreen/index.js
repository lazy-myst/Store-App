import { StyleSheet, View, Text } from 'react-native'

function AccountScreen() {
    return (
        <View style={styles.container}>
            <Text>AccountScreen Screen</Text>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})