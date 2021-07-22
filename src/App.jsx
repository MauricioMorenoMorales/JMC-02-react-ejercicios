import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import SongSearch from './components/SongSearch';

export default function App() {
	return (
		<>
			<h2>Ejercicios con React</h2>
			<SongSearch />
			<hr />
			<CrudApi />
			<hr />
			<CrudApp />
		</>
	);
}
