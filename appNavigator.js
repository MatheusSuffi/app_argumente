import { createStackNavigator } from 'react-navigation';
  import Index from './views/Index';
  import Faleconosco from './views/Faleconosco';
  import Login from './views/Login';
  import Perfil from './views/Perfil';
  import RedacaoSemana from './views/RedacaoSemana';
  import Register from './views/Register';

  const AppNavigator = createStackNavigator({
    Index: { screen: Index },
    Faleconosco: { screen: Faleconosco },
    Login: { screen: Login },
    Perfil: { screen: Perfil },
    RedacaoSemana: { screen: RedacaoSemana },
    Register: { screen: Register },
    Home: { screen: Home },
  });

  export default AppNavigator;