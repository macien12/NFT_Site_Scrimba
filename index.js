// javascript

const dateSnapshot = new Date()

const yearID = document.getElementById('footerYear')

function yearInfo(year) {
    yearID.innerHTML = `Copyright ${year.getFullYear().toString()}`
}

yearInfo(dateSnapshot)


