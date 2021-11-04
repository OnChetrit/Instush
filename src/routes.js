import { HomePage } from './js/pages/HomePage'
import { UserDetails } from './js/pages/UserDetails'
import { PostDetails } from './js/pages/PostDetails'
import { Login } from './js/pages/Login'

const routes = [
    {
        path: '/post/:postId',
        component: PostDetails,
    },
    {
        path: '/:username',
        component: UserDetails,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: HomePage,
    }
]

export default routes;