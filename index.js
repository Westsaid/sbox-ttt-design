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
let scoreboarObjects = Array.from(new Array(entriesToAdd))
    .map(e => getRandomObject())
    .sort((a,b) => b.karma - a.karma)
    .forEach(e => addScoreboardEntry(e))

function getRandomObject() {
    let username = usernames.shift(Math.floor(Math.random() * usernames.length))
    let values = {
        name: username,
        karma: 1000 - Math.floor(Math.random() * 250),
        score: Math.floor(Math.random() * 50) - 25,
        ping: Math.floor(Math.random() * 200)
    }
    return values
}
function addScoreboardEntry(values) {
    let headerline = document.createElement("div")
    headerline.className = "headerline"
    Object.values(values).forEach(e => {
        let span = document.createElement("span")
        span.innerHTML = e
        headerline.appendChild(span)
    })
    scoreboardContent.appendChild(headerline)
}
