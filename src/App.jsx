import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';
import SongSearch from './components/SongSearch';
import SelectsAnidados from './components/SelectsAnidados';
import ContactForm from './components/ContactForm';

export default function App() {
	return (
		<>
			<h2>Ejercicios con React</h2>
			<ContactForm />
			<hr />
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
