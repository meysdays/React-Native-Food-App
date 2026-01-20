import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "@/components/providers/auth-context";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const LoginScreen = () => {
  const { top } = useSafeAreaInsets();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { register  } = useAuth();

  const handleSubmit = async (
    email: string,
    password: string,
    name: string,
  ) => {
    try {
      await register(email, password, name);
      router.back();
    } catch (error) {
        console.log(error, "register fail?");
        
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#F8FBFF" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          //   className="flex-1"
        >
          <View className="flex-1  bg-[#F8FBFF]" style={{ paddingTop: top }}>
            <View>
              <View className="mx-8 my-16">
                <Text className="text-2xl font-medium">Create an account</Text>
                <Text>
                  Welcome friend, enter your details so lets get started in
                  ordering food.
                </Text>
              </View>

              <View className="mx-6 flex ">
                <View className="mb-5">
                  <Text className="mx-6">Email Address</Text>
                  <TextInput
                    placeholder="Enter email"
                    value={email}
                    onChangeText={setEmail}
                    className="rounded-2xl bg-[#FFFFFF] border border-[#DFE2E5] h-14 px-6 mt-3"
                  />
                </View>
                <View className="mb-5">
                  <Text className="mx-6">Password</Text>
                  <TextInput
                    placeholder="Enter password"
                    value={password}
                    onChangeText={setPassword}
                    className="rounded-2xl bg-[#FFFFFF] border border-[#DFE2E5] h-14 px-6 mt-3"
                  />
                </View>
                <View className="mb-5">
                  <Text className="mx-6">Confirm Password</Text>
                  <TextInput
                    placeholder="Confirm password"
                    value={rePassword}
                    onChangeText={setRePassword}
                    className="rounded-2xl bg-[#FFFFFF] border border-[#DFE2E5] h-14 px-6 mt-3"
                  />
                </View>
                <View className="mb-5">
                  <Text className="mx-6">Name</Text>
                  <TextInput
                    placeholder="Enter name"
                    value={name}
                    onChangeText={setName}
                    className="rounded-2xl bg-[#FFFFFF] border border-[#DFE2E5] h-14 px-6 mt-3"
                  />
                </View>
              </View>

              <View className="">
                <Pressable
                  className="bg-[#FF774C] items-center mx-4 rounded-3xl py-5 my-6 "
                  onPress={() => handleSubmit(email, password, name)}
                >
                  <Text className="text-sm font-semibold text-white">
                    Creat an account
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
