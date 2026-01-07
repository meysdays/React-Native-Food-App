import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import CustomText from "./text";
import { theme } from "@/constants/theme";
import TabIcon from "./tab-icon";
import { searchIcon } from "@/assets/icons";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label?: string;
  multiline?: boolean;
  className?: string;
}

const InputField = ({
  placeholder = "Enter a text ...",
  value,
  onChangeText,
  label,
  // multiline = false,
  className
}: InputProps) => {
  return (
    <View>
      <CustomText fontSize="lg" fontFamily="medium" color={theme.colors.gray[500]}>{label}</CustomText>

      <View className="mr-3 bg-[#8492AD1A] rounded-2xl h-14 flex-row items-center px-3">

      <TabIcon className="" name="search" Icon={searchIcon}/>
      
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        // multiline={multiline}
        className=""
        autoCapitalize="sentences"
        autoCorrect
        inputMode="text"
        cursorColor={"#000"}
        
      />
      </View>

    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    gap: theme.sizes.spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.gray[50],
    borderRadius: 18,
    padding: theme.sizes.spacing.md,
    height: 64,
    fontFamily: 'regular',
    fontSize: theme.sizes.text.lg,
    flexGrow:1,
    flexShrink:1,
  },
});
