import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from '../pages/Order';
import Publication from '../pages/Publication';
import Repository from '../pages/Repository';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import OrderDetail from '../pages/OrderDetail';


const Tab = createBottomTabNavigator<MyStackParamList>();
const Stack = createStackNavigator<StackOrderParamList>();


const StackNavigator= () => {
    return (
      <Stack.Navigator
        initialRouteName="OrderStack"
        screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen
         name="OrderStack" component={Order} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
      </Stack.Navigator>
    );
  }

const BottomNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                    initialRouteName="Order"
                    screenOptions={{
                        tabBarStyle: { backgroundColor: '#039FE1',height: 80 },
                        tabBarActiveTintColor: '#FFFFFF',
                        tabBarInactiveTintColor: '#000000',
                        
                      }}
                >
                <Tab.Screen name="Order" component={StackNavigator} 
                    options={{
                        title: 'Commandes',
                        headerStyle: {
                            backgroundColor: '#039FE1',
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                        tabBarLabelStyle:{fontSize:16},
                        tabBarLabel: 'Commandes',
                        tabBarIcon: ({color}) => (
                          <MaterialIcons name="menu-book"color={color} size={35} />
                        ),
                        headerRight: () => (
                            <Ionicons size={25} color='white' style={{paddingEnd:10}} name='menu' onPress={()=>{alert('This is a button!')}}></Ionicons>
                        ),
                      }}
                />
                <Tab.Screen name="Publication" component={Publication} 
                    options={{
                        title: 'Publications',
                        headerStyle: {
                            backgroundColor: '#039FE1',
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                        tabBarLabelStyle:{fontSize:16},
                        tabBarLabel: 'Publications',
                        tabBarIcon: ({color}) => (
                          <MaterialIcons name="my-library-books"color={color} size={35} />
                        ),
                        headerRight: () => (
                            <Ionicons size={25} color='white' style={{paddingEnd:10}} name='menu' onPress={()=>{alert('This is a button!')}}></Ionicons>
                          ),
                      }}
                />
                <Tab.Screen name="Repository" component={Repository} 
                    options={{
                        title: 'Répertoire',
                        headerStyle: {
                            backgroundColor: '#039FE1',
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                        tabBarLabelStyle:{fontSize:16},
                        tabBarLabel: 'Répertoire',
                        tabBarIcon: ({color}) => (
                          <FontAwesome name="user"color={color} size={35} />
                        ),
                      }}
                />
            </Tab.Navigator>
        </NavigationContainer>
      );
}

export default BottomNavigation