// export function currentUser(oldStore, options) {
//     const {users} = oldStore;
//     return Promise.resolve().then(_ => {
//         return Object.assign({}, oldStore, {
//             currentUser,
//         });
//     });
// }

export function getSearchQuery(oldStore, options) {
    const {searchQuery} = oldStore;
    return Promise.resolve().then(_ => {
        return Object.assign({}, oldStore, {
            getSearchQuery,
        });
    });
}

