import { StyleSheet, View, Text, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


function ProductItem(props) {
    return (
        <View style={styles.productItemContainer}>
            <View style={styles.productImgContainer}>
                <Image
                    source={props.productImg}
                    style={styles.productImg} />
            </View>
            <View style={styles.productDetailsContainer}>
                <View style={styles.productPriceContainer}>
                    <Text style={styles.productPrice}>{props.productName}</Text>
                    <Text style={styles.productPrice}>Rs.{props.productPrice} - per Kg</Text>
                </View>
                <View style={styles.productDescriptionContainer}>
                    <View style={styles.productDescription}>
                        <Text style={styles.productDescriptionText}>{props.productDescription}</Text>
                        <Text style={styles.productDescriptionText}>{props.productabcDescription}</Text>
                    </View>
                    <View style={styles.purchaseBtn}>
                        <MaterialCommunityIcons name='plus' size={22} style={styles.purchaseBtnStyle} color='white' />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    productContainer: {
        marginTop: 15,
        alignItems: 'flex-start',
    },
    productItemContainer: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    productImgContainer: {
        width: '30%',
        height: 82,
        borderRadius: 15,
        overflow: 'hidden'
    },
    productImg: {
        width: 115,
        height: 82
    },
    productDetailsContainer: {
        paddingLeft: 10,
        width: '70%',
        height: 82,
        justifyContent: 'center'
    },
    productPriceContainer: {
        marginVertical: 5,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    productPrice: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    productDescriptionContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productDescriptionText: {
        color: '#bfbfbf'
    },
    purchaseBtnStyle: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#61B846',
        borderRadius: 15
    }

})