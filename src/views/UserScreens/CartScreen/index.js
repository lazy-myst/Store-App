import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntIcons from 'react-native-vector-icons/AntDesign'

function CartScreen() {
    const [count, setCount] = useState(0)

    const itemPrice = 50


    return (
        <View style={styles.container}>
            <View style={styles.upperSection}>
                <View style={styles.userIconContainer}>
                    <View style={styles.userImgBorder}>
                        <Image
                            style={styles.userImg}
                            source={require('../../../../assets/usericon.png')} />
                    </View>
                </View>
                <View style={styles.headingContainer}>
                    <View style={styles.headingText}>
                        <Text style={styles.headingTxt}>Shopping</Text>
                        <Text style={styles.subHeadingTxt}>Cart</Text>
                    </View>
                    <View>
                        <EvilIcons name='trash' color='#61B846' size={35} />
                    </View>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemImgContainer}>
                                <Image
                                    source={require('../../../../assets/grocerypic.jpg')}
                                    style={styles.itemImg} />
                            </View>
                            <View style={styles.itemDetailsContainer}>
                                <View style={styles.itemCounterContainer}>
                                    <Text style={styles.itemName}>item name</Text>
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
                                    <Text style={styles.itemPrice}>Rs.{itemPrice * count}</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.lowerSection}></View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    upperSection: {
        flex: 2,
        paddingTop: 15,
    },
    lowerSection: {
        flex: 2
    },
    userIconContainer: {
        width: '100%',
        alignItems: 'flex-end'
    },
    userImgBorder: {
        borderRadius: 50,
        borderColor: '#61B846',
        borderWidth: 2,
        padding: 1
    },
    userImg: {
        height: 30,
        width: 30,
    },
    headingContainer: {
        width: '100%',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5
    },
    headingTxt: {
        fontSize: 30,
        fontWeight: '500',
        color: '#024F9D'
    },
    subHeadingTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#61B846'
    },
    scrollContainer: {
        paddingTop: 15,
        paddingHorizontal: 10
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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