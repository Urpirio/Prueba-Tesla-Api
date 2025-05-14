import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const Loginstyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: StatusBar.currentHeight,
  },
  InContainer: { 
  flex: 1,
  gap: 10,
  width: '100dvw',
  overflow: 'scroll',
  backgroundColor: '#e5e5e5'
  }
});