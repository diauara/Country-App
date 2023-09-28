import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { globalStyles } from "../styles/globalStyles";

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <View style={globalStyles.search}>
      <Ionicons
        name="search-sharp"
        size={24}
        style={{ paddingHorizontal: 24 }}
        color={"#ddd"}
      />
      <TextInput
        placeholder="Search for a country..."
        value={searchQuery}
        onChangeText={handleSearch}
        keyboardType="default"
        style={globalStyles.textInput}
      />
    </View>
  );
}
