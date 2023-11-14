import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from '../pages/Order';
import Publication from '../pages/Publication';
import Repository from '../pages/Repository';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator<MyStackParamList>();


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
                <Tab.Screen name="Order" component={Order} 
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