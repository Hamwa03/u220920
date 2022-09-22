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
        ListDetail.innerHTML = (`Name ${person.Name} Phone ${person.Phone} Adress ${person.Adress}`);
        CustomerList.appendChild(ListDetail)
    });

    FullName.value = '';
    PhoneNumber.value = '';
    PostAdress.value = '';
    FullName.focus();
}

search = () => {
    InputID = document.getElementById('txtCustomerID').value;
    OutputID = document.getElementById('searchCustomer').value;
    InputID -= 1;

    OutputID.innerHTML = Customers[InputID];
} 