import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./styles/styles"; // Had to fix this import - finally works!

// My main app file - single screen for the music app
const App = () => {
  // My custom hook to handle fonts and loading - took some time to figure out
  const useMyAssets = () => {
    const [fontsLoaded, fontError] = useFonts({
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    });

    const [isReady, setReady] = useState(false);

    useEffect(() => {
      // Adding a 1-second delay to avoid flash and mimic asset loading
      if (fontsLoaded || fontError) {
        setTimeout(() => setReady(true), 1000);
      }
    }, [fontsLoaded, fontError]);

    return isReady;
  };

  const isAppReady = useMyAssets();

  // Simple loading screen I made
  if (!isAppReady) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  // My data constants - keeping everything in one place
  const musicPic = require("./assets/images/music-icon.png");
  const recentPic = require("./assets/images/recent_play.png");
  const audioPic = require("./assets/images/audio_book.jpg");
  const appleLogo = require("./assets/images/apple_logo.jpg");
  const heartIcon = require("./assets/images/heart-icon.png");

  // Categories I chose - inspired by Spotify’s layout
  const myCategories = [
    { id: "1", name: "Hot Hits Canada", pic: musicPic },
    { id: "2", name: "Pop Favourites", pic: musicPic },
    { id: "3", name: "Hip-Hop Central", pic: musicPic },
    { id: "4", name: "80s Hard Rock", pic: musicPic },
    { id: "5", name: "All About Country", pic: musicPic },
    { id: "6", name: "Upbeat mix", pic: musicPic },
    { id: "7", name: "Daily Wellness", pic: musicPic },
    { id: "8", name: "Release Radar", pic: musicPic },
  ];

  // Recent stuff I’ve listened to
  const myRecents = [
    { id: "1", title: "Pop Mix", img: recentPic },
    { id: "2", title: "Hot Hits", img: recentPic },
    { id: "3", title: "Upbeat Mix", img: recentPic },
    { id: "4", title: "Daily Wellness", img: recentPic },
    { id: "5", title: "Hip-Hop Central", img: recentPic },
    { id: "6", title: "80s Hard Rock", img: recentPic },
  ];

  // Audiobooks I think are cool - might add more later
  const myAudioBooks = [
    {
      id: "1",
      bookName: "Mastering Conversation",
      writer: "Helen Stone",
      cover: audioPic,
    },
    {
      id: "2",
      bookName: "Control Your Mind",
      writer: "Eric Robertson",
      cover: audioPic,
    },
    {
      id: "3",
      bookName: "Ikigai: The Japanese Secret",
      writer: "Hector Garcia",
      cover: audioPic,
    },
  ];

  // My tab bar component - static for now
  const MyTabBar = () => (
    <View style={styles.tabBar}>
      <View style={styles.logoItem}>
        <View style={styles.logoCircle}>
          <Image source={appleLogo} style={styles.logoImage} />
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
  );

  // My category card - decided 2 columns look good
  const CategoryCard = ({ id, name, pic }) => (
    <View style={[styles.cardWrapper, { width: "48%" }]}>
      <View style={styles.categoryCard}>
        <Image source={pic} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{name}</Text>
      </View>
    </View>
  );

  // My recent card - 3 columns to fit nicely with padding
  const RecentCard = ({ id, title, img }) => (
    <View style={[styles.cardWrapper, { width: "31%" }]}>
      <View style={styles.recentCard}>
        <Image source={img} style={styles.recentImage} />
        <View style={styles.textContainer}>
          <Text style={styles.recentText}>{title}</Text>
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
  );

  // My audiobook card - added heart for potential favorites
  const AudiobookCard = ({ id, bookName, writer, cover }) => (
    <View style={[styles.cardWrapper, { width: "48%" }]}>
      <View style={styles.audioCard}>
        <Image source={cover} style={styles.audioImage} />
        <View style={styles.audioContent}>
          <View style={styles.buttonContainer}>
            <View style={styles.favoriteButton}>
              <Image source={heartIcon} style={styles.favoriteIcon} />
            </View>
          </View>
          <Text style={styles.premiumText}>Included in Premium</Text>
          <Text style={styles.audioText}>{bookName}</Text>
          <View style={styles.subTextContainer}>
            <View style={styles.subTextWrapper}>
              <Text style={styles.subText}>Audiobook</Text>
              <Text style={styles.subText}>{writer}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  // Fixed key prop error - moved keys to map calls
  // Fixed text string error - removed extra whitespace in JSX
  // Putting it all together - my design for the app
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <MyTabBar />
        {/* My static tab bar at the top */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.grid}>
            {myCategories.map((cat) => (
              <CategoryCard key={cat.id} {...cat} />
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recents</Text>
          <View style={styles.grid}>
            {myRecents.map((item) => (
              <RecentCard key={item.id} {...item} />
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Audiobooks for you</Text>
          <View style={styles.grid}>
            {myAudioBooks.map((book) => (
              <AudiobookCard key={book.id} {...book} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
