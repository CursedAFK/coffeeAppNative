import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const Tabs = () => <Tab.Navigator></Tab.Navigator>

const Stacks = () => (
	<Stack.Navigator>
		<Stack.Screen name='Home' component={HomeScreen} />
		<Stack.Screen name='Product' component={ProductScreen} />
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
