import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import ListCustomers from './ListCustomers';
import CustomerScreen from './CustomerScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs(){
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarActivateBackgroundColor:'Orange'
            }}
        >
            <Tab.Screen name="Customers" component={CustomerScreen} options={{
                title:"Cliente",
                tabBarIcon:({ color })=>(
                <MaterialIcons.Icon name="person" color="blue" size={26}/>
                )
            }} />
            <Tab.Screen name="List" component={ListCustomers} options={{
                title:"Listar Clientes",
                tabBarIcon:({ color })=>(
                <MaterialIcons.Icon name="view-list" color="blue" size={26}/>
                )
            }}/>
        </Tab.Navigator>
    )
}
