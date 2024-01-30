//Método GET R(READ) del CRUD

async function getFigures() { //pedimos datos al servidor

    const result = await fetch("http://localhost:3000/users")
    const data= await result.json() 
    return data
}

let sectionTag = document.getElementById("figures-list")

async function printFigures () {
    let Figures = await getFigures()
    console.log(Figures)
    Figures.map (Figure => {
        sectionTag.innerHTML +=
        `<h3>${Figure.name}</h3>
        <p>${Figure.birthdate}</p>
        <p>${Figure.dateofdeath}</p>
        <p>${Figure.profession}</p>
        <p>${Figure.masterpiece}</p>
        <button onclick="deleteFigure('${Figure.id}')">Delete</button>` 
    })
}