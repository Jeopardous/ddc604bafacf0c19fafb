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
export default class AsteroidInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            asteroidData: props.navigation.getParam('asteroidData')
        }
    }
    render() {
        const { asteroidData } = this.state
        return (
            <View style={styles.container}>

                <View style={styles.asteroidDetail}>
                    <Text style={styles.text}> <Text style={{ fontSize: 18, fontWeight: "bold" }}>Name{"  "}:</Text>{"  "}{asteroidData.name}</Text>
                    <Text style={styles.text}> <Text style={{ fontSize: 18, fontWeight: "bold" }}>Nasa Jpl Url{"  "}:</Text>{"  "}{asteroidData.nasa_jpl_url}</Text>
                    <Text style={styles.text}> <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hazardous{"  "}:</Text>{"  "}{asteroidData.is_potentially_hazardous_asteroid ? "True" : "False"}</Text>
                </View >

            </View >
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    asteroidDetail: {
        width: width - 30,
        marginHorizontal: 15,
        height: height * 0.25,
        elevation: 2,
        backgroundColor: "#dddddd",
        borderRadius: 10, justifyContent: "center"
    },
    text: {
        paddingHorizontal: 10,
        fontSize: 16,
        marginVertical: 10,
        color: "#000000"
    }
});
