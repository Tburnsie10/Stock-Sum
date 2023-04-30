console.log('Stock Project');

function submitForm(event) {
    
    event.preventDefault();

    let inputs = event.target.querySelectorAll('input');

    let ticker = inputs[0].value
    let stoPri = inputs[1].value
    let optType = inputs[2].value
    let expDate = inputs[3].value
    let strPrice = inputs[4].value
    let premium = inputs[5].value

    let tBody = document.querySelector('#tBody')

    tBody.innerHTML += `
    <tr>
        <td>${ticker}</td>
        <td id="leverage">${stoPri}</td>
        <td>${optType}</td>
        <td>${expDate}</td>
        <td id="strikePrice">${strPrice}</td>
        <td id="premium">${premium}</td>
        <td><button onclick="deleteRow(event)" >delete</button></td>
    </tr> 
`

    strikePrice()
    leverage();
    updateCost();

    for(thing of inputs) {
        thing.value = ''
    }
}

function deleteRow(event) {

    event.target.parentElement.parentElement.remove()

    strikePrice()
    leverage();
    updateCost();
}


function updateCost() {

    let totalPremium = document.querySelectorAll('#premium')

    let total = 0;

    for(let item of totalPremium) {

        total += Number(item.innerHTML)
        console.log(item.innerHTML)
    }
   
    document.querySelector('#preNum').innerHTML = total;



}

function leverage() {
    
    let totLeverage = document.querySelectorAll('#leverage')

    let total = 0;

    for(let item of totLeverage) {
        total += Number(item.innerHTML)
        console.log(item.innerHTML)
    }
      
    document.querySelector('#levNum').innerHTML = total * 100;
}

function strikePrice() {

    let strikeLev = document.querySelectorAll('#strikePrice')

    let total = 0;

    for(let item of strikeLev) {
        total += Number(item.innerHTML)

    }
    document.querySelector('#levStr').innerHTML = total * 100;
    
}