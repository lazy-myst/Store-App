import { Text, View, StyleSheet } from 'react-native'

function HeroHeading(props) {
    return (
        <View style={styles.headingContainer}>
            <Text style={[styles.mainHeading, {fontSize: props.mainSize}]}>Saylani Welfare</Text>
            <Text style={[styles.subHeading, {fontSize: props.subSize}]}>Online Discount Store</Text>
        </View>
    )
}

export default HeroHeading

const styles = StyleSheet.create({
    headingContainer: {
        alignItems: 'center'
    },
    mainHeading: {
        color: '#61B846',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    subHeading: {
        color: '#024F9D',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
})