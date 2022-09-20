console.log('I am alive >:D');

var Customers = [];
var Person = {
    Name: '',
    Phone: '',
    Adress: '',
}

add = () => {
    FullName = document.getElementById('txtFullName');
    PhoneNumber = document.getElementById('txtPhoneNumber');
    PostAdress = document.getElementById('txtPostAdress');
    Person = {Name: FullName.value, Phone: PhoneNumber.value, Adress: PostAdress.value}
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