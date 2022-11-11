export const state = () => ({
    showingCreateModal: false,
})

export const mutations = {
  TOGGLE_CREATE_MODAL(state) {
    state.showingCreateModal = !state.showingCreateModal
  },
  CLOSE_ALL_MODAL(state) {
    state.showingCreateModal = false
  }
}

export const actions = {
  toggleCreateModal({commit}) {
    commit("TOGGLE_CREATE_MODAL")
  },
  closeModal({commit}) {
    commit("CLOSE_ALL_MODAL")
  }
}

export const getters = {
  isShowingCreateModal(state) {
    return state.showingCreateModal
  }
}

export const modules = {

}
