//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres 
//aprobados y añade la propiedad isApproved a true o
//false en consecuencia. Una vez lo tengas compruébalo con un console.log.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

var print = (data) => console.log(data)

var isApproved = (data) =>{
    for (let i = 0; i < data.length; i++){
        if ((data[i].T1 === true && data[i].T2 === true) || (data[i].T2 === true && data[i].T3 === true) || (data[i].T1 === true && data[i].T3 === true)){
            print (data[i].name + " is approved")
    } else{
        print(data[i].name + " is not approved")
    }
    }
}
isApproved(alumns)

