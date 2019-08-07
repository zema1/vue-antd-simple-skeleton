const app = {
  state: {
    device: 'desktop',
  },
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
  },
  actions: {}
};

export default app;
