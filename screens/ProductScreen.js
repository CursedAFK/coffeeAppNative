import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import {
	ArrowLeftCircleIcon,
	MinusIcon,
	PlusIcon,
	ShoppingBagIcon
} from 'react-native-heroicons/outline'
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'

const ProductScreen = ({ navigation, route }) => {
	const [size, setSize] = useState('small')

	const item = route.params

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

			<SafeAreaView style={{ marginTop: 36 }}>
				<ScrollView>
					<View
						style={{
							marginHorizontal: 16,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<ArrowLeftCircleIcon size={50} strokeWidth={1.2} color='#fff' />
						</TouchableOpacity>

						<TouchableOpacity
							style={{
								borderRadius: 999,
								borderWidth: 2,
								borderColor: '#fff',
								padding: 8
							}}
						>
							<HeartIcon size={24} color='#fff' />
						</TouchableOpacity>
					</View>

					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							marginTop: 16,
							shadowColor: themeColors.bgDark,
							shadowRadius: 30,
							shadowOffset: {
								height: 30,
								width: 0
							},
							shadowOpacity: 0.9
						}}
					>
						<Image source={item.image} style={{ height: 240, width: 240 }} />
					</View>

					<View
						style={{
							backgroundColor: themeColors.bgLight,
							flexDirection: 'row',
							alignItems: 'center',
							borderRadius: 24,
							padding: 4,
							paddingHorizontal: 8,
							gap: 4,
							width: 64,
							opacity: 0.9,
							marginHorizontal: 16,
							marginTop: 16
						}}
					>
						<StarIcon size={15} color='white' />

						<Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>
							{item.stars}
						</Text>
					</View>

					<View
						style={{
							marginHorizontal: 16,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 16
						}}
					>
						<Text
							style={{
								fontSize: 30,
								lineHeight: 36,
								fontWeight: '600',
								color: themeColors.text
							}}
						>
							{item.name}
						</Text>

						<Text
							style={{
								fontSize: 18,
								lineHeight: 28,
								fontWeight: '600',
								color: themeColors.text
							}}
						>
							$ {item.price}
						</Text>
					</View>

					<View
						style={{
							marginHorizontal: 16,
							marginTop: 16,
							gap: 8
						}}
					>
						<Text
							style={{
								fontSize: 18,
								lineHeight: 28,
								fontWeight: '700',
								color: themeColors.text
							}}
						>
							Coffee size
						</Text>

						<View
							style={{ flexDirection: 'row', justifyContent: 'space-between' }}
						>
							<TouchableOpacity
								style={{
									backgroundColor:
										size === 'small' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
									padding: 12,
									paddingHorizontal: 32,
									borderRadius: 999
								}}
								onPress={() => setSize('small')}
							>
								<Text
									style={{ color: size === 'small' ? '#fff' : 'rgb(55 65 81)' }}
								>
									Small
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									backgroundColor:
										size === 'medium'
											? themeColors.bgLight
											: 'rgba(0,0,0,0.07)',
									padding: 12,
									paddingHorizontal: 32,
									borderRadius: 999
								}}
								onPress={() => setSize('medium')}
							>
								<Text
									style={{
										color: size === 'medium' ? '#fff' : 'rgb(55 65 81)'
									}}
								>
									Medium
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									backgroundColor:
										size === 'large' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
									padding: 12,
									paddingHorizontal: 32,
									borderRadius: 999
								}}
								onPress={() => setSize('large')}
							>
								<Text
									style={{ color: size === 'large' ? '#fff' : 'rgb(55 65 81)' }}
								>
									Large
								</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View
						style={{ marginHorizontal: 16, marginTop: 16, gap: 8, height: 150 }}
					>
						<Text
							style={{
								fontSize: 18,
								lineHeight: 28,
								fontWeight: '700',
								color: themeColors.text
							}}
						>
							About
						</Text>

						<Text style={{ color: 'rgb(75 85 99)' }}>{item.desc}</Text>
					</View>

					<View
						style={{
							marginHorizontal: 16,
							marginTop: 16,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: 8
						}}
					>
						<View
							style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
						>
							<Text
								style={{
									fontSize: 16,
									lineHeight: 24,
									color: 'rgb(55,65,81)',
									fontWeight: '600',
									opacity: 0.6
								}}
							>
								Volume
							</Text>

							<Text
								style={{
									fontSize: 16,
									lineHeight: 24,
									color: '#000',
									fontWeight: '600'
								}}
							>
								{item.volume}
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								gap: 16,
								borderColor: 'rgb(107 114 128)',
								borderRadius: 999,
								borderWidth: 1,
								padding: 4,
								paddingHorizontal: 16
							}}
						>
							<TouchableOpacity>
								<MinusIcon size={20} strokeWidth={3} color={themeColors.text} />
							</TouchableOpacity>

							<Text
								style={{
									fontWeight: '800',
									fontSize: 18,
									lineHeight: 28,
									color: themeColors.text
								}}
							>
								2
							</Text>

							<TouchableOpacity>
								<PlusIcon size={20} strokeWidth={3} color={themeColors.text} />
							</TouchableOpacity>
						</View>
					</View>

					<View
						style={{
							margin: 16,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<TouchableOpacity
							style={{
								padding: 16,
								borderRadius: 999,
								borderWidth: 1,
								borderColor: 'rgb(156 163 175)'
							}}
						>
							<ShoppingBagIcon size={30} color='gray' />
						</TouchableOpacity>

						<TouchableOpacity
							style={{
								padding: 20,
								borderRadius: 999,
								flex: 1,
								marginLeft: 12,
								backgroundColor: themeColors.bgLight
							}}
						>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 16,
									lineHeight: 24,
									fontWeight: '600',
									color: 'white'
								}}
							>
								Buy now
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	)
}

export default ProductScreen
