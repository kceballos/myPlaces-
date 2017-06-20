// import { currentUser } from './reducers';

// export const actions = {
// 	'CURRENT_USER': (oldStore, options) => currentUser(oldStore, options),
// }
import { getSearchQuery } from './reducers';

export const actions = {
	'SEARCH_QUERY': (oldStore, options) => getSearchQuery(oldStore, options),
}