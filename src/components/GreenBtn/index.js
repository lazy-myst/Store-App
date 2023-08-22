import { Pressable, Text, StyleSheet } from "react-native"


function GreenBtn({ title, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.btn}>
            <Text style={styles.btnText}>{title}</Text>
        </Pressable>
    )
}

export default GreenBtn

const styles = StyleSheet.create({

    btn: {
        backgroundColor: '#61B846',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 7
    },
    btnText: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
})