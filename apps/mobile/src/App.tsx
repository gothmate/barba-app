import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { UserProvider } from "./data/contexts/UserContext"
import { ProvedorAgendamento } from "./data/contexts/ContextoAgendamento"
import Cadastro from "./screens/Cadastro"
import { NavigationContainer } from "@react-navigation/native"
import Principal from "./screens/Principal"
import Summary from "./screens/Summary"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <UserProvider>
      <ProvedorAgendamento>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
            <Stack.Screen name="Sumário" component={Summary} />
          </Stack.Navigator>
        </NavigationContainer>
      </ProvedorAgendamento>
    </UserProvider>
  )
}
