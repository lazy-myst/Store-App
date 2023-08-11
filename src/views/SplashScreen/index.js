import { StyleSheet, View, Image } from "react-native"
import GreenBtn from "../../components/GreenBtn"
import HeroHeading from "../../components/HeroHeading"


function SplashScreen({ navigation }) {
    const navigateToLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <View
                style={styles.heroImgContainer}>
                <Image
                    source={require('../../../assets/Logo.png')}
                />
            </View>
            <View
                style={styles.mainHeadingContainer}>
                <HeroHeading mainSize={60} subSize={40} />
            </View>
            <View style={styles.btnContainer}>
                <GreenBtn title='Get Started' func={navigateToLogin} />
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    heroImgContainer: {
        marginVertical: 60
    },
    mainHeadingContainer: {
        marginVertical: 4,
    },
    btnContainer: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 70
    }
})