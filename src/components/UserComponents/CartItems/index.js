import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import AntIcons from 'react-native-vector-icons/AntDesign'

function CartItem(props) {
    const [count, setCount] = useState(1)

    const itemPrice = props.price


    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemImgContainer}>
                <Image
                    source={require('../../../../assets/grocerypic.jpg')}
                    style={styles.itemImg} />
            </View>
            <View style={styles.itemDetailsContainer}>
                <View style={styles.itemCounterContainer}>
                    <Text style={styles.itemName}>{props.name}</Text>
                    <View style={styles.counter}>
                        <TouchableOpacity
                            onPress={() => count <= 0 ? setCount(count) : setCount(count - 1)}>
                            <AntIcons name='minus' size={15} color='black' />
                        </TouchableOpacity>
                        <View style={styles.count}>
                            <Text style={styles.countText}>{count}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => setCount(count + 1)}>
                            <AntIcons name='plus' size={15} color='black' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.itemPrice}>Rs.{props.price * count}</Text>
                </View>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: '100%'
    },
    itemImgContainer: {
        width: '30%',
        height: 80,
        borderRadius: 15,
        overflow: 'hidden'
    },
    itemImg: {
        height: 80,
        width: 'auto',
        objectFit: 'fill'
    },
    itemDetailsContainer: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemCounterContainer: {
        height: 80,
        paddingTop: 10
    },
    itemName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
        marginLeft: 10,
    },
    itemPrice: {
        color: 'black',
        fontSize: 20
    },
    counter: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    count: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#bfbcbc',
        borderRadius: 10
    },
    countText: {
        color: 'black',
        fontSize: 15
    }
})