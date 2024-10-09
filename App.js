import React, { useState, useRef } from 'react';
import Footer from './components/Footer';
import HeaderSidebar from './components/Header_x_Sidebar';
import { StyleSheet, Text, View, SafeAreaView, Button, Animated, TextInput, Pressable, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
export default function App() {


  const { width } = useWindowDimensions(); // Get screen width
  const isSmallScreen = width < 1024;


  const [scaleValue] = useState(new Animated.Value(1)); // Default scale is 1

  const handleMouseEnterArrow = () => {
    Animated.spring(scaleValue, {
      toValue: 1.1, // Scale to 1.1 times the original size
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const handleMouseLeaveArrow = () => {
    Animated.spring(scaleValue, {
      toValue: 1, // Return to original size
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

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
  const friendsData = [
    { avatar: "Image", name: "John Doe" },
    { avatar: "Image", name: "Jane Smith" },
    { avatar: "Image", name: "Michael Johnson" },
    { avatar: "Image", name: "Sarah Davis" },
    { avatar: "Image", name: "David Wilson" },
    { avatar: "Image", name: "Emily Thompson" },
    { avatar: "Image", name: "Sheldon Plankton" },
    { avatar: "Image", name: "Brian Greene" },
    { avatar: "Image", name: "Richard Foster" },
    { avatar: "Image", name: "Daniel Brown" },
  ];

  const itemsPerRow = 4;  // Number of games per row
  const recommendData = [
    { recImage: "Image", recTitle: "Sonic", recRating: "93%" },
    { recImage: "Image", recTitle: "Mario", recRating: "79%" },
    { recImage: "Image", recTitle: "Jailbreak", recRating: "98%" },
    { recImage: "Image", recTitle: "Deepwoken", recRating: "77%" },
    { recImage: "Image", recTitle: "Airship Assault", recRating: "61%" },
    { recImage: "Image", recTitle: "Catalog avatar creator", recRating: "85%" },
    { recImage: "Image", recTitle: "Murder Mystery 2", recRating: "99%" },
    { recImage: "Image", recTitle: "KAT", recRating: "87%" },
  ]
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, size + i));
    }
    return result;
  };
  const recChunks = chunkArray(recommendData, itemsPerRow);

  const continueData = [
    { conImage: "Image", conTitle: "Phasmophobia", conRating: "90%", conPlayers: "1.1K" },
    { conImage: "Image", conTitle: "Lifting Simulator", conRating: "55%", conPlayers: "649" },
    { conImage: "Image", conTitle: "Jailbreak", conRating: "98%", conPlayers: "24.4K" },
    { conImage: "Image", conTitle: "Elimination Tower", conRating: "67%", conPlayers: "112" },
    { conImage: "Image", conTitle: "The Wild West", conRating: "73%", conPlayers: "1K" },
    { conImage: "Image", conTitle: "Blade Ball", conRating: "47%", conPlayers: "4.9K" },
    { conImage: "Image", conTitle: "Blade Ball", conRating: "47%", conPlayers: "4.9K" },
    { conImage: "Image", conTitle: "PLS DONATE 💸", conRating: "88%", conPlayers: "33.2K" },
  ]

  return (
    <SafeAreaView style={styles.container}>

      <HeaderSidebar />

      <ScrollView
        vertical={false}  // Enables horizontal scrolling
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: "100%", width: "100", }}
      >
        <View style={{ width: "100vw", height: "100%", backgroundColor: "transparent", justifyContent: "flex-end", display: "flex", flexDirection: "row" }}>
          <View style={{ width: isSmallScreen ? "98%" : "85%", height: "100%", marginRight: isSmallScreen ? "1%" : "1%", marginLeft: isSmallScreen ? "1%" : 0 }}>
            <View style={{ marginTop: 20 }} >
              <Text style={{ fontSize: 40, fontWeight: 700, color: "white" }}>Home</Text>
            </View>

            <View style={{ marginTop: 15, display: "flex", flexDirection: "row", alignItems: "center" }} >

              <View style={{ width: 100, height: 100, backgroundColor: "grey", borderRadius: 50, display: "flex", justifyContent: "center", alignItems: "center", }}>
                <Text style={{ fontSize: 17, fontWeight: 400, color: "white" }}>Image</Text>
              </View>
              <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 400, color: "white", width: 200, height: 30 }}>Hello, @yourname</Text>
            </View>

            <View style={{ marginTop: 15, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", }} >
              <Text style={{ fontSize: 25, fontWeight: 500, color: "white" }}>Friends()</Text>

              <Animated.View
                style={{
                  transform: [{ scale: scaleValue }],
                }}
                onMouseEnter={handleMouseEnterArrow}
                onMouseLeave={handleMouseLeaveArrow}
              >
                <View style={{ borderRadius: 5, display: "flex", flexDirection: "row", alignItems: "center", marginRight: isSmallScreen ? 5 : 20 }}>
                  <Text style={{ fontSize: 20, fontWeight: 500, color: "white", marginRight: 7 }}>See all</Text>
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", fontSize: 17 }} />
                </View>
              </Animated.View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", gap: 20, height: 150, overflow: "hidden" }} >
              <ScrollView
                horizontal={true}  // Enables horizontal scrolling
                showsHorizontalScrollIndicator={true}  // Optional: hides the scroll indicator
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ height: '100%' }}
              >
                {friendsData.map(({ avatar, name }, index) => {
                  const { scale, handleMouseEnter, handleMouseLeave } = createHoverEffect();
                  return (
                    <Animated.View
                      key={index}
                      style={[{ transform: [{ scale }] }]}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <View style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 100, marginTop: 10 }}>
                        <View style={{ width: 70, height: 70, backgroundColor: "grey", borderRadius: 50, display: "flex", justifyContent: "center", alignItems: "center", }}>
                          {avatar}
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: 400, color: "white", alignSelf: "center", display: "flex", textAlign: "center" }}>{name}</Text>
                      </View>

                    </Animated.View>
                  );
                })}
              </ScrollView>
            </View>

            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }} >
              <Text style={{ fontSize: 25, fontWeight: 500, color: "white" }}>Recommended for you</Text>
            </View>


            <View style={{ display: "flex", overflow: "hidden" }} >
              <ScrollView
                horizontal={true}  // Enables horizontal scrolling
                showsHorizontalScrollIndicator={true}  // Show or hide horizontal scroll indicator
                showsVerticalScrollIndicator={false}  // Hide vertical scroll indicator
                contentContainerStyle={{ height: '100%', flexDirection: "column", width: "100%" }}  // Ensures content fits height
              >
                {recChunks.map((chunk, chunkIndex) => (
                  <View key={chunkIndex} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                    {chunk.map(({ recImage, recTitle, recRating }, index) => {
                      const { scale, handleMouseEnter, handleMouseLeave } = createHoverEffect();
                      return (
                        <Animated.View
                          key={index}
                          style={[{ transform: [{ scale }] }]}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <View key={index} style={{ display: "flex", justifyContent: "center", minWidth: 200, width: "20vw", maxWidth: 350, marginTop: 10 }}>
                            <View style={{ display: "flex", alignItems: "center" }}>
                              <View style={{ height: 150, width: "95%", backgroundColor: "grey", borderRadius: 20, display: "flex", justifyContent: "center", alignItems: "center", }}>
                                {recImage}
                              </View>
                            </View>
                            <Text style={{ fontSize: 17, fontWeight: 400, color: "white", width: 170, marginLeft: 10 }}>
                              {recTitle}
                            </Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline", marginTop: 10 }}>
                              <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#d9d9d9", marginLeft: 10 }} />
                              <Text style={{ fontSize: 15, fontWeight: 400, color: "#d9d9d9", width: 40, marginLeft: 5 }}>
                                {recRating}
                              </Text>
                            </View>

                          </View>
                        </Animated.View>
                      );
                    })}
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={{ marginTop: 10, marginBottom: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }} >
              <Text style={{ fontSize: 25, fontWeight: 500, color: "white" }}>Continue</Text>

              <Animated.View
                style={{
                  transform: [{ scale: scaleValue }],
                }}
                onMouseEnter={handleMouseEnterArrow}
                onMouseLeave={handleMouseLeaveArrow}
              >
                <View style={{ borderRadius: 5, display: "flex", flexDirection: "row", alignItems: "center", marginRight: isSmallScreen ? 5 : 20 }}>
                  <Text style={{ fontSize: 20, fontWeight: 500, color: "white", marginRight: 7 }}>See all</Text>
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", fontSize: 17 }} />
                </View>
              </Animated.View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", height: 270, overflow: "hidden" }} >
              <ScrollView
                horizontal={true}  // Enables horizontal scrolling
                showsHorizontalScrollIndicator={true}  // Optional: hides the scroll indicator
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ height: '100%', width: "100%", flexDirection: "row" }}
              >
                {continueData.map(({ conImage, conTitle, conRating, conPlayers }, index) => {
                  const { scale, handleMouseEnter, handleMouseLeave } = createHoverEffect();
                  return (
                    <Animated.View
                      key={index}
                      style={[{ transform: [{ scale }] }]}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <View style={{ display: "flex", width: 200, marginTop: 10 }}>
                        <View style={{ display: "flex", alignItems: "center" }}>
                          <View style={{ height: 170, width: 170, backgroundColor: "grey", borderRadius: 20, display: "flex", justifyContent: "center", alignItems: "center", }}>
                            {conImage}
                          </View>
                        </View>
                        <Text style={{ fontSize: 17, fontWeight: 400, color: "white", width: 170, marginLeft: 10 }}>
                          {conTitle}
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline", marginTop: 20, justifyContent: "center" }}>
                          <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#d9d9d9", marginRight: 5 }} />
                          <Text style={{ fontSize: 15, fontWeight: 400, color: "#d9d9d9", width: 40, }}>
                            {conRating}
                          </Text>
                          <FontAwesomeIcon icon={faUser} style={{ color: "#d9d9d9", marginRight: 5 }} />
                          <Text style={{ fontSize: 15, fontWeight: 400, color: "#d9d9d9", width: 40, }}>
                            {conPlayers}
                          </Text>
                        </View>

                      </View>
                    </Animated.View>
                  );
                })}
              </ScrollView>
            </View>

            <View style={{ marginTop: 10, marginBottom: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }} >
              <Text style={{ fontSize: 25, fontWeight: 500, color: "white" }}>Favorites</Text>

              <Animated.View
                style={{
                  transform: [{ scale: scaleValue }],
                }}
                onMouseEnter={handleMouseEnterArrow}
                onMouseLeave={handleMouseLeaveArrow}
              >
                <View style={{ borderRadius: 5, display: "flex", flexDirection: "row", alignItems: "center", marginRight: isSmallScreen ? 5 : 20 }}>
                  <Text style={{ fontSize: 20, fontWeight: 500, color: "white", marginRight: 7 }}>See all</Text>
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", fontSize: 17 }} />
                </View>
              </Animated.View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", height: 270, overflow: "hidden" }} >
              <ScrollView
                horizontal={true}  // Enables horizontal scrolling
                showsHorizontalScrollIndicator={true}  // Optional: hides the scroll indicator
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ height: '100%', width: "100%", flexDirection: "row" }}
              >
                {continueData.map(({ conImage, conTitle, conRating, conPlayers }, index) => {
                  const { scale, handleMouseEnter, handleMouseLeave } = createHoverEffect();
                  return (
                    <Animated.View
                      key={index}
                      style={[{ transform: [{ scale }] }]}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <View style={{ display: "flex", width: 200, marginTop: 10 }}>
                        <View style={{ display: "flex", alignItems: "center" }}>
                          <View style={{ height: 170, width: 170, backgroundColor: "grey", borderRadius: 20, display: "flex", justifyContent: "center", alignItems: "center", }}>
                            {conImage}
                          </View>
                        </View>
                        <Text style={{ fontSize: 17, fontWeight: 400, color: "white", width: 170, marginLeft: 10 }}>
                          {conTitle}
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline", marginTop: 20, justifyContent: "center" }}>
                          <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#d9d9d9", marginRight: 5 }} />
                          <Text style={{ fontSize: 15, fontWeight: 400, color: "#d9d9d9", width: 40, }}>
                            {conRating}
                          </Text>
                          <FontAwesomeIcon icon={faUser} style={{ color: "#d9d9d9", marginRight: 5 }} />
                          <Text style={{ fontSize: 15, fontWeight: 400, color: "#d9d9d9", width: 40, }}>
                            {conPlayers}
                          </Text>
                        </View>
                      </View>
                    </Animated.View>
                  );
                })}
              </ScrollView>
            </View>

            <Footer />

          </View>
        </View >
      </ScrollView>

    </SafeAreaView >
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
