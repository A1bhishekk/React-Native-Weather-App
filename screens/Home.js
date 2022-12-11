import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { deviceHeight, deviceWidth } from './Dimension'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from 'react'
import Card from './Card'

const Home = () => {
    const [city, setCity] = useState('')

    const cities = [
        {
            name: "Mumbai",
            image: require('../images/image3.jpg')
        },
        {
            name: "Delhi",
            image: require('../images/image4.jpg')
        },
        {
            name: "Bangalore",
            image: require('../images/image5.jpg')
        },
        {
            name: "Chennai",
            image: require('../images/image6.jpg')
        },
        {
            name: "Kolkata",
            image: require('../images/image7.jpg')
        },
    ]
    return (
        <View>
            <ImageBackground source={require('../images/image2.jpg')}
                style={{ width: deviceWidth, height: '100%' }}
                imageStyle={{ opacity: 0.6, backgroundColor: 'black' }}
            />

            <View style={{ position: 'absolute', paddingHorizontal: 10, paddingVertical: 20, }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between", alignItems: "center", width: deviceWidth - 20
                }}>
                    <MaterialCommunityIcons name="menu" size={45} color="white" />
                    <Image source={require('../images/user.png')}
                        style={{ width: 55, height: 55, borderRadius: 50 }}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
                    <Text style={{ fontSize: 40, color: "white" }}>Technical Abhi</Text>
                    <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>Search by the city name</Text>


                    <View style={{
                        flexDirection: 'row', justifyContent: "space-between", alignItems: "center"
                        , backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 20,
                        paddingHorizontal: 10, paddingVertical: 10, marginTop: 20,
                    }}>
                        <TextInput
                            value={city}
                            onChangeText={(text) => setCity(text)}
                            placeholder='Search City'
                            placeholderTextColor='white'
                            style={{ color: 'white' }}
                        />
                        <TouchableOpacity
                            onPress={() => { }}
                        >
                            <MaterialCommunityIcons name="magnify" size={22} color="white" />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ color: "white", fontSize: 25, paddingHorizontal: 10 ,marginTop:220}}>My Locations</Text>

                    <FlatList
                        data={cities}
                        renderItem={({ item }) => <Card name={item.name} image={item.image} />}
                        keyExtractor={(item) => item.name}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: 20 }}
                    />
                
                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})