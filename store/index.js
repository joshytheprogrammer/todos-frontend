export const state = () => ({
    showingCreateModal: true,
})

export const mutations = {
  TOGGLE_CREATE_MODAL() {
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
