// let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
// for(let p of planets){
//     const planetDiv = document.createElement('div');
//     planetDiv.classList.add('planet', p);
//     planetDiv.textContent = p;
//     document.getElementsByClassName('listPlanets')[0].appendChild(planetDiv);
// }

// option 2 + bonus
let planets = [
    {
        name: 'Mercury',
        moon: 2
    },
    {
        name: 'Venus',
        moon: 1
    },
    {
        name: 'Earth',
        moon: 1
    },
    {
        name: 'Mars',
        moon: 5
    },
    {
        name: 'Jupiter',
        moon: 0
    },
    {
        name: 'Saturn',
        moon: 1
    },
    {
        name: 'Uranus',
        moon: 3
    },
    {
        name: 'Neptune',
        moon: 1
    }
]
for(let p of planets){
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet', p.name);
        planetDiv.textContent = p.name;
        document.getElementsByClassName('listPlanets')[0].appendChild(planetDiv);
        for(let moon = 1; moon <= p.moon; moon++){
            const moonDiv = document.createElement('div');
            moonDiv.classList.add('moon');
            document.getElementsByClassName(p.name)[0].appendChild(moonDiv)
        }
    }