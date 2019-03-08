export const updateProfile = (name, budget) => {
  // return action
  return {
    type: 'UPDATE_PROFILE', // type is required for all actions
    name,
    budget
  }
}

