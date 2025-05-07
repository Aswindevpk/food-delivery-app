import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const categories = [
  { label: 'Meats', icon: 'food-steak' },
  { label: 'Fresh', icon: 'leaf' },
  { label: 'Bakery', icon: 'bread-slice' },
  { label: 'Grains', icon: 'sack' },
  { label: 'Organic', icon: 'sprout' },
]

export default function Index() {
  return (
    <ScrollView className="bg-light p-4 flex flex-col">

      {/* Header */}
      <View className="flex flex-row justify-between items-center">
        <View className="flex-row gap-2 items-center">
          <Ionicons className="p-4 rounded-full bg-white" name="location-outline" size={24} color="black" />
          <View>
            <Text className="text-xs text-muted">Delivery location</Text>
            <Text className="text-lg text-dark font-semibold">Green Valley Point</Text>
          </View>
        </View>
        <View className="flex-row gap-2">
          <Ionicons className="p-4 rounded-full bg-white" name="search" size={24} color="black" />
          <Ionicons className="p-4 rounded-full bg-white" name="notifications-outline" size={24} color="black" />
        </View>
      </View>


      {/* Toggle Buttons */}
      <View className="flex-row mt-4 mb-4 bg-white rounded-full p-1">
        <TouchableOpacity className="bg-white flex-1 rounded-full w-1/2 px-4 py-4 mr-2 flex-row items-center">
          <Ionicons name="bicycle" size={24} color="black" />
          <Text className="ml-2 font-semibold text-black">Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-light flex-1 rounded-full w-1/2 px-4 py-4 flex-row items-center">
          <Ionicons name="walk" size={24} color="gray" />
          <Text className="ml-2 text-gray-500">Pickup</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
        {categories.map((cat) => (
          <View key={cat.label} className="flex items-center mr-2">
            <MaterialCommunityIcons className="p-6 rounded-full bg-white" name={cat.icon as any} size={28} color="black" />
            <Text className="text-medium font-bold mt-2">{cat.label}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Section Header */}
      <View className="flex-row justify-between items-center mb-2 mt-4">
        <Text className="text-2xl font-semibold">Popular items</Text>
        <Text className="text-sm text-gray-500">See All</Text>
      </View>

      {/* Product Card */}
      <View className="bg-white rounded-3xl mb-5 mt-4 overflow-hidden">
        <Image
          source={require('../../assets/images/food-1.jpg')}
          className="w-full h-[200px]"
        />
        <View className="p-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-bold mb-1">Farm Fresh Produce</Text>
            <View className="flex-row items-center">
              <Ionicons name="star" size={16} color="gold" />
              <Text className="ml-1 text-sm text-gray-700">4.5</Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-xl font-bold">$10.00</Text>
            <Text className="text-sm font-bold bg-light px-2 py-1 rounded-full text-muted">Discount 5%</Text>
          </View>

          <View className="flex-row justify-between items-center border-t border-light pt-2">
            <View className="flex-row items-center">
              <Ionicons name="basket-outline" size={14} />
              <Text className="ml-1 text-sm">Delivered</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="time-outline" size={14} />
              <Text className="ml-1 text-sm">Time 10 min</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Product Card */}
      <View className="bg-white rounded-3xl mb-5 mt-4 overflow-hidden">
        <Image
          source={require('../../assets/images/food-1.jpg')}
          className="w-full h-[200px]"
        />
        <View className="p-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-bold mb-1">Farm Fresh Produce</Text>
            <View className="flex-row items-center">
              <Ionicons name="star" size={16} color="gold" />
              <Text className="ml-1 text-sm text-gray-700">4.5</Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-xl font-bold">$10.00</Text>
            <Text className="text-sm font-bold bg-light px-2 py-1 rounded-full text-muted">Discount 5%</Text>
          </View>

          <View className="flex-row justify-between items-center border-t border-light pt-2">
            <View className="flex-row items-center">
              <Ionicons name="basket-outline" size={14} />
              <Text className="ml-1 text-sm">Delivered</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="time-outline" size={14} />
              <Text className="ml-1 text-sm">Time 10 min</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
