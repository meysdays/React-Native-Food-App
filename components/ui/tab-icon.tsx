import { View, Text } from 'react-native'
import React from 'react'
import { SvgProps } from 'react-native-svg';
import { theme } from '@/constants/theme';

interface TabIconProps {
  name: string;
  Icon: React.FC<SvgProps>
  focused?: boolean;
  className?: string;
}

const TabIcon = ({ name, Icon, className, focused }: TabIconProps) => {
    const {sizes} = theme;
    const itemWidth = sizes.screen.width / 16;
  return (
    <View className={className}
      style={[
        {
          width: itemWidth,
          height: "auto",
        }
      ]}
    >
      <Icon
        height={20}
        width={20}
        fill={focused ? "red" : "transparent"}
      />
    </View>
  )
}

export default TabIcon