export const state = () => ({
    navOpen: false
})

export const mutations = {
    TOGGLE_NAV (state) {
        state.navOpen = !state.navOpen;
        console.log(state.navOpen);
    }
}