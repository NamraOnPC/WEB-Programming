
var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];


var CustomerDB = {
    customers: [],
    addresses: [],
    stores: [],


  addStore:function(storeObj){
    this.stores.push(storeObj);
    },

  addCustomer:function(customerObj){
    this.customers.push(customerObj);
    customerObj.add_date = new Date()
  },  

  addAddress:function(addressObj){
    this.addresses.push(addressObj);
  },

insertData(_allData){
for( var i = 0; i < _allData.length; i++){
    if(_allData[i].type == "store"){
        this.addStore(Object.create(_allData[i].data));
    }else if(_allData[i].type == "customer"){
        this.addCustomer(Object.create(_allData[i].data));
    }else if(_allData[i].type == "address"){
        this.addAddress(Object.create(_allData[i].data));
    }
}
},

outputCustomerById:function(customer_id){
    var search = false;
    for(var x = 0; !search && x < this.customers.length ; x++){
        if(customer_id == this.customers[x].customer_id){
            console.log('Customer ' + this.customers[x].customer_id + ': ' + this.customers[x].first_name + ' ' + this.customers[x].last_name + '' + '(' + this.customers[x].email + ')');
            console.log('Home Address: ' + this.getAddressById(this.customers[x].address_id).address + ' ' + this.getAddressById(this.customers[x].address_id).city + ', ' + this.getAddressById(this.customers[x].address_id).province + '. ' + this.getAddressById(this.customers[x].address_id).postal_code);
            console.log('Joined : ' + this.customers[x].add_date);
        search = true;    
        }
    }
},

getAddressById: function(address_id){
    var _addressId_;
    for ( var x = 0; x < this.addresses.length; x++){
        if(address_id == this.addresses[x].address_id){
            _addressId_ = this.addresses[x];
        }

    }
    return _addressId_;
},

outputAllCustomers: function(){
console.log('All Customers');
console.log('\n');

for(var i = 0; i < this.customers.length; i++){
    this.outputCustomerById(this.customers[i].customer_id);
    console.log('\n');
}
},

outputCustomersByStore:function(store_id){
    var store_ = this.getStoreById(store_id);
    console.log('Customers in Store: ' + store_.name);
    console.log('\n');

    for ( var z = 0; z < this.customers.length; z++){
        if(store_id == this.customers[z].store_id){
            this.outputCustomerById(this.customers[z].customer_id);
            console.log('\n');
        }
    }
},

removeCustomerById: function(customer_id){
    var remove = false;
var addressIdToRemove = 0;
    for(var a = 0; a < this.customers.length && !remove; a++){
        if( this.customers[a].customer_id == customer_id){
            addressIdToRemove = this.customers[a].address_id;
            this.customers.splice(a,1);
            remove = true;
        }
    }
this.removeAddressById(addressIdToRemove);
},
    
outputAllAddresses: function(){
    console.log('All Addresses');
    console.log('\n');

    for( var b = 0; b < this.addresses.length; b++){
        console.log('Address ' + this.addresses[b].address_id + ': ' + this.addresses[b].address + ' ' + this.addresses[b].city + ', ' + this.addresses[b].province + '. ' + this.addresses[b].postal_code);
        console.log('\n');
    }
},

removeAddressById: function(address_id) { 

var found = false;

for (var i = 0; i < this.customers.length; i++) {
        if (this.customers[i].address_id == address_id) { found = true; }
    }
    for (var i = 0; i < this.stores.length; i++) {
        if (this.stores[i].address_id == address_id) { found = true; }
    }
    if (!found) {      
        var newArray = [];
        for (var i = 0; i < this.addresses.length; i++) {
            if (this.addresses[i].address_id != address_id) {
                newArray.push(this.addresses[i]);
            }
        }
        this.addresses = newArray;
    }
},

outputAllStores: function(){
    console.log('All Stores');
    console.log('\n');
for(var f = 0; f < this.stores.length; f++){
    console.log('Store ' + this.stores[f].store_id + ": " + this.stores[f].name);
    console.log('Location: ' + this.getAddressById(this.stores[f].address_id).address + ' ' + this.getAddressById(this.stores[f].address_id).city + ", " + this.getAddressById(this.stores[f].address_id).province + ". " + this.getAddressById(this.stores[f].address_id).postal_code);
    console.log('\n');
}
},

getStoreById: function(store_id){
    var _storeId_;
    for( var n = 0; n < this.stores.length; n++){
        if(this.stores[n].store_id == store_id){
            _storeId_ = this.stores[n];
        }
    }
    return _storeId_;
}

};

//TEST DATA

// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

/*
Exception: ReferenceError: newArray is not defined
removeAddressById@Scratchpad/3:150:17
removeCustomerById@Scratchpad/3:112:13
@Scratchpad/3:235:1
*/
/*
Exception: SyntaxError: function statement requires a name
@Scratchpad/3:126
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/3:112
*/
