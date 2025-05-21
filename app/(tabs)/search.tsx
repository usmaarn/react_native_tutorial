import { images } from "@/assets/constants/images";
import MovieCard from "@/components/movie-card";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/api";
import { useFetch } from "@/services/use-fetch";
import { Clapperboard } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading,
    error,
    run: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery.trim() }), false);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (searchQuery.trim()) {
        console.log(movies);
        await loadMovies();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchQuery]);

  return (
    <View className="flex-1">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" />
      <FlatList
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-12 items-center">
              <Clapperboard width={35} height={35} />
            </View>
            <View className="my-5">
              <SearchBar
                value={searchQuery}
                onChangeText={(v) => setSearchQuery(v)}
                placeholder="Search movies..."
              />
            </View>
            {loading && <ActivityIndicator size="large" className="my-3" />}
            {error && (
              <Text className="my-3 text-red-600">{error.message}</Text>
            )}
            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className="">
                Search Result for{" "}
                <Text className="font-black">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        className="px-5"
        keyExtractor={(item) => item.id}
        data={movies}
        renderItem={({ item }) => <MovieCard item={item} />}
        numColumns={3}
        columnWrapperClassName="gap-4 justify-center my-3"
        contentContainerClassName="pb-32"
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-black">
                {searchQuery.trim() ? "No movies found" : "Search for movies"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
