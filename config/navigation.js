import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from '../src/views/SplashScreen'
import LoginScreen from '../src/views/LoginScreen'
import SignUpScreen from '../src/views/SignUpScreen'
import HomeScreen from '../src/views/UserScreens/HomeScreen'
import AccountScreen from '../src/views/UserScreens/AccountScreen'
import CartScreen from '../src/views/UserScreens/CartScreen'
import AdminHomeScreen from '../src/views/AdminScreens/HomeScreen'
import AddItemsScreen from '../src/views/AdminScreens/AddItemsScreen'
import AdminAccountScreen from '../src/views/AdminScreens/AccountScreen'
import OrderScreen from '../src/views/AdminScreens/OrdersScreen'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function Navigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Signup' component={SignUpScreen} />
                <Stack.Screen name='UserRoutes' component={UserRoutes}></Stack.Screen>
                <Stack.Screen name='AdminRoutes' component={AdminRoutes}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
function UserRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
            <Tab.Screen name='Cart' component={CartScreen}></Tab.Screen>
            <Tab.Screen name='Account' component={AccountScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}
function AdminRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AdminScreens' component={AdminTabRoutes}></Stack.Screen>
            <Stack.Screen name='Orders' component={OrderScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

function AdminTabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='AdminHome' component={AdminHomeScreen}></Tab.Screen>
            <Tab.Screen name='AddItems' component={AddItemsScreen}></Tab.Screen>
            <Tab.Screen name='AdminAccount' component={AdminAccountScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}