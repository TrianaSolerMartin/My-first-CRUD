//Método GET R(READ) del CRUD

async function getHistoricalFigures() { //pedimos datos al servidor

    const result = await fetch("http://localhost:3000/users")
    const data= await result.json() 
    return data
}

let sectionTag = document.getElementById("historical-figures-list")

async function printHistoricalFigures () {
    let HistoricalFigures = await getHistoricalFigures()
    console.log(HistoricalFigures)
    HistoricalFigures.map (HistoricalFigure => {
        sectionTag.innerHTML +=
        `<h3>${HistoricalFigures.name}</h3>
        <p>${HistoricalFigures.birthdate}</p>
        <p>${HistoricalFigures.dateofdeath}</p>
        <p>${HistoricalFigures.profession}</p>
        <p>${HistoricalFigures.masterpiece}</p>
        <button onclick="deleteUser('${user.id}')">Delete</button>` 
    })
}