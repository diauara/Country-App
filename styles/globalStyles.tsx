import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  textStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
  header: {
    fontWeight: "700",
    fontSize: 24,
    marginTop: 20,
  },
  mainText: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
  },
  subText: {
    fontWeight: "400",
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
  },
  borderCountries: {
    padding: 10,
    marginLeft: 7,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  component: {
    marginTop: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
    width: 375,
  },
  countryDetails: {
    margin: 20,
  },
  search: {
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    backgroundColor: "#ddd",
  },
  filter: {
    marginTop: 20,
    width: "50%",
    borderRadius: 10,
  },
  textInput: {
    width: 270,
    height: 30,
  },
  loginScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
});

// const darkTheme = {
//   container: {
//     flex: 1,
//     backgroundColor: "brown",
//   },
//   textStyle: {
//     flexDirection: "row",
//     marginTop: 10,
//   },
//   header: {
//     fontWeight: "700",
//     fontSize: 24,
//     marginTop: 20,
//     color: "white",
//   },
//   mainText: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "white",
//   },
//   subText: {
//     fontWeight: "400",
//     fontSize: 16,
//     color: "#ddd",
//   },
//   borderCountries: {
//     padding: 10,
//     marginLeft: 7,
//     backgroundColor: "white",
//     elevation: 5,
//     shadowColor: "white",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 1,
//     shadowRadius: 4,
//   },
//   component: {
//     marginTop: 20,
//     backgroundColor: "#eee",
//     borderRadius: 10,
//     width: 375,
//   },
//   countryDetails: {
//     margin: 20,
//   },
//   search: {
//     borderRadius: 10,
//     margin: 20,
//     height: 50,
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     backgroundColor: "white",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   headerStyle: {
//     backgroundColor: "brown",
//   },
//   back: {
//     backgroundColor: "#000",
//   },
// };
