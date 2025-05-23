import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./styles/styles";

// Main app component - single screen for Music App Home Screen
const App = () => {
  // Attempt to load custom fonts
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  // State for loading screen
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading assets (e.g., fonts, images)
  useEffect(() => {
    if (fontsLoaded || fontError) {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [fontsLoaded, fontError]);

  // Show loading screen while fonts and assets are loading
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  // Data for the sections
  const categories = [
    {
      id: "1",
      name: "Hot Hits Canada",
      icon: require("./assets/images/music-icon.png"),
    },
    {
      id: "2",
      name: "Pop Favourites",
      icon: require("./assets/images/music-icon.png"),
    },
    {
      id: "3",
      name: "Hip-Hop Central",
      icon: require("./assets/images/music-icon.png"),
    },
    {
      id: "4",
      name: "80s Hard Rock",
      icon: require("./assets/images/music-icon.png"),
    },
    {
      id: "5",
      name: "All About Country",
      icon: require("./assets/images/music-icon.png"),
    },
    {
      id: "6",
      name: "Upbeat mix",
      icon: require("./assets/images/music-icon.png"),
    },
    {
      id: "7",
      name: "Daily Wellness",
      icon: require("./assets/images/music-icon.png"),
    },
    {
      id: "8",
      name: "Release Radar",
      icon: require("./assets/images/music-icon.png"),
    },
  ];

  const recents = [
    {
      id: "1",
      name: "Pop Mix",
      image: require("./assets/images/recent_play.png"),
    },
    {
      id: "2",
      name: "Hot Hits",
      image: require("./assets/images/recent_play.png"),
    },
    {
      id: "3",
      name: "Upbeat Mix",
      image: require("./assets/images/recent_play.png"),
    },
    {
      id: "4",
      name: "Daily Wellness",
      image: require("./assets/images/recent_play.png"),
    },
    {
      id: "5",
      name: "Hip-Hop Central",
      image: require("./assets/images/recent_play.png"),
    },
    {
      id: "6",
      name: "80s Hard Rock",
      image: require("./assets/images/recent_play.png"),
    },
  ];

  const audiobooks = [
    {
      id: "1",
      name: "Mastering Conversation",
      author: "Helen Stone",
      image: require("./assets/images/audio_book.jpg"),
    },
    {
      id: "2",
      name: "Control Your Mind",
      author: "Eric Robertson",
      image: require("./assets/images/audio_book.jpg"),
    },
    {
      id: "3",
      name: "Ikigai: The Japanese Secret",
      author: "Hector Garcia",
      image: require("./assets/images/audio_book.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Tab Bar Section - Static UI element */}
        <View style={styles.tabBar}>
          <View style={styles.logoItem}>
            <View style={styles.logoCircle}>
              <Image
                source={require("./assets/images/apple_logo.jpg")}
                style={styles.logoImage}
              />
            </View>
          </View>
          <View style={[styles.tabItem, styles.activeTab]}>
            <Text style={styles.tabText}>All</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>Music</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>Podcasts</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>Audiobooks</Text>
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.grid}>
            {categories.map((category) => (
              <View
                key={category.id}
                style={[styles.cardWrapper, { width: "48%" }]}
              >
                <View style={styles.categoryCard}>
                  <Image source={category.icon} style={styles.categoryImage} />
                  <Text style={styles.categoryText}>{category.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Recents Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recents</Text>
          <View style={styles.grid}>
            {recents.map((item) => (
              <View
                key={item.id}
                style={[styles.cardWrapper, { width: "31%" }]}
              >
                <View style={styles.recentCard}>
                  <Image source={item.image} style={styles.recentImage} />
                  <View style={styles.textContainer}>
                    <Text style={styles.recentText}>{item.name}</Text>
                    <View style={styles.subTextContainer}>
                      <View style={styles.subTextButton}>
                        <Text style={styles.subText}>Playlist</Text>
                      </View>
                      <View style={styles.subTextButton}>
                        <Text style={styles.subText}>User 1</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Audiobooks Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Audiobooks for you</Text>
          <View style={styles.grid}>
            {audiobooks.map((item) => (
              <View
                key={item.id}
                style={[styles.cardWrapper, { width: "48%" }]}
              >
                <View style={styles.audioCard}>
                  <Image source={item.image} style={styles.audioImage} />
                  <View style={styles.audioContent}>
                    <View style={styles.buttonContainer}>
                      <View style={styles.favoriteButton}>
                        <Image
                          source={require("./assets/images/heart-icon.png")}
                          style={styles.favoriteIcon}
                        />
                      </View>
                    </View>
                    <Text style={styles.premiumText}>Included in Premium</Text>
                    <Text style={styles.audioText}>{item.name}</Text>
                    <View style={styles.subTextContainer}>
                      <View style={styles.subTextWrapper}>
                        <Text style={styles.subText}>Audiobook</Text>
                        <Text style={styles.subText}>{item.author}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
