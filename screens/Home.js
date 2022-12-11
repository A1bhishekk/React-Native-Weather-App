import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { deviceHeight, deviceWidth } from './Dimension'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from 'react'
import Card from './Card'

const Home = ({ navigation }) => {
    const [city, setCity] = useState('')

    const cities = [
        {
            name: "Bhopal",
            image: require('../images/image3.jpg')
        },
        {
            name: "Bangalore",
            image: require('../images/image4.jpg')
        },
        {
            name: "Samastipur",
            image: require('../images/image5.jpg')
        },
        {
            name: "Khagaria",
            image: require('../images/image6.jpg')
        },
        {
            name: "Saharsa",
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
                    <Image source={require('../assets/icon.png')}
                        style={{ width: 85, height: 85, borderRadius: 50 }}

                    />
                    <Image source={require('../images/user.png')}
                        style={{ width: 55, height: 55, borderRadius: 50 }}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 60, color: "#6AFB92", textAlign: "center", fontWeight: "bold" }}>Technical Abhi</Text>


                    <View style={{
                        flexDirection: 'row', justifyContent: "space-between", alignItems: "center"
                        , backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 20,
                        paddingHorizontal: 10, paddingVertical: 10, marginTop: 10,
                    }}>
                        <TextInput
                            value={city}
                            onChangeText={(text) => setCity(text)}
                            placeholder='Search City'
                            placeholderTextColor='#FA2A55'
                            style={{ color: 'white', fontSize: 20, }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Details', { name: city == "" ? "Bhopal" : city })
                                setCity('')
                            }
                            }
                        >
                            <MaterialCommunityIcons name="magnify" size={22} color="white" />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ color: "#FA2A55", fontSize: 25, paddingHorizontal: 10, marginTop: 220 }}>My Locations</Text>

                    <FlatList
                        data={cities}
                        renderItem={({ item }) => <Card name={item.name} image={item.image} navigation={navigation} />}
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