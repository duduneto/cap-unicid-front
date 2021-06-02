import { configureStore } from '@reduxjs/toolkit';
import { 
    auth as authReducer,
    posts as postsReducer
 } from './features'

export default configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer
    }
})