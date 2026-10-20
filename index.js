// javascript

const dateSnapshot = new Date()

const yearID = document.getElementById('footerYear')

function yearInfo(year) {
    yearID.textContent = `\u00a9 ${year.getFullYear()} Maciej's Expensive Pierogi`
}

yearInfo(dateSnapshot)


