export function currentUser(oldStore, options) {
    const {users} = oldStore;
    return Promise.resolve().then(_ => {
        return Object.assign({}, oldStore, {
            currentUser,
        });
    });
}

