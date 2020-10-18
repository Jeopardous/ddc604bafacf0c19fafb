/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get("window")

const API_KEY = "Y5ULAxkPkWvDyjdzYTVs9NVDSPndtglVvX6G0scb";
class HomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            asteroidId: "",
            asteroidData: []
        }

    }
    getAsteroidData = () => {
        console.log("AISS::::", this.state.asteroidId)
        fetch("https://api.nasa.gov/neo/rest/v1/neo/" + this.state.asteroidId + "?api_key=" + API_KEY)
            .then(res => res.json())
            .then(resJson => {
                this.setState({
                    asteroidData: resJson

                }, () => {
                    this.props.navigation.navigate("AsteroidInfo", { asteroidData: this.state.asteroidData })
                })
            })
            .catch(e => {
                alert("Enter Valid Id")
            })
    }

    getRandomAsteroidData = () => {
        fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
            .then(res => res.json())
            .then(resJson => {
                var randomNumber = Math.floor(Math.random() * 20) + 0
                this.setState({
                    asteroidId: resJson.near_earth_objects[randomNumber].id
                }, () => {
                    this.getAsteroidData()
                })
            })
    }

    render() {

        const { asteroidId } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.textInput}
                        value={asteroidId}
                        placeholder="Enter Asteroid ID"
                        onChangeText={(asteroidId) => { this.setState({ asteroidId }) }}
                    />

                    <TouchableOpacity
                        style={[styles.button, { opacity: asteroidId == "" ? 0.5 : 1 }]} onPress={() => { this.getAsteroidData() }} disabled={asteroidId == "" ? true : false}>
                        <Text style={{ color: "#ffffff", fontSize: 20, letterSpacing: 2 }}>SUBMIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button} onPress={() => { this.getRandomAsteroidData() }} >
                        <Text style={{ color: "#ffffff", fontSize: 20, letterSpacing: 2 }}>RANDOM ASTEROID</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center"
    },

    form: {
        width: width - 30,
        marginHorizontal: 15,
        height: height * 0.40,
        elevation: 2,
        backgroundColor: "#dddddd",
        borderRadius: 10,
    },
    textInput: {
        marginTop: 10,
        height: 60,
        width: "90%",
        borderBottomWidth: 1,
        alignSelf: "center",
        fontSize: 18,
        paddingLeft: 5
    },
    button: {
        width: width * 0.6,
        height: 45,
        borderRadius: 5,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 40
    }
});

export default HomeScreen;
