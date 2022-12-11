import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimension'

const Card = ({ name, image }) => {
    return (
        <TouchableOpacity style={{ marginHorizontal: 10 }}
            onPress={() => { }}
        >
            <ImageBackground source={image} style={{ height: deviceHeight / 5, width: deviceWidth / 2 - 50 }}
                imageStyle={{ borderRadius: 16 }}
            />
            <View style={{ position: 'absolute', height: "100%", width: "100%" }}>
                <Text style={{ height: "100%", width: "100%", fontSize: 28, color: 'yellow', textAlign: "center", textAlignVertical: "center" }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({})