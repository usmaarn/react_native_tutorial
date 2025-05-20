import { Tabs } from "expo-router";
import {
  BookmarkIcon,
  HomeIcon,
  LucideIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const TabBarIcon = (props: {
  icon: LucideIcon;
  label: string;
  focused: boolean;
}) => {
  return (
    <View
      className="flex items-center justify-center min-w-[80px] mt-6"
      style={{ height: 53 }}
    >
      <props.icon
        width={22}
        color={props.focused ? "#111827" : "#9ca3af"}
        strokeWidth={2}
      />
      <Text
        className={`${
          props.focused ? "text-gray-900 font-bold" : "text-gray-500"
        }`}
      >
        {props.label}
      </Text>
    </View>
  );
};

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#f3f4f6",
          borderRadius: 0,
          // marginHorizontal: 20,
          // marginBottom: 36,
          height: 100,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 0,
          borderColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} label="Home" icon={HomeIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} label="Search" icon={SearchIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} label="Saved" icon={BookmarkIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} label="Profile" icon={UserIcon} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
