import { StyleSheet, View, Text, Image, TextInput, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Category from '../../../components/UserComponents/Category'



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
    }
]

function HomeScreen() {
    return (
        <View style={styles.container}>
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
                />
            </View>
            <View style={styles.categoriesContainer}>
                <Text style={styles.categoriesText}>Shop by Category</Text>
                <ScrollView horizontal={true} style={styles.categories}>
                    {categories.map((item, index) => {
                        return <Category key={index} itemName={item.name} imageUri={item.image} />
                    })}
                </ScrollView>
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
    topBarContainer: {
        top: 30,
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
    category: {
        borderRadius: 15,
        borderColor: '#61B846',
        borderWidth: 1,
        marginHorizontal: 10,
        width: 85,
        height: 50,
        overflow: 'hidden'
    },
    categoryContainer: {
        alignItems: 'center'
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