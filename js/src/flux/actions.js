import { currentUser } from './reducers';

export const actions = {
	'CURRENT_USER': (oldStore, options) => currentUser(oldStore, options),
}
