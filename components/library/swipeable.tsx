import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { TabIcon } from "../ui";
import { DeleteIcon, EditIcon } from "@/assets/icons";

interface CardProps {
  title?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  children: React.ReactNode
}

const SwipeCard = ({ title, onEdit, onDelete, children }: CardProps) => {
  const renderRightActions = () => {
    return (
      <View className="flex-row items-center w-1/4 justify-between">
        <Pressable className="justify-center items-center size-10 rounded-xl bg-[#DAFAE5]" onPress={onEdit}>
          {/* <Text style={styles.actionText}>Edit</Text> */}
          <TabIcon
          name="edit"
          Icon={EditIcon}
          />
        </Pressable>

        <Pressable className="justify-center items-center size-10 rounded-xl bg-[#FBE7E7]" onPress={onDelete}>
          {/* <Text style={styles.actionText}>Delete</Text> */}
          <TabIcon
          name="delete"
          Icon={DeleteIcon}
          />
        </Pressable>
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View>
        {children}
      </View>
    </Swipeable>
  );
};

export default SwipeCard;


const styles = StyleSheet.create({

  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  action: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
  },

  edit: {
    backgroundColor: "#4caf50",
  },

  delete: {
    backgroundColor: "#f44336",
  },

  actionText: {
    color: "#fff",
    fontWeight: "bold",
  },
});