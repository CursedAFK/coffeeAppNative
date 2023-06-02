import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { PlusIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'

const CoffeeCard = ({ item }) => {
	const navigation = useNavigation()

	return (
		<View
			style={{
				borderRadius: 40,
				backgroundColor: themeColors.bgDark,
				height: 360,
				width: 250
			}}
		>
			<View
				style={{
					shadowColor: 'black',
					shadowRadius: 30,
					shadowOffset: { width: 0, height: 40 },
					shadowOpacity: 0.8,
					flexDirection: 'row',
					justifyContent: 'center',
					marginTop: -56
				}}
			>
				<Image source={item.image} style={{ height: 160, width: 160 }} />
			</View>

			<View style={{ paddingHorizontal: 20, marginTop: 20, gap: 12 }}>
				<Text
					style={{
						fontSize: 30,
						lineHeight: 36,
						color: 'white',
						fontWeight: '600',
						zIndex: 10
					}}
				>
					{item.name}
				</Text>

				<View
					style={{
						backgroundColor: 'rgba(255,255,255,0.2)',
						flexDirection: 'row',
						alignItems: 'center',
						borderRadius: 24,
						padding: 4,
						paddingHorizontal: 8,
						gap: 4,
						width: 64
					}}
				>
					<StarIcon size={15} color='white' />

					<Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>
						{item.stars}
					</Text>
				</View>

				<View
					style={{ flexDirection: 'row', gap: 4, zIndex: 10, marginBottom: 24 }}
				>
					<Text
						style={{
							fontSize: 16,
							lineHeight: 24,
							color: 'white',
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
							color: 'white',
							fontWeight: '600'
						}}
					>
						{item.volume}
					</Text>
				</View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						shadowColor: themeColors.bgDark,
						shadowRadius: 25,
						shadowOffset: { width: 0, height: 40 },
						shadowOpacity: 0.8
					}}
				>
					<Text
						style={{
							color: 'white',
							fontWeight: '700',
							fontSize: 18,
							lineHeight: 28
						}}
					>
						$ {item.price}
					</Text>

					<TouchableOpacity
						onPress={() => navigation.navigate('Product', { ...item })}
						style={{
							padding: 16,
							backgroundColor: 'white',
							borderRadius: 999,
							shadowColor: 'black',
							shadowRadius: 40,
							shadowOffset: { width: -20, height: -10 },
							shadowOpacity: 1
						}}
					>
						<PlusIcon size={25} strokeWidth={2} color={themeColors.bgDark} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default CoffeeCard
