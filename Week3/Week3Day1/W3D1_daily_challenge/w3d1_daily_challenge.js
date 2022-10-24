let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
for(let p of planets){
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet', p);
    planetDiv.textContent = p;
    document.getElementsByClassName('listPlanets')[0].appendChild(planetDiv);
}