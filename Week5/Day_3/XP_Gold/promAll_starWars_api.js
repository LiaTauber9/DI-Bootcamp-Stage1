const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4'
  ]

Promise.all(urls.map(url => fetch(url).then(res => res.json())))
.then(res => res.forEach((res,i) => console.log(i+1, res.result.properties))).catch((error) => console.log('fix the error: '+error));