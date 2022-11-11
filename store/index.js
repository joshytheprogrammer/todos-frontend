export const state = () => ({
    showingCreateModal: false,
    showingTaskModal: false,
})

export const mutations = {
  TOGGLE_CREATE_MODAL(state) {
    state.showingCreateModal = !state.showingCreateModal
  },
  TOGGLE_TASK_MODAL(state) {
    state.showingTaskModal = !state.showingTaskModal
  },
  CLOSE_ALL_MODAL(state) {
    state.showingCreateModal = false
    state.showingTaskModal = false
  }
}

export const actions = {
  toggleCreateModal({commit}) {
    commit("TOGGLE_CREATE_MODAL")
  },
  toggleTaskModal({commit}) {
    commit("TOGGLE_TASK_MODAL")
  },
  closeModal({commit}) {
    commit("CLOSE_ALL_MODAL")
  }
}

export const getters = {
  isShowingCreateModal(state) {
    return state.showingCreateModal
  },
  isShowingTaskModal(state) {
    return state.showingTaskModal
  }
}

export const modules = {

}
