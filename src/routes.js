import { HomePage } from './js/pages/HomePage'
import { UserProfile } from './js/pages/UserProfile'
import { PostDetails } from './js/pages/PostDetails'
import { Activity } from './js/pages/Activity';
import { Direct } from './js/pages/Direct';
import { Explore } from './js/pages/Explore';

const routes = [
    {
        path: '/activity',
        component: Activity,
    },
    {
        path: '/direct',
        component: Direct,
    },
    {
        path: '/explore',
        component: Explore,
    },
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