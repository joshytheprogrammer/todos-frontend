export const state = () => ({
  isMobile: true,
})

export const mutations = {
  CHECK_WIDTH(state) {
    let w = window.innerWidth

    // If statement to check width
    w > 768 ? state.isMobile = false : state.isMobile = true

    return
  },
}

export const actions = {
  checkWidth({commit}) {
    commit("CHECK_WIDTH")
  }
}

export const getters = {
  getDevice(state) {
    return state.isMobile
  },
}

export const modules = {

}
