import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Rating from "./rating";

const MovieCard = ({ item }: { item: any }) => {
  const rating = Math.floor(item.vote_average / 2);
  return (
    <Link href={`/movie/${item.id}`} asChild>
      <TouchableOpacity className="w-[32%]">
        <Image
          source={{
            uri: item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "https://placeholder.co/600x600/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold" numberOfLines={1}>
          {item.title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Rating rating={rating} />
          <Text className="font-bold text-sm">{rating}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-sm font-medium">
            {item.release_date.split("-")[0]}
          </Text>
          <Text className="text-sm font-medium">Movie</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
