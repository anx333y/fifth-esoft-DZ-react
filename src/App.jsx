import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { NotFoundPage } from './pages/NotFoundPage';
import { FilmPage } from './pages/FilmPage';
import { MainPage } from './pages/MainPage';
import SearchPage from './pages/SearchPage';

import { Provider } from 'react-redux';
import store from './store/store.js';

import { ThemeProvider } from '@mui/material';
import appTheme from './themes/appTheme.js';

function App() {

  return (
		<ThemeProvider theme={appTheme}>
			<Provider store={store}>
				<BrowserRouter basename={import.meta.env.BASE_URL}>
					<Routes>
						<Route path='/' element={<MainLayout />}>
							<Route path='/' element={<MainPage />} />
							<Route path='/film/:filmId' element={<FilmPage />}/>
							<Route path='/search' element={<SearchPage />} />
						</Route>
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
  )
}

export default App
