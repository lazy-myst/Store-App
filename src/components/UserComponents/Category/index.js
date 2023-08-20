import { StyleSheet, View, Text, Image } from 'react-native'

function Category(props) {
    return (
        <View style={styles.categoryContainer}>
            <View style={styles.category}>
                <Image
                    style={styles.categoryImages}
                    source={props.imageUri}
                    resizeMode='contain'
                />
            </View>
            <Text style={styles.categoryText}>{props.itemName}</Text>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    categoryContainer: {
        alignItems: 'center'
    },
    category: {
        borderRadius: 15,
        borderColor: '#61B846',
        borderWidth: 1,
        marginHorizontal: 10,
        width: 85,
        height: 50,
        overflow: 'hidden'
    },
    categoryText: {
        color: '#61B846'
    },
    categoryImages: {
        objectFit: 'fill',
        height: 50,
        width: 85
    }
})