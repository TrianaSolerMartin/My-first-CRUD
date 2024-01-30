//Método GET R(READ) del CRUD

async function getFigures() { //pedimos datos al servidor
    const result = await fetch("http://localhost:3000/figures")
    const data= await result.json() 
    console.log(data) 
    return data
}

let sectionTag = document.getElementById("figures-list")

async function printFigures () {
    let figures = await getFigures()
    console.log(figures)
    figures.map (figure => {
        sectionTag.innerHTML +=
        `<h3>${figure.name}</h3>
        <p>${figure.birthdate}</p>
        <p>${figure.dateofdeath}</p>
        <p>${figure.profession}</p>
        <p>${figure.masterpiece}</p>
        <button onclick="deleteFigure('${figure.id}')">Delete</button>` 
    })
}