import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import {
	HeartIcon as HeartIconOutline,
	HomeIcon as HomeIconOutline,
	ShoppingBagIcon as ShoppingBagIconOutline
} from 'react-native-heroicons/outline'
import {
	HeartIcon as HeartIconSolid,
	HomeIcon as HomeIconSolid,
	ShoppingBagIcon as ShoppingBagIconSolid
} from 'react-native-heroicons/solid'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { themeColors } from './theme'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const menuIcons = (route, focused) => (
	<View
		style={{
			alignItems: 'center',
			borderRadius: 999,
			padding: 12,
			elevation: 3,
			shadowColor: 'rgba(0, 0, 0, 0.1)',
			shadowOpacity: 1,
			shadowRadius: 2,
			shadowOffset: {
				width: 0,
				height: 1
			},
			backgroundColor: focused ? 'white' : ''
		}}
	>
		{route.name === 'Home' &&
			(focused ? (
				<HomeIconSolid size={30} color={themeColors.bgLight} />
			) : (
				<HomeIconOutline size={30} color='white' strokeWidth={2} />
			))}
		{route.name === 'Favorite' &&
			(focused ? (
				<HeartIconSolid size={30} color={themeColors.bgLight} />
			) : (
				<HeartIconOutline size={30} color='white' strokeWidth={2} />
			))}
		{route.name === 'Cart' &&
			(focused ? (
				<ShoppingBagIconSolid size={30} color={themeColors.bgLight} />
			) : (
				<ShoppingBagIconOutline size={30} color='white' strokeWidth={2} />
			))}
	</View>
)

const Tabs = () => (
	<Tab.Navigator
		screenOptions={({ route }) => ({
			headerShown: false,
			tabBarShowLabel: false,
			tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
			tabBarStyle: {
				// marginBottom: 20,
				borderRadius: 50,
				backgroundColor: themeColors.bgLight,
				height: 75,
				marginHorizontal: 20
			},
			tabBarItemStyle: {
				// marginTop: 30
			}
		})}
	>
		<Tab.Screen name='Home' component={HomeScreen} />
		<Tab.Screen name='Favorite' component={HomeScreen} />
		<Tab.Screen name='Cart' component={HomeScreen} />
	</Tab.Navigator>
)

const Stacks = () => (
	<Stack.Navigator
		screenOptions={{ contentStyle: { backgroundColor: '#fff' } }}
	>
		<Stack.Screen
			name='Home'
			component={Tabs}
			options={{ headerShown: false }}
		/>

		<Stack.Screen
			name='Product'
			component={ProductScreen}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
)

const App = () => {
	return (
		<NavigationContainer>
			<Stacks />
		</NavigationContainer>
	)
}

export default App
