import { Stack } from "expo-router";

import React from "react";

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="+not-found.tsx" />
      <Stack.Screen name="Aboutus" />
    </Stack>
  );
};
export default MainLayout;
