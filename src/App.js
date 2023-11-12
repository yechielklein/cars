import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";

const App = () => {
	return (
		<div className="container">
			<CarForm />
			<CarSearch />
			<CarList />
			<CarValue />
		</div>
	);
};

export default App;