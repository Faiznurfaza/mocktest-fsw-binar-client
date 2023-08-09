import { configureStore } from '@reduxjs/toolkit'
import ListSlice from './features/todoSlices'
import LoginChecker from './features/LoginChecker'

export default configureStore({
  reducer: {
    todos: ListSlice,
    loginchecker: LoginChecker,
  }
})