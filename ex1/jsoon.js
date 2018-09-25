document.getElementById("button1").addEventListener("Click", loadCustomer);

function loadCustomer(e){
    
    xhr.open("GET", "customer.json", true);
    xhr.onload = function()
    {
    if (this.status === 200) 
    {
        let listCustomer
        const customer = JSON.parse(this.responseText);
        console.log(customer);
    }
    };
xhr.send();
                        }
                        class customer{
                            constructor(id, name, company, phone){
                                this.id = id;
                                this.name = name;
                                this.company = company;
                                this.phone = phone;
                            }
                            }

class UI{
//metodos
addCustomerList(customer){
// Get the node where to insert the customer list
const list = document.getElementById("customer-list");
// Create a row to insert a new id
const row = document.createElement("tr");
// Insert columns
row.innerHTML = `
<td>${book.id}</td>
<td>${book.name}</td>
<td>${book.company}</td>
<td>${book.phone}</td>
<td><a href="#" class="delete">X</a></td>
                              `;

                            //console.log(row);
                            list.appendChild(row);}
                        showAlert(message, className){
                            // Create DIV ELEMENT
                            const div = document.createElement("div");
                            div.className = `alert ${className}`;
                            div.innerText = message;
                            // Get Parent to insert alert node
                            const container = document.querySelector(".container");
                            // const form = document.querySelector("#book-form");
                            // container.insertBefore(div, form);
                            // Delete Alert after 3secs
                            setTimeout(function() {
                                document.querySelector(".alert").remove();
                              }, 3000);
