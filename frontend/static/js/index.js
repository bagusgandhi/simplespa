const navTo = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [
        {path: "/", view: () => console.log("dashboard")},
        {path: "/posts", view: () => console.log("posts")},
        {path: "/settings", view: () => console.log("settings")},
    ]

    const matches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        }
    })
    let match = matches.find(matches=>matches.isMatch)
    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    console.log(match.route.view())
}
window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault()
            navTo(e.target.href)
        }
    })
})