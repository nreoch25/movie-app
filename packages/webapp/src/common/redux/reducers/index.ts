import { combineReducers } from 'redux';
import init, { InitState } from './init.reducer';
import landing, { LandingState } from '@features/Landing/redux/reducers/index';
import movies, {
	MovieDetailState,
} from '@features/Details/redux/reducers/movieDetail.reducer';

export interface MovieAppReduxState {
	init: Readonly<InitState>;
	landing: Readonly<LandingState>;
	movies: Readonly<MovieDetailState>;
}

export default combineReducers({
	init,
	landing,
	movies,
});
