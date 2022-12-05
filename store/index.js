export const state = () => ({
  mobile: true,
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
  isMobile(state) {
    return state.mobile
  },
}

export const modules = {

}
