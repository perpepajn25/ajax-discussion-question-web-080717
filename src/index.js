const peoples = []
function getData(){
  fetch ('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(json=>showData(json))
}

function showData(json){
  let results = json.results
  results.forEach(person => {
    let newPerson = new Person(person)
    peoples.push(newPerson)
  })
  render()
}

function render(){
  let listPeople = document.querySelector('#listPeople')
  let peoplesHTML = peoples.map(function(person){
    return person.renderForList()
  }).join('')
  listPeople.innerHTML = peoplesHTML
}

function getPerson(id){
  let foundPerson = peoples.find(function(person){
    return id === person.id
  })
  foundPerson.renderSelf()
}
