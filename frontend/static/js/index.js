import Dashboard from "./views/Dashboard.js"
import Posts from "./views/Posts.js"
import Settings from "./views/Settings.js"
import PostView from "./views/PostView.js"

// const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

const getParam = match => {
    // const values = match.result.slice(1)
    // const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1])
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)))

    // return Object.fromEntries(keys.map((key, i) => {
    //     return [key, values[i]]
    // }))
    // return {}
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}

const navTo = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    // console.log(pathToRegex("/posts/:id"))
    const routes = [
        {path: "/", view: Dashboard},
        {path: "/posts", view: Posts},
        {path: "/posts/:id", view: PostView },
        {path: "/settings", view: Settings},
    ]

    const matches = routes.map(route => {
        return{
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    })

    let match = matches.find(matches=>matches.result !== null)

    if(!match){
        match = {
            // route: routes[0],
            // isMatch: true
            route: routes[0],
            result: [location.pathname]
        }
    }
    // console.log(match.route.view())
    const view = new match.route.view(getParam(match))

    document.querySelector('#app').innerHTML = await view.getHtml()
}
window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener("click", e => {
        if(e.target.matches("[linked]")){
            e.preventDefault()
            navTo(e.target.href)
        }
    })

    router()
})