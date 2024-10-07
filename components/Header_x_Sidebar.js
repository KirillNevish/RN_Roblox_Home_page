import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Animated, TextInput, Pressable, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function HeaderSidebar() {

    const { width } = useWindowDimensions(); // Get screen width
    const isSmallScreen = width < 1024;

    const [showSecondBlur, setShowSecondBlur] = useState(false);  // State to toggle the second BlurView

    const handleToggle = () => {
        if (isSmallScreen) {
            setShowSecondBlur(!showSecondBlur);  // Toggle only when the screen is small
        }
    };
    const handleClose = () => {
        if (isSmallScreen) {
            setShowSecondBlur(false);  // Close the second BlurView on small screens
        }
    };


    const animatedLineWidth1 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth2 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth3 = useRef(new Animated.Value(0)).current;
    const animatedLineWidth4 = useRef(new Animated.Value(0)).current;

    const createHoverEffect = () => {
        const scale = new Animated.Value(1);
        const handleMouseEnter = () => {
            Animated.spring(scale, {
                toValue: 1.1, // Increase size on hover
                useNativeDriver: true,
            }).start();
        };

        const handleMouseLeave = () => {
            Animated.spring(scale, {
                toValue: 1, // Return to original size when the mouse leaves
                useNativeDriver: true,
            }).start();
        };

        return { scale, handleMouseEnter, handleMouseLeave };
    };

    const buttonsData = [
        { icon: faHouse, label: 'Home' },
        { icon: faUser, label: 'Profile' },
        { icon: faMessage, label: 'Messages' },
        { icon: faUserGroup, label: 'Friends' },
        { icon: faSuitcase, label: 'Inventory' },
        { icon: faArrowRightArrowLeft, label: 'Trade' },
        { icon: faPeopleGroup, label: 'Groups' },
        { icon: faCoins, label: 'Premium' },
        { icon: faPalette, label: 'Themes' },
        { icon: faRectangleList, label: 'Blog' },
        { icon: faCartShopping, label: 'Official Store' },
        { icon: faGift, label: 'Gift Cards' },
    ];

    // Function to expand the line (on hover)
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


    return (
        <>
            <BlurView
                style={{
                    height: isSmallScreen ? 80 : 40,  // Increase height if screen is small to accommodate two rows
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: isSmallScreen ? "row" : "row", // Stack vertically if small screen
                    position: "sticky",
                    top: 0,
                    zIndex: 3,
                    flexWrap: "wrap"

                }}
                blurType="dark"
                blurAmount={90}
            >
                <View style={{ height: 40, justifyContent: "flex-end", left: isSmallScreen ? 0 : 10 }}>
                    {isSmallScreen ? (
                        <Image
                            source={require("../assets/RbIcon.png")}  // Update path as needed
                            style={{ width: 40, height: 40 }}  // Adjust icon size
                        />
                    ) : (
                        <Text style={{ fontSize: 25, fontWeight: "800", color: "white", height: "90%", marginBottom: 7 }}>
                            Roblox
                        </Text>
                    )}
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: isSmallScreen ? "row" : "row", // Stack in a column for small screens
                    justifyContent: isSmallScreen ? "center" : "center",
                    width: isSmallScreen ? "10%" : 0,
                    alignItems: isSmallScreen ? "flex-end" : "center",
                    marginTop: isSmallScreen ? 40 : 0, // Add space if screen is small
                    height: 40,
                    left: isSmallScreen ? "25%" : 0,
                }}>
                    <View style={{ height: 35, maxWidth: isSmallScreen ? "auto" : "7vw", justifyContent: "center", alignItems: "center", paddingHorizontal: isSmallScreen ? "10vw" : "3vw", }} onMouseEnter={() => handleMouseEnter(animatedLineWidth1)} onMouseLeave={() => handleMouseLeave(animatedLineWidth1)}  >
                        <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Home</Text>
                        <Animated.View
                            style={[
                                styles.line,
                                {
                                    width: animatedLineWidth1.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                    }),
                                },
                            ]}
                        />
                    </View>

                    <View style={{ height: 35, maxWidth: isSmallScreen ? "auto" : "7vw", justifyContent: "center", alignItems: "center", paddingHorizontal: isSmallScreen ? "10vw" : "3vw", }} onMouseEnter={() => handleMouseEnter(animatedLineWidth2)} onMouseLeave={() => handleMouseLeave(animatedLineWidth2)} >
                        <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Charts</Text>
                        <Animated.View
                            style={[
                                styles.line,
                                {
                                    width: animatedLineWidth2.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                    }),
                                },
                            ]}
                        />
                    </View>

                    <View style={{ height: 35, maxWidth: isSmallScreen ? "auto" : "11vw", justifyContent: "center", alignItems: "center", paddingHorizontal: isSmallScreen ? "12vw" : "3vw", }} onMouseEnter={() => handleMouseEnter(animatedLineWidth3)} onMouseLeave={() => handleMouseLeave(animatedLineWidth3)} >
                        <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Marketplace</Text>
                        <Animated.View
                            style={[
                                styles.line,
                                {
                                    width: animatedLineWidth3.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                    }),
                                },
                            ]}
                        />
                    </View>

                    <View style={{ height: 35, maxWidth: isSmallScreen ? "auto" : "7vw", justifyContent: "center", alignItems: "center", paddingHorizontal: isSmallScreen ? "10vw" : "3vw", }} onMouseEnter={() => handleMouseEnter(animatedLineWidth4)} onMouseLeave={() => handleMouseLeave(animatedLineWidth4)} >
                        <Text style={{ fontSize: isSmallScreen ? 15 : 20, fontWeight: 400, color: "white" }}>Create</Text>
                        <Animated.View
                            style={[
                                styles.line,
                                {
                                    width: animatedLineWidth4.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '100%'], // Animate from 0% to 100% of the View's width
                                    }),
                                },
                            ]}
                        />
                    </View>
                </View>
                {/* First Row with Logo, Search, and Notifications */}
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 40, width: "55%" }}>




                    <View style={{ height: 35, width: "23vw", justifyContent: "flex-end", color: "white", right: isSmallScreen ? "50%" : 0 }}>
                        <TextInput
                            style={{
                                borderWidth: 0,
                                height: 30,
                                backgroundColor: "#3c3c3c",
                                color: "grey",
                                marginBottom: 1,
                                borderRadius: 30,
                                paddingHorizontal: 10,
                            }}
                            placeholder='Search'
                        />
                    </View>

                    <View style={{ height: 40, width: "23vw", display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        <View style={{ height: 35, width: 40, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                            <FontAwesomeIcon icon={faBell} style={{ color: "#ffffff", fontSize: "22" }} />
                        </View>




                        <View style={{ height: 35, width: 40, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                            <FontAwesomeIcon icon={faUserGroup} style={{ color: "#ffffff", fontSize: "22" }} />
                        </View>

                        <View style={{ height: 35, width: 40, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                            <FontAwesomeIcon icon={faMessage} style={{ color: "#ffffff", fontSize: "22" }} />
                        </View>

                        <View style={{ height: 35, width: isSmallScreen ? 40 : 50, justifyContent: "center", alignItems: "center", borderRadius: 10, display: "flex", flexDirection: "row" }}>
                            <FontAwesomeIcon icon={faBitcoin} style={{ color: "#ffffff", fontSize: "22" }} />
                            {isSmallScreen ? (
                                null
                            ) : <Text style={{ fontSize: 17, color: "white", marginLeft: 3 }}>0</Text>}

                        </View>

                        <View style={{ height: 35, width: 40, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                            <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff", fontSize: "22" }} />
                        </View>
                    </View>
                </View>

            </BlurView>

            <TouchableOpacity onPress={handleToggle} style={{ zIndex: 10 }}>
                <BlurView
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "black",
                        display: isSmallScreen ? "flex" : "none",
                        flexWrap: "nowrap",
                        flexDirection: "column",
                        alignItems: "center",
                        zIndex: 999,
                        position: "fixed",
                        top: 80,
                        justifyContent: "center",
                        borderBottomRightRadius: 5,
                    }}
                    blurType="dark"
                    blurAmount={90}
                >
                    <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", fontSize: 30 }} />
                </BlurView>
            </TouchableOpacity>


            <BlurView
                style={{ width: 170, height: isSmallScreen ? '92vh' : "96vh", backgroundColor: "black", display: isSmallScreen ? (showSecondBlur ? "flex" : "none") : "flex", flexWrap: "nowrap", flexDirection: "column", top: isSmallScreen ? 80 : 40, position: "fixed", alignItems: "center", zIndex: 999 }}
                blurType="dark"  // Options: 'light', 'dark', 'xlight', 'prominent'
                blurAmount={90}   // Adjust the blur intensity
            >

                {isSmallScreen && (
                    <TouchableOpacity onPress={handleClose} style={{ marginTop: 20, position: "absolute", right: -40, top: -20 }}>
                        <BlurView style={{ backgroundColor: 'red', paddingVertical: 10, paddingHorizontal: 12, justifyContent: "center", alignItems: "center", borderBottomRightRadius: 5 }}
                            blurType="dark"
                            blurAmount={90}
                        >
                            <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff", fontSize: 22 }} />
                        </BlurView>
                    </TouchableOpacity>
                )}


                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.contentContainer}
                >
                    <View style={{ width: "93%", height: 35, marginTop: 20, alignItems: "center", flexDirection: "row" }}>
                        <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: 400, color: "white" }}>@yourname</Text>
                    </View>
                    <View style={{ width: "100%", marginTop: 10, display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <View style={{ borderWidth: 1, borderColor: "grey", width: "90%" }}></View>
                    </View>




                    <View>
                        {buttonsData.map(({ icon, label }, index) => {
                            const { scale, handleMouseEnter, handleMouseLeave } = createHoverEffect();

                            return (
                                <Animated.View
                                    key={index}
                                    style={[styles.button, { transform: [{ scale }] }]}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <View style={styles.buttonContent}>
                                        <FontAwesomeIcon icon={icon} style={{ color: "#ffffff", marginLeft: 3 }} />
                                        <Text style={styles.buttonText}>{label}</Text>
                                    </View>
                                </Animated.View>
                            );
                        })}
                    </View>
                </ScrollView>
            </BlurView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3c3c3c",

    },
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
    scrollView: {
        flex: 1, // Take up available space
        // height: "100vh",
        width: '100%', // Ensure the scroll view fills the width of the BlurView
    },
    contentContainer: {
        alignItems: 'center', // Center the content horizontally
        paddingBottom: 30,
    },
    button: {
        width: 150,
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
