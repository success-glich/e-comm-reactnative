import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={
            {
              headerShown: false
            }
          }
        />

        <Stack.Screen name="About" component={About}
        />
        <Stack.Screen name="mobile" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;