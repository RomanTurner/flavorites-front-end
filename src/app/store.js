import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import recipesReducer from '../features/recipes/recipesSlice';
import sessionReducer from "../features/session/sessionSlice";
import plansReducer from "../features/plans/plansSlice";
import userPlansReducer from "../features/user-plans/userPlanSlice"

export const store = configureStore({
  reducer: {
    userPlans: userPlansReducer,
    session: sessionReducer,
    users: usersReducer,
    recipes: recipesReducer,
    plans: plansReducer,
  },
});
