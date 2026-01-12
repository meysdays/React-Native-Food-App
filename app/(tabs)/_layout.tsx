import { View, Text } from 'react-native'
import React, { SVGProps } from 'react'
import { Tabs } from 'expo-router'
import { theme } from '@/constants/theme'
import {SvgProps} from 'react-native-svg'
import { DiscoverIcon, DriveThru, HomeIcon, OrdersIcon, ProfileIcon } from '@/assets/icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TabIcon } from '@/components/ui'


const TabsLayout = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: theme.colors.background,
        },
        headerShown: false,
        tabBarStyle: {
          width: "100%",
          borderTopWidth: 0,
          elevation: 0,
          // paddingTop: theme.sizes.spacing.lg,
          paddingBottom: bottom,
        },
        tabBarIconStyle: {
          flex: 1,
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              name="home"
              Icon={HomeIcon}
              focused={focused}
              size={28}
            />
          ),
          //  tabBarShowLabel: false,
          // tabBarIconStyle: {
          //   flex: 1,
          // },
          // tabBarItemStyle: {
          //   width: "100%",
          // },
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="discover" size={28} Icon={DiscoverIcon} focused={focused} />
          ),
          // tabBarShowLabel: false,
        }}
      />

      <Tabs.Screen
        name="drivethru"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="drivethru" Icon={DriveThru} focused={focused} size={28} />
          ),
          // tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="orders" Icon={OrdersIcon} focused={focused} size={28} />
          ),
          // tabBarShowLabel: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="profile" Icon={ProfileIcon} focused={focused} size={28}/>
          ),
          // tabBarShowLabel: false,
        }}
      />
    </Tabs>
  )
}

interface TabIconProps {
  name: string;
  Icon: React.FC<SvgProps>
  focused: boolean;
}

// function TabIcon({name, Icon, focused}: TabIconProps) {
//   const {sizes} = theme;
//   const itemWidth = sizes.screen.width / 12;

//   return(
//     <View
//       className='items-center justify-center gap-2'
//       style={[
//         {
//           width: itemWidth,
//           height: "auto",
//         }
//       ]}
//     >
//       <Icon
//         height={34}
//         width={28}
//         fill={focused ? theme.colors.main : "transparent"}
//         strokeWidth={1.5}
//         stroke={
//           focused ? theme.colors.white : theme.colors.gray[300]
//         }
//       />
  
//     </View>
//   )
// }

export default TabsLayout