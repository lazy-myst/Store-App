import { StyleSheet, View, Text } from 'react-native'

function AddItemsScreen() {
    return (
        <View style={styles.container}>
            <Text>AddItems Screen</Text>
        </View>
    )
}

export default AddItemsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})