import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { globalStyles } from "../styles/globalStyles";

export default function Filter({ onRegionChange }: FilterProps) {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "0", value: "" },
    { key: "1", value: "Africa" },
    { key: "2", value: "Americas" },
    { key: "3", value: "Asia" },
    { key: "4", value: "Europe" },
    { key: "5", value: "Oceania" },
  ];
  //   Filter by Region
  return (
    <View style={globalStyles.filter}>
      <SelectList
        setSelected={(val: any) => onRegionChange(val)}
        data={data}
        save="value"
        maxHeight={100}
      />
    </View>
  );
}
