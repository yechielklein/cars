import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		data: [],
		searchTerm: ''
	},
	reducers: {
		addCar(state, action) {
			state.data.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid()
			});
		},
		removeCar(state, action) {
			state.data = state.data.filter(car => car.id !== action.payload);
		},
		changeTerm(state, action) {
			state.searchTerm = action.payload;
		}
	}
});

export const { addCar, removeCar, changeTerm } = carsSlice.actions;
export default carsSlice.reducer;