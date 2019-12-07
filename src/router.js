import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Users from './components/Users.vue';
import UsersPosts from './components/UsersPosts.vue'
import UsersProfile from './components/UsersProfile.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            name: 'home',
            path: '/',
            component: Home,
            beforeEnter(to, from, next) {
                console.log('query:', to.query.id)
                if (to.query.id === 'hoge') {
                    next(false)
                }
                next()
            }
        },
        {
            name: 'users',
            path: '/users/:id/',
            props: true, // コンポーネントのprops[id]に:idが渡る
            component: Users,
            children: [{
                    name: 'posts',
                    path: 'posts/',
                    component: UsersPosts,
                    props: true
                },
                {
                    name: 'profile',
                    path: 'profile/',
                    component: UsersProfile,
                    props: true
                }
            ]
        },
        {
            path: '*',
            redirect: {
                name: 'home'
            }
        }
    ]
})