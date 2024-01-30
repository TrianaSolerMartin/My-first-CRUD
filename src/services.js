//Método GET R(READ) del CRUD

async function getFigures() { //pedimos datos al servidor
    const result = await fetch("http://localhost:3000/figures")
    const data = await result.json() 
    return data
}

let sectionTag = document.getElementById("figures-list")

async function printFigures () {
    let figures = await getFigures()
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


//METODO DELETE D (delete) del CRUD

async function deleteFigure(id){
    const result = await fetch(`http://localhost:3000/figures/${id}`,
    {
        method: "DELETE"
    });
    return result
}

//Método POST 
async function createFigures() {
    const formFigure = document.getElementById("figures")

    const newFigure = {
        "name": formFigure.elements[0].value,
        "birthdate": formFigure.elements[1].value,
        "dateofdeath": formFigure.elements[2].value,
        "profession": formFigure.elements[3].value,
        "masterpiece": formFigure.elements[4].value
    }

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFigure),
    };

    const result = await fetch(`http://localhost:3000/figures`, options)
    return result
}