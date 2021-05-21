import './styles/styles.scss';
import LoginPages from './pages/loginPages/LoginPages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePages from './pages/homePages/HomePages';
import FavoritesPages from './pages/favoritesPages/FavoritesPages';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPages}></Route>
          <Layout>
            <Route path='/home' exact component={HomePages} ></Route>
            <Route path='/favorites' exact component={FavoritesPages} ></Route>
          </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
