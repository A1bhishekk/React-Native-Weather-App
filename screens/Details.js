import { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { deviceHeight, deviceWidth } from './Dimension'
import { API_KEY } from '../Constant'


const Details = ({ route }) => {
    const { name } = route.params
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))

    }, [])

   
    return (
        <View>
            <ImageBackground source={require('../images/image1.jpg')}
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
                

                {
                    data ? <View style={{
                        flexDirection: "column", justifyContent: "space-evenly",
                        alignItems: "center",
                        height: deviceHeight - 150
                    }}>
                        <View>
                            <Text style={{ fontSize: 60, color: "#00FA9A",fontWeight:"bold" }}>{data.name}</Text>
                            <Text style={{ fontSize: 25, color: "yellow", textAlign: "center" }}>{data.weather[0].main}</Text>
                        </View>
                        <Text style={{ fontSize: 60, color: "#FA2A55", fontWeight: "bold" }}>{((data.main.temp) - 273).toFixed(2)}&deg;C</Text>

                        <Text style={{ fontSize: 25, color: "yellow", fontWeight: "bold", alignItems: "center", marginTop: 80 }}>Weather Details</Text>
                        <View style={{ width: deviceWidth - 60 }}>

                            <View style={styles.details}>
                                <Text style={{ fontSize: 20, color: "#FA2A55", fontWeight: "bold" }}>Min Temp</Text>
                                <Text style={{ fontSize: 20, color: "#00FA9A", fontWeight: "bold" }}>{((data.main.temp_min) - 273).toFixed(2)}&deg;C</Text>
                            </View>

                            <View style={styles.details}>
                                <Text style={{ fontSize: 20, color: "#FA2A55", fontWeight: "bold" }}>Max Temp</Text>
                                <Text style={{ fontSize: 20, color: "#00FA9A", fontWeight: "bold" }}>{((data.main.temp_max) - 273).toFixed(2)}&deg;C</Text>
                            </View>
                            <View style={styles.details}>
                                <Text style={{ fontSize: 20, color: "#FA2A55", fontWeight: "bold" }}>Humidity</Text>
                                <Text style={{ fontSize: 20, color: "#00FA9A", fontWeight: "bold" }}>{data.main.humidity}%</Text>
                            </View>
                            <View style={styles.details}>
                                <Text style={{ fontSize: 20, color: "#FA2A55", fontWeight: "bold" }}>Pressure</Text>
                                <Text style={{ fontSize: 20, color: "#00FA9A", fontWeight: "bold" }}>{data.main.pressure}hPa</Text>
                            </View>
                            <View style={styles.details}>
                                <Text style={{ fontSize: 20, color: "#FA2A55", fontWeight: "bold" }}>Wind Speed</Text>
                                <Text style={{ fontSize: 20, color: "#00FA9A", fontWeight: "bold" }}>{data.wind.speed}m/s</Text>
                            </View>

                            <View style={styles.details}>
                                <Text style={{ fontSize: 20, color: "#FA2A55", fontWeight: "bold" }}>Wind Direction</Text>
                                <Text style={{ fontSize: 20, color: "#00FA9A", fontWeight: "bold" }}>{data.wind.deg}&deg;</Text>
                            </View>

                            <View style={styles.details}>
                                <Text style={{ fontSize: 20, color: "#FA2A55", fontWeight: "bold" }}>Clouds</Text>
                                <Text style={{ fontSize: 20, color: "#00FA9A", fontWeight: "bold" }}>{data.clouds.all}%</Text>
                            </View>

                            <View style={styles.details}>
                                <Text style={{ fontSize: 20, color: "#FA2A55", fontWeight: "bold" }}>Sunrise</Text>
                                <Text style={{ fontSize: 20, color: "#00FA9A", fontWeight: "bold" }}>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Text>
                            </View>

                            <View style={styles.details}>
                                <Text style={{ fontSize: 20, color: "#FA2A55", fontWeight: "bold" }}>Sunset</Text>
                                <Text style={{ fontSize: 20, color: "#00FA9A", fontWeight: "bold" }}>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Text>
                            </View>




                        </View>






                    </View> : <ActivityIndicator size="large" color="#00ff00" />
                }
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})