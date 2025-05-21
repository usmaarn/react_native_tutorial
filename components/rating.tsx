import { View } from "react-native";
import React from "react";
import { StarIcon } from "lucide-react-native";

export default function Rating({ rating }: { rating: number }) {
  return (
    <View className="flex-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          width={10}
          height={10}
          fill={i < rating ? "black" : "transparent"}
        />
      ))}
    </View>
  );
}
