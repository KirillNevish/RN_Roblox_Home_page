import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Animated, TextInput, Pressable, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native';

export default function Footer() {

    const { width } = useWindowDimensions(); // Get screen width
    const isSmallScreen = width < 1024;

    const handleMouseEnter = (animatedValue) => {
        Animated.timing(animatedValue, {
            toValue: 1,  // Fully expand the line
            duration: 300, // Duration of the animation
            useNativeDriver: false, // Can't use native driver for width/height animations
        }).start();
    };

    // Function to collapse the line (on mouse leave)
    const handleMouseLeave = (animatedValue) => {
        Animated.timing(animatedValue, {
            toValue: 0, // Collapse the line back to 0
            duration: 300, // Same duration for smooth transition
            useNativeDriver: false,
        }).start();
    };

    const animatedLineWidth5 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth6 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth7 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth8 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth9 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth10 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth11 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth12 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth13 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth14 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth15 = useRef(new Animated.Value(0)).current;

    return (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 60, }}>
            <View style={{ width: isSmallScreen ? "100%" : "70%", maxWidth: 800, marginBottom: 10 }} >
                <View style={{ flexDirection: "row", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}  >

                    <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth5)} onMouseLeave={() => handleMouseLeave(animatedLineWidth5)} >
                        <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>About Us</Text>
                        <Animated.View
                            style={[
                                styles.line,
                                {
                                    width: animatedLineWidth5.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                    }),
                                },
                            ]}
                        />
                    </View>

                    <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth6)} onMouseLeave={() => handleMouseLeave(animatedLineWidth6)} >
                        <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Jobs</Text>
                        <Animated.View
                            style={[
                                styles.line,
                                {
                                    width: animatedLineWidth6.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                    }),
                                },
                            ]}
                        />
                    </View>

                    <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth7)} onMouseLeave={() => handleMouseLeave(animatedLineWidth7)} >
                        <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Blog</Text>
                        <Animated.View
                            style={[
                                styles.line,
                                {
                                    width: animatedLineWidth7.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                    }),
                                },
                            ]}
                        />
                    </View>

                    <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth8)} onMouseLeave={() => handleMouseLeave(animatedLineWidth8)} >
                        <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Parents</Text>
                        <Animated.View
                            style={[
                                styles.line,
                                {
                                    width: animatedLineWidth8.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                    }),
                                },
                            ]}
                        />
                    </View>

                    <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth9)} onMouseLeave={() => handleMouseLeave(animatedLineWidth9)} >
                        <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Gift Cards</Text>
                        <Animated.View
                            style={[
                                styles.line,
                                {
                                    width: animatedLineWidth9.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                    }),
                                },
                            ]}
                        />
                    </View>

                    <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth10)} onMouseLeave={() => handleMouseLeave(animatedLineWidth10)} >
                        <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Help</Text>
                        <Animated.View
                            style={[
                                styles.line,
                                {
                                    width: animatedLineWidth10.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                    }),
                                },
                            ]}
                        />
                    </View>

                    <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-evenly", flexWrap: "wrap" }}>

                        <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth11)} onMouseLeave={() => handleMouseLeave(animatedLineWidth11)} >
                            <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Terms</Text>
                            <Animated.View
                                style={[
                                    styles.line,
                                    {
                                        width: animatedLineWidth11.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                        }),
                                    },
                                ]}
                            />
                        </View>

                        <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth12)} onMouseLeave={() => handleMouseLeave(animatedLineWidth12)} >
                            <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Accessibility</Text>
                            <Animated.View
                                style={[
                                    styles.line,
                                    {
                                        width: animatedLineWidth12.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                        }),
                                    },
                                ]}
                            />
                        </View>

                        <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth13)} onMouseLeave={() => handleMouseLeave(animatedLineWidth13)} >
                            <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Privacy</Text>
                            <Animated.View
                                style={[
                                    styles.line,
                                    {
                                        width: animatedLineWidth13.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                        }),
                                    },
                                ]}
                            />
                        </View>

                        <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth14)} onMouseLeave={() => handleMouseLeave(animatedLineWidth14)} >
                            <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Your Privacy Choises</Text>
                            <Animated.View
                                style={[
                                    styles.line,
                                    {
                                        width: animatedLineWidth14.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                        }),
                                    },
                                ]}
                            />
                        </View>

                        <View style={{ width: "fit-content" }} onMouseEnter={() => handleMouseEnter(animatedLineWidth15)} onMouseLeave={() => handleMouseLeave(animatedLineWidth15)} >
                            <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Cookie Options</Text>
                            <Animated.View
                                style={[
                                    styles.line,
                                    {
                                        width: animatedLineWidth15.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                        }),
                                    },
                                ]}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: "grey", width: "100%", marginTop: 20, marginBottom: 20 }}></View>

                <View style={{ display: "flex", flexDirection: "row" }}>
                    {isSmallScreen ? (null) :
                        <View style={{ display: "flex", flexDirection: "row", borderWidth: 1, borderRadius: 10, borderColor: "#d9d9d9", alignItems: "center", width: "15vw", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                                <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#d9d9d9", fontSize: 20, marginLeft: 5 }} />
                                <Text style={{ fontSize: 25, fontWeight: 400, color: "#d9d9d9", width: "fit-content", marginLeft: 5, marginBottom: 5 }}>
                                    English
                                </Text>
                            </View>
                            <View style={{ width: "2vw" }}>
                                <FontAwesomeIcon icon={faAngleDown} style={{ color: "#d9d9d9", }} />
                            </View>
                        </View>
                    }
                    <Text style={{ fontSize: 10, fontWeight: 400, color: "#d9d9d9", width: "fit-content", marginLeft: 10 }}>©2024 Roblox Corporation. Roblox, the Roblox logo and Powering Imagination are among our registered and unregistered trademarks in the U.S. and other countries.</Text>
                </View>


            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    headerbutanimation: {
        borderRadius: 5,
        position: 'relative',
    },

    line: {
        position: 'absolute',
        bottom: 0,
        height: 2,           // Line height
        backgroundColor: 'white',  // Line color
        width: '0%',         // Initial width is 0, animated later
    },
    contentContainer: {
        alignItems: 'center', // Center the content horizontally
        paddingBottom: 30,
    },
    button: {
        width: 150,
        borderWidth: 2,
        borderColor: "green",
        height: 35,
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        marginLeft: 5,
        fontSize: 17,
        fontWeight: '400',
        color: 'white',
    },
});