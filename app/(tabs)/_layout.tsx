import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
    return (
        <Tabs
        screenOptions={{
            tabBarStyle: { 
                backgroundColor: 'white',
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={24}
                            color={focused ? '#000' : '#666'}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'bag' : 'bag-outline'}
                            size={24}
                            color={focused ? '#000' : '#666'}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'heart' : 'heart-outline'}
                            size={24}
                            color={focused ? '#000' : '#666'}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={24}
                            color={focused ? '#000' : '#666'}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

export default _layout