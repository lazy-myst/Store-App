import { StyleSheet, View, Text } from 'react-native'

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})