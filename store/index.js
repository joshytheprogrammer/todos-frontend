export const state = () => ({
    showingCreateModal: false,
})

export const mutations = {
  TOGGLE_CREATE_MODAL(state) {
    state.showingCreateModal = !state.showingCreateModal
  }
}

export const actions = {
  toggleCreateModal({commit}) {
    commit("TOGGLE_CREATE_MODAL")
  }
}

export const getters = {
  isShowingCreateModal(state) {
    console.log(state.showingCreateModal)
    return state.showingCreateModal
  }
}

export const modules = {

}
