function loadPage(component) {
    // '@' is aliased to src/components
    return () => import(/* webpackChunkName: "[request]" */
        `@/pages/${component}.vue`)
}
export default [
    { path: '/', component: loadPage('Home') }, //loadpage gets called we pass a string called home, / is root of our app
    { path: '/blog', component: loadPage('Blog') }
]