import { StyleSheet, View, Text, Image, TextInput, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Category from '../../../components/UserComponents/Category'
import ProductItem from '../../../components/UserComponents/ProductItem'



const categories = [
    {
        name: 'Grocery',
        image: require('../../../../assets/grocerypic.jpg')
    },
    {
        name: 'Vegetables',
        image: require('../../../../assets/grocerypic.jpg')
    },
    {
        name: 'Meat',
        image: require('../../../../assets/grocerypic.jpg')
    },
    {
        name: 'Seafood',
        image: require('../../../../assets/grocerypic.jpg')
    },
    {
        name: 'Chinese',
        image: require('../../../../assets/grocerypic.jpg')
    },
    {
        name: 'Japanese',
        image: require('../../../../assets/grocerypic.jpg')
    }
]
const products = [
    {
        name: 'Meat',
        price: '800',
        description: 'product description',
        abcdescription: 'product abc description',
        image: require('../../../../assets/meatpic.jpg')
    },
    {
        name: 'Fish',
        price: '1600',
        description: 'product description',
        abcdescription: 'product abc description',
        image: require('../../../../assets/meatpic.jpg')
    },
    {
        name: 'Vegetables',
        price: '200',
        description: 'product description',
        abcdescription: 'product abc description',
        image: require('../../../../assets/meatpic.jpg')
    },
    {
        name: 'Grocery',
        price: '5000',
        description: 'product description',
        abcdescription: 'product abc description',
        image: require('../../../../assets/meatpic.jpg')
    },
    {
        name: 'Lobster',
        price: '3000',
        description: 'product description',
        abcdescription: 'product abc description',
        image: require('../../../../assets/meatpic.jpg')
    }
]

function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.upperSection}>
                <View style={styles.topBarContainer}>
                    <View>
                        <Text style={styles.heading}>Saylani welfare</Text>
                        <Text style={styles.subHeading}>discount store</Text>
                    </View>
                    <View>
                        <MaterialCommunityIcons color='#000' name='cart-variant' size={30} />
                    </View>
                </View>
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../../../assets/Grocery.png')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Search by product name'
                        placeholderTextColor='#BFBCBC'
                        inlineImageLeft='searchicon'
                        inlineImagePadding={20}
                        editable={false}
                    />
                </View>
                <View style={styles.categoriesContainer}>
                    <Text style={styles.categoriesText}>Shop by Category</Text>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={styles.categories}>
                        {categories.map((item, index) => {
                            return <Category key={index} itemName={item.name} imageUri={item.image} />
                        })}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.scrollSection}>
                <View style={styles.productContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {products.map((item, index) => {
                            return (
                                <ProductItem
                                    key={index}
                                    productName={item.name}
                                    productPrice={item.price}
                                    productImg={item.image}
                                    productDescription={item.description}
                                    productabcDescription={item.abcdescription}
                                />
                            )
                        })}
                    </ScrollView>

                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    upperSection: {
        flex: 3,
        alignItems: 'center',
        width: '100%'
    },
    topBarContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    heading: {
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#61B846'
    },
    subHeading: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: '500',
        color: '#024F9D'
    },
    imgContainer: {
        marginTop: 50
    },
    inputContainer: {
        marginTop: 20,
        height: 40,
        width: '100%',
    },
    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 40,
        paddingHorizontal: 10,
        color: 'black',
        fontSize: 20
    },
    categoriesContainer: {
        marginTop: 15,
        width: '100%'
    },
    categoriesText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 10
    },
    categories: {
        marginTop: 10
    },
    categoryImages: {
        objectFit: 'fill',
        height: 50,
        width: 85
    },
    scrollSection: {
        flex: 2
    },
    productContainer: {
        marginTop: 15,
        alignItems: 'flex-start',
    },

})