import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import ProductDetail from './screens/ProductDetail';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}
          options={
            {
              headerShown: false
            }
          }
        />

        <Stack.Screen name="about" component={About}
        />
        <Stack.Screen name="mobile" component={About} />
        <Stack.Screen name="productDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;