export const state = () => ({
    showingCreateModal: false,
})

export const mutations = {
  UPDATE_CREATE_MODAL() {
    state.showingCreateModal = !showingCreateModal
  }
}

export const actions = {
  updateCreateModal({commit}) {
    commit("showingCreateModal")
  }
}

export const getters = {
  isShowingCreateModal(state) {
    return state.showingCreateModal
  }
}

export const modules = {

}
