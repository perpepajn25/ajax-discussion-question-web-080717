function getData(){
  fetch ('https://randomuser.me/api/').then(res => res.json()).then(json=>showData(json))
}

function showData(json){
  let result = json.results[0]
  document.querySelector('#profile_picture').src = result.picture.medium
  document.querySelector('#fullname').innerText = `${result.name.first} ${result.name.last}`
  document.querySelector('#email').innerText = result.email
  document.querySelector('#city').innerText = result.location.city
  document.querySelector('#street').innerText = result.location.street
  document.querySelector('#state').innerText = result.location.state
  document.querySelector('#postcode').innerText = result.location.postcode
  document.querySelector('#date_of_birth').innerText = result.dob
  document.querySelector('#phone').innerText = result.phone
  document.querySelector('#cell').innerText = result.cell
}
