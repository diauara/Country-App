import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";

import { globalStyles } from "../styles/globalStyles";
import Search from "./search";
import Filter from "./filter";

type Country = {
  flags: any;
  name: string;
  population: string;
  capital: string;
  region: string;
  alpha3Code: string;
  borders: string[];
};

export default function CountryComponent() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all?");
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleSearch = (query) => {
    // Filter countries based on the search query
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    // Filter countries based on the selected region
    const filtered = countries.filter((country) =>
      region === "" ? true : country.region === region
    );
    setFilteredCountries(filtered);
  };

  return (
    <View style={styles.container}>
      <Search onSearch={handleSearch} />
      <Filter onRegionChange={handleRegionChange} />
      {isLoading ? (
        <ActivityIndicator style={{ paddingTop: 20 }} />
      ) : (
        <FlatList
          data={filteredCountries}
          scrollEnabled={false}
          keyExtractor={({ alpha3Code }) => alpha3Code}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CountryDetails", {
                  country: item,
                  title: item.name,
                })
              }
            >
              <View style={globalStyles.component}>
                <Image
                  source={{ uri: item.flags.png }}
                  style={{
                    height: 200,
                    width: 375,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  onError={() => {
                    console.log("Image failed to load for: ", " ", item.name);
                  }}
                />
                <View style={globalStyles.countryDetails}>
                  <Text style={globalStyles.header}>{item.name}</Text>
                  <View style={styles.textStyle}>
                    <Text style={globalStyles.mainText}>Population: </Text>
                    <Text style={globalStyles.subText}>
                      {Number(item.population).toLocaleString()}
                    </Text>
                  </View>
                  <View style={styles.textStyle}>
                    <Text style={globalStyles.mainText}>Region: </Text>
                    <Text style={globalStyles.subText}>{item.region}</Text>
                  </View>
                  <View style={styles.textStyle}>
                    <Text style={globalStyles.mainText}>Capital: </Text>
                    <Text style={globalStyles.subText}>{item.capital}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  textStyle: {
    flexDirection: "row",
  },
});
