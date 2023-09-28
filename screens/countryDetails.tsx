import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { globalStyles } from "../styles/globalStyles";

type Country = {
  flags: any;
  name: string;
  population: string;
  capital: string;
  region: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: Array<{ name: string }>;
  languages: Array<{ name: string }>;
  borders: string;
  alpha3Code: string;
};

type CountryDetailsProps = {
  route: RouteProp<RootStackParamList, "CountryDetails">;
  navigation: StackNavigationProp<RootStackParamList, "CountryDetails">;
};

export default function CountryDetails({ route }: CountryDetailsProps) {
  // Extract the country data from the route params
  const country: Country = route.params?.country;

  return (
    <ScrollView style={[styles.container, globalStyles.back]}>
      <Image
        source={{ uri: country.flags.png }}
        style={{
          height: 250,
          width: 375,
        }}
        onError={() => {
          console.log("Image failed to load for: ", country.name);
        }}
      />
      <View>
        <Text style={globalStyles.header}>{country.name}</Text>
        <View style={{ marginTop: 30 }}>
          <View style={globalStyles.textStyle}>
            <Text style={globalStyles.mainText}>Native Name: </Text>
            <Text style={globalStyles.subText}>{country.nativeName}</Text>
          </View>
          <View style={globalStyles.textStyle}>
            <Text style={globalStyles.mainText}>Population: </Text>
            <Text style={globalStyles.subText}>
              {Number(country.population).toLocaleString()}
            </Text>
          </View>
          <View style={globalStyles.textStyle}>
            <Text style={globalStyles.mainText}>Region: </Text>
            <Text style={globalStyles.subText}>{country.region}</Text>
          </View>
          <View style={globalStyles.textStyle}>
            <Text style={globalStyles.mainText}>Sub Region: </Text>
            <Text style={globalStyles.subText}>{country.subregion}</Text>
          </View>
          <View style={globalStyles.textStyle}>
            <Text style={globalStyles.mainText}>Capital: </Text>
            <Text style={globalStyles.subText}>{country.capital}</Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={globalStyles.textStyle}>
            <Text style={globalStyles.mainText}>Top Level Domain: </Text>
            <Text style={globalStyles.subText}>{country.topLevelDomain}</Text>
          </View>
          <View style={globalStyles.textStyle}>
            <Text style={globalStyles.mainText}>Currencies: </Text>
            <View>
              {country.currencies?.map((currency, index) => (
                <Text style={globalStyles.subText} key={index}>
                  {currency.name}
                </Text>
              ))}
            </View>
          </View>
          <View style={globalStyles.textStyle}>
            <Text style={globalStyles.mainText}>Languages: </Text>
            <View style={{ flexDirection: "row" }}>
              {country.languages?.map((language, index) => (
                <Text style={globalStyles.subText} key={index}>
                  {language.name},
                </Text>
              ))}
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Border Countries:
          </Text>
          <ScrollView
            style={{
              flexDirection: "row",
              paddingTop: 20,
              paddingBottom: 20,
            }}
            horizontal={true}
          >
            {Array.isArray(country.borders)
              ? country.borders
                  .filter((border) => !!border)
                  .map((border, index) => (
                    <Text
                      style={[
                        globalStyles.subText,
                        globalStyles.borderCountries,
                      ]}
                      key={index}
                    >
                      {border}
                    </Text>
                  ))
              : null}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
