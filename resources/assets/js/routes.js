import VueRouter from 'vue-router';


let routes = [
    {
        path : '/',
        components : require('./components/views/Home')
    },
    {
        path : '/about',
        components : require('./components/views/About')
    }
];
export default new VueRouter({
    routes,
    linkActiveClass : 'is-active'
})