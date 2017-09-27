const Person = (()=> {
let id = 1
return class Person {
  constructor (data){
    this.name = `${data.name.first} ${data.name.last}`
    this.profile_picture = data.picture.medium
    this.email = data.email
    this.city = data.location.city
    this.street = data.location.street
    this.state = data.location.state
    this.postcode = data.location.postcode
    this.date_of_birth = data.dob
    this.phone = data.phone
    this.cell = data.cell
    this.id = id
    id++
  }

  renderForList(){
    return `<div>
      <button onclick="getPerson(${this.id})" id=${this.id} class="btn btn-outline-primary">${this.name} </button>
    </div>`
  }

  renderSelf(){
        document.querySelector('#profile_picture').src = this.profile_picture
        document.querySelector('#fullname').innerText = this.name
        document.querySelector('#email').innerText = this.email
        document.querySelector('#city').innerText = this.city
        document.querySelector('#street').innerText = this.street
        document.querySelector('#state').innerText = this.state
        document.querySelector('#postcode').innerText = this.postcode
        document.querySelector('#date_of_birth').innerText = this.dob
        document.querySelector('#phone').innerText = this.phone
        document.querySelector('#cell').innerText = this.cell
  }
}
})()
