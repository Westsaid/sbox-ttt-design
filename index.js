// Viewlayer
let active
let scoreboard = document.querySelector(".scoreboard")
let shop = document.querySelector(".shop")
document.addEventListener('keydown', (e) => {
    if (e.code == "Tab") {
        e.preventDefault()
        scoreboard.className = "scoreboard fixed open" 
        if (!active) {
            active = document.addEventListener("keyup", e2 => {
                if (e2.code == "Tab") {
                    scoreboard.className = "scoreboard fixed"
                    document.removeEventListener("keyup",active)
                    active = undefined 
                }
            })
        }
    }
    else if (e.code == "KeyB") {
        shop.className = "shop fixed open" 
        if (!active) {
            active = document.addEventListener("keyup", e2 => {
                if (e2.code == "KeyB") {
                    shop.className = "shop fixed"
                    document.removeEventListener("keyup",active)
                    active = undefined 
                }
            })
        }
    }
});


// Shop
let activeItem
document.querySelectorAll(".shop .item").forEach(item => {
    item.onclick = (e) => {
        const eItem = e.target.closest(".item-holder")
        if (eItem.className.includes("active")) return
        if (activeItem) activeItem.className = 'item-holder'
        eItem.classList.add("active")
        activeItem = eItem
    }
})


// Scoreboard

let scoreboardContent = document.querySelector(".scoreboard main")
let usernames = ["sonsausage", "realtorgas", "besiegeimmediate", "laborerbiological", "glassesburritos", "golfadolescent", "closetragefilled", "miserableoption", "lepecajole", "tragicgarboard", "consultantsplendid", "salarybellbottoms", "armedthey", "lecternfemale", "topmastbrag", "initiativecommunity", "manongoing", "wrestleglide", "guillemotpursue", "cheapsystem", "welshnotice", "hundredwardroom", "almondsharmful", "quicklyunbreaking", "drunkarddray", "unbalancedamazing", "beingpiston", "creationpigstep", "taboonightgown", "gargantuansubdued", "leavescerebrum", "frostyour", "motionlessbecome", "huttrackball", "columninjury", "cheesesteakgerbil", "fortunepod", "supportwastes", "tippedprincipal", "boltchick", "estimatorscooter", "seagulltime", "birdstock", "bureaucratzap", "referencequack", "greaterneigh", "rabbitsiege", "turnalluring", "confrontcustom", "becausesong", "mildlabored", "postboozer", "restlessjerk", "omniscientchough", "sockbucket", "guffawshell", "garagehoe", "urethralater", "vivaciousemigrate", "mendingmean", "draworange", "frisbeeregretful", "companywashboard", "floataspiring", "freshtea", "streetswarm", "rissolesran", "ashamedsorry", "gatherdirt", "softwarelack", "obsessedinstant", "oleanderastronomer", "councilbetter", "irateburgee", "polentaadventure", "lutediaphragm", "levercloser", "somethingagressive", "kookaburramechanic", "windsurfermuffin", "parcelstaid"]
let entriesToAdd = 22

let scoreboardGroups = ["alive", "dead", "spectator"]
let playerCounter = 0

scoreboardGroups.map(e => {
    let group = createGroup(e)
    let players = getPlayers(2+Math.floor(Math.random()*8))
    if(playerCounter += players.length){
        players.forEach( player => addGroupEntry(group, player))
        group.firstElementChild.innerHTML += " - "+players.length
        scoreboardContent.appendChild(group)
    }
})
document.querySelector(".playerCounter").innerHTML = playerCounter

function getPlayers(amount) {
    return Array.from(new Array(amount))
        .map(e => getRandomPlayerData())
        .sort((a, b) => b.karma - a.karma)
}

function getRandomPlayerData() {
    let username = usernames.shift(Math.floor(Math.random() * usernames.length))
    let values = {
        name: username,
        karma: 1000 - Math.floor(Math.random() * 250),
        score: Math.floor(Math.random() * 50) - 25,
        ping: Math.floor(Math.random() * 200)
    }
    return values
}

function addGroupEntry(group, values) {
    let headerline = createHeaderline(values)
    group.lastElementChild.appendChild(headerline)
}
function createGroup(type) {
    let group = document.createElement("div")
    let label = document.createElement("div")
    label.innerHTML = type
    label.className = "label"
    let content = document.createElement("div")
    content.className = "content"
    group.appendChild(label)
    group.appendChild(content)
    group.className = "scoreboard-group "+ type
    return group
}
function createHeaderline(values) {
    let headerline = document.createElement("div")
    let imageHolder = document.createElement("div")
    let image = document.createElement('img')
    image.src = "images/steam_standard.png"
    imageHolder.appendChild(image)
    headerline.appendChild(imageHolder)
    headerline.className = "headerline"
    Object.values(values).forEach(e => {
        let span = document.createElement("span")
        span.innerHTML = e
        headerline.appendChild(span)
    })
    return headerline
}
