import { fetchMovieDetails } from "@/services/api";
import { useFetch } from "@/services/use-fetch";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const {
    data: movie,
    loading,
    error,
  } = useFetch(() => fetchMovieDetails(id as string));

  return (
    <View className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            className="w-full h-[450px]"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            resizeMode="stretch"
          />
        </View>
        <View className="justify-center mt-5 px-5 gap-5">
          <Text className="font-bold text-xl text-white">{movie?.title}</Text>
          <TouchableOpacity
            className="flex-row items-center gap-3 justify-center bg-gray-900 py-4 rounded-xl"
            onPress={router.back}
          >
            <ArrowLeft color="#ffffff" />
            <Text className="text-white">Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
