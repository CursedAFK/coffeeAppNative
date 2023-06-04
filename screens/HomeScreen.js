import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
	FlatList,
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import Carousel from 'react-native-snap-carousel'
import CoffeeCard from '../components/CoffeeCard'
import { categories, coffeeItems } from '../constants'
import { themeColors } from '../theme'

const HomeScreen = () => {
	const [activeCategory, setActiveCategory] = useState(1)

	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<StatusBar />

			<Image
				source={require('../assets/images/beansBackground1.png')}
				style={{
					width: '100%',
					position: 'absolute',
					top: -20,
					opacity: 0.1,
					height: 220
				}}
			/>

			<SafeAreaView style={{ flex: 1, marginTop: 36 }}>
				<ScrollView>
					{/* Header */}
					<View
						style={{
							flexDirection: 'row',
							paddingHorizontal: 16,
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<Image
							source={require('../assets/images/avatar.png')}
							style={{ height: 36, width: 36, borderRadius: 999 }}
						/>

						<View
							style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
						>
							<MapPinIcon size={25} color={themeColors.bgLight} />

							<Text style={{ fontSize: 16, fontWeight: '600' }}>
								New York, NYC
							</Text>
						</View>

						<BellIcon size={27} color='black' />
					</View>

					{/* Search */}
					<View style={{ marginHorizontal: 20, marginTop: 20 }}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								borderRadius: 999,
								padding: 4,
								backgroundColor: '#e6e6e6',
								alignItems: 'center'
							}}
						>
							<TextInput
								placeholder='Search'
								style={{
									padding: 16,
									flex: 1,
									fontWeight: '600',
									color: 'rgb(55 65 81)'
								}}
							/>

							<TouchableOpacity
								style={{
									borderRadius: 999,
									padding: 8,
									backgroundColor: themeColors.bgLight
								}}
							>
								<MagnifyingGlassIcon size={25} strokeWidth={2} color='white' />
							</TouchableOpacity>
						</View>
					</View>

					{/* Categories */}
					<View style={{ paddingHorizontal: 20, marginTop: 24 }}>
						<FlatList
							horizontal
							showsHorizontalScrollIndicator={false}
							data={categories}
							keyExtractor={item => item.id}
							style={{ overflow: 'visible' }}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => setActiveCategory(item.id)}
									style={{
										backgroundColor:
											activeCategory === item.id
												? themeColors.bgLight
												: 'rgba(0,0,0,0.07)',
										padding: 16,
										paddingHorizontal: 20,
										borderRadius: 999,
										marginRight: 8,
										elevation: 3,
										shadowColor: 'rgba(0, 0, 0, 0.1)',
										shadowOpacity: 1,
										shadowRadius: 2,
										shadowOffset: {
											width: 0,
											height: 1
										}
									}}
								>
									<Text
										style={{
											fontWeight: '600',
											color:
												activeCategory === item.id ? 'white' : 'rgb(55 65 81)'
										}}
									>
										{item.title}
									</Text>
								</TouchableOpacity>
							)}
						/>
					</View>

					{/* Coffee Cards */}
					<View style={{ marginTop: 8, paddingVertical: 8 }}>
						<Carousel
							containerCustomStyle={{
								overflow: 'visible'
							}}
							data={coffeeItems}
							renderItem={({ item }) => <CoffeeCard item={item} />}
							loop={true}
							firstItem={1}
							inactiveSlideOpacity={0.75}
							inactiveSlideScale={0.77}
							sliderWidth={400}
							itemWidth={260}
							slideStyle={{
								display: 'flex',
								alignItems: 'center',
								marginTop: 56
							}}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	)
}

export default HomeScreen
