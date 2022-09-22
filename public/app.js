console.log('I am alive >:D');

var Customers = [];
var Person = {
    Name: '',
    Phone: '',
    Adress: '',
    Email: '',
}

add = () => {
    FullName = document.getElementById('txtFullName');
    PhoneNumber = document.getElementById('txtPhoneNumber');
    PostAdress = document.getElementById('txtPostAdress');
    EmailAdress = document.getElementById('txtEmailAdress');
    Person = {Name: FullName.value, Phone: PhoneNumber.value, Adress: PostAdress.value, Email: EmailAdress.value}
    Customers.push(Person);

    CustomerList = document.getElementById('customers');
    
    CustomerList.innerHTML='';

    Customers.forEach(person => {
        ListDetail = document.createElement('li');
        ListDetail.innerHTML = (`Name: ${person.Name} | Phone: ${person.Phone} | Email: ${person.Email}`);
        CustomerList.appendChild(ListDetail)
    });

    FullName.value = '';
    PhoneNumber.value = '';
    PostAdress.value = '';
    EmailAdress.value = '';
    FullName.focus();
}

search = () => {
    var InputID = document.getElementById('txtCustomerID').value;
    var OutputID = document.getElementById('searchCustomer');

    function findEmail(pointer) {
        return pointer.Email === InputID;
    } // Testing function

    OutputID.innerHTML = (`${Customers.find(findEmail).Name} ${Customers.find(findEmail).Phone} ${Customers.find(findEmail).Adress} ${Customers.find(findEmail).Email}`);
    // OutputID.innerHTML = (JSON.stringify(Customers.find(findEmail)));
} 