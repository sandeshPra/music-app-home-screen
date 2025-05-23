import { StyleSheet } from "react-native";

// My colors - I picked these to match the app design
const MY_COLORS = {
  bg: "#000",
  cardBg: "#2a2a2a",
  surfaceBg: "#1a1a2a",
  activeGreen: "#00ff00",
  textMain: "#fff",
  textLight: "#bbb",
  accentColor: "rgba(255, 255, 255, 0.2)",
  highlightColor: "rgba(0, 200, 0, 0.2)",
};

// Spacing stuff - played with these to get the layout right
const MY_SPACING = {
  padding: 10,
  smallSpace: 5,
  medSpace: 8,
  largeSpace: 16,
  borderRad: 12,
};

// Recreated styles.js again - finally got this working!
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MY_COLORS.bg,
    paddingTop: 50, // Added this to match the screenshot spacing
  },
  scrollView: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: MY_SPACING.padding,
    alignItems: "center",
  },
  logoItem: {
    padding: MY_SPACING.smallSpace,
  },
  logoCircle: {
    width: 24,
    height: 24,
    borderRadius: MY_SPACING.borderRad,
    borderWidth: 1,
    borderColor: MY_COLORS.textMain,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  logoImage: {
    width: 20,
    height: 20,
  },
  tabItem: {
    paddingVertical: MY_SPACING.medSpace,
    paddingHorizontal: MY_SPACING.largeSpace,
    backgroundColor: "#333",
    borderRadius: 20,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: MY_COLORS.activeGreen, // I chose green for active
  },
  tabText: {
    fontSize: 14,
    color: MY_COLORS.textMain,
    fontFamily: "System",
  },
  section: {
    padding: MY_SPACING.padding,
  },
  sectionTitle: {
    fontSize: 24,
    color: MY_COLORS.textMain,
    marginBottom: 10,
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: MY_SPACING.padding,
  },
  cardWrapper: {
    // I set width in the component
  },
  categoryCard: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: MY_COLORS.cardBg,
    padding: MY_SPACING.padding,
    borderRadius: 5,
  },
  categoryImage: {
    width: 30,
    height: 30,
    marginRight: MY_SPACING.smallSpace,
  },
  categoryText: {
    fontSize: 16,
    color: MY_COLORS.textMain,
    flex: 1,
    fontFamily: "System",
  },
  recentCard: {
    backgroundColor: MY_COLORS.surfaceBg,
    borderRadius: 10,
    padding: MY_SPACING.smallSpace,
  },
  recentImage: {
    width: "100%",
    height: 110,
    borderRadius: 8,
  },
  textContainer: {
    padding: MY_SPACING.smallSpace,
  },
  recentText: {
    fontSize: 12,
    color: MY_COLORS.textMain,
    textAlign: "center",
    marginBottom: 3,
    fontWeight: "bold",
  },
  audioCard: {
    backgroundColor: MY_COLORS.cardBg,
    borderWidth: 1,
    borderColor: MY_COLORS.textMain,
    borderRadius: 15,
    padding: MY_SPACING.padding,
  },
  audioImage: {
    width: "100%",
    height: 160,
    borderRadius: MY_SPACING.borderRad,
  },
  audioContent: {
    paddingTop: MY_SPACING.smallSpace,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: MY_SPACING.smallSpace,
  },
  favoriteButton: {
    padding: 6,
    backgroundColor: MY_COLORS.accentColor,
    borderRadius: MY_SPACING.borderRad,
    marginLeft: 5,
  },
  favoriteIcon: {
    width: 18,
    height: 18,
  },
  premiumText: {
    fontSize: 14,
    color: MY_COLORS.activeGreen,
    textAlign: "center",
    backgroundColor: MY_COLORS.highlightColor,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 8,
    fontFamily: "System",
  },
  audioText: {
    fontSize: 16,
    color: MY_COLORS.textMain,
    textAlign: "center",
    marginBottom: 8,
    width: "100%",
    fontWeight: "bold",
  },
  subTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: MY_SPACING.smallSpace,
  },
  subTextButton: {
    backgroundColor: "#333",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  subTextWrapper: {
    flex: 1,
    alignItems: "center",
  },
  subText: {
    fontSize: 12,
    color: MY_COLORS.textLight,
    textAlign: "center",
    fontFamily: "System",
  },
  loadingText: {
    fontSize: 16,
    color: MY_COLORS.textMain,
    textAlign: "center",
    fontFamily: "System",
  },
});
