import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'

const ProductScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<StatusBar style='light' />

			<Image
				source={require('../assets/images/beansBackground2.png')}
				style={{
					height: 300,
					borderBottomLeftRadius: 50,
					borderBottomRightRadius: 50,
					width: '100%',
					position: 'absolute'
				}}
			/>

			<SafeAreaView></SafeAreaView>
		</View>
	)
}

export default ProductScreen
