import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import SongSearch from './components/SongSearch';
import SelectsAnidados from './components/SelectsAnidados';

export default function App() {
	return (
		<>
			<h2>Ejercicios con React</h2>
			<SelectsAnidados />
			<hr />
			<SongSearch />
			<hr />
			<CrudApi />
			<hr />
			<CrudApp />
		</>
	);
}
