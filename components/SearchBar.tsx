import { SearchIcon } from "lucide-react-native";
import React from "react";
import { TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row gap-2 items-center bg-gray-50 px-2 rounded-md">
      <SearchIcon width={18} />
      <TextInput
        placeholder={placeholder}
        onPress={onPress}
        value=""
        onChangeText={() => {}}
        className="grow "
      />
    </View>
  );
};

export default SearchBar;
