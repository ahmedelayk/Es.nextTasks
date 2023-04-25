
let containerDiv = document.getElementById('container')
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    let data = response.json()
    console.log(data)
    return data
  }).then((data) => {
    console.log(data[0])
    console.log(Object.keys(data[0]).length)
    let keys = Object.keys(data[0])
    // append data to page
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let trHead = document.createElement('tr')
    for (let i = 0; i < keys.length; i++) {
      let th = document.createElement('th')
      th.appendChild(document.createTextNode(keys[i]))
      trHead.appendChild(th)
    }
    thead.appendChild(trHead)
    table.appendChild(thead)
    let tbody = document.createElement('tbody')
    for (let i = 0; i < data.length; i++) {
      let trBody = document.createElement('tr')
      for (let j = 0; j < keys.length; j++) {
        let td = document.createElement('td')
        switch (keys[j]) {
          case 'address':
            td.appendChild(document.createTextNode(`${data[i][keys[j]]['city']} - ${data[i][keys[j]]['street']} st.`))
            break;
          case 'company':
            td.appendChild(document.createTextNode(data[i][keys[j]]['name']))
            break;
          default:
            td.appendChild(document.createTextNode(data[i][keys[j]]))
        }
        trBody.appendChild(td)
      }
      tbody.appendChild(trBody)
    }
    table.appendChild(tbody)
    containerDiv.appendChild(table)
  })
