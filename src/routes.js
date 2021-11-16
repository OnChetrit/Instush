import { HomePage } from './js/pages/HomePage'
import { UserProfile } from './js/pages/UserProfile'
import { PostDetails } from './js/pages/PostDetails'

const routes = [
    {
        path: '/post/:postId',
        component: PostDetails,
    },
    {
        path: '/:username',
        component: UserProfile,
    },
    {
        path: '/',
        component: HomePage,
    }
]

export default routes;