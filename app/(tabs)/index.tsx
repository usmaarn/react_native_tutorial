import { images } from "@/assets/constants/images";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { Clapperboard } from "lucide-react-native";
import React from "react";
import { Image, ScrollView, View } from "react-native";

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <Image source={images.bg} className="w-full absolute z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View className="mt-10 mx-auto mb-5">
          <Clapperboard width={35} height={35} />
        </View>
        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Enter movie to search..."
        />
      </ScrollView>
    </View>
  );
};

export default Index;
