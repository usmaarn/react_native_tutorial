import { images } from "@/assets/constants/images";
import MovieCard from "@/components/movie-card";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/api";
import { useFetch } from "@/services/use-fetch";
import { useRouter } from "expo-router";
import { Clapperboard } from "lucide-react-native";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

const Index = () => {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({}));

  return (
    <View className="flex-1">
      <Image source={images.bg} className="w-full absolute z-0" />
      <View className="mt-10 items-center justify-center gap-3 mx-auto w-full px-5">
        <Clapperboard width={35} height={35} />
        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Enter movie to search..."
        />
      </View>
      {moviesLoading ? (
        <ScrollView
          className="flex-1 px-5"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        >
          <ActivityIndicator size="large" className="mt-10 self-center" />
        </ScrollView>
      ) : moviesError ? (
        <ScrollView
          className="flex-1 px-5"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        >
          <Text>Error: {moviesError?.message}</Text>
        </ScrollView>
      ) : (
        <FlatList
          className="flex-1 px-5 mt-2 pb-32"
          ListHeaderComponent={
            <>
              <Text className="text-lg font-bold mt-5 mb-3">Latest Movies</Text>
            </>
          }
          data={movies}
          renderItem={({ item }) => <MovieCard item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 10,
            paddingRight: 5,
            marginBottom: 16,
          }}
        />
      )}
    </View>
  );
};

export default Index;
