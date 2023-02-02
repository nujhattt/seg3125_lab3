
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3, slct4, slct5, slct6, slct7) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	var s2_veg = document.getElementById(slct3);
	var s2_fruits = document.getElementById(slct4);
	var s2_meat = document.getElementById(slct5);
	var s2_dairy = document.getElementById(slct6);
	var s2_bread = document.getElementById(slct7);
	let veg = 0;
	let fruits = 0;
	let meat = 0;
	let dairy = 0;
	let bread = 0;

	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
	s2_veg.innerHTML = "";
	s2_fruits.innerHTML = "";
	s2_meat.innerHTML = "";
	s2_dairy.innerHTML = "";
	s2_bread.innerHTML = "";

	s2_bread.appendChild(document.createTextNode("Bakery"));
	s2_bread.appendChild(document.createElement("br")); 
	s2_meat.appendChild(document.createTextNode("Meat,Seafood and Substitutes"));
	s2_meat.appendChild(document.createElement("br")); 
	s2_dairy.appendChild(document.createTextNode("Dairy"));
	s2_dairy.appendChild(document.createElement("br")); 
	s2_veg.appendChild(document.createTextNode("Veggies"));
	s2_veg.appendChild(document.createElement("br")); 
	s2_fruits.appendChild(document.createTextNode("Fruits"));
	s2_fruits.appendChild(document.createElement("br")); 
	
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		const img = document.createElement("img");
		//img.src = "../pic.jpeg";
		//img.style.width = "200px";
		//img.style.height = "200px";
		//img.style.border = "1px solid black";
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName.split(", $")[0]+": "+productName.split(", $")[1]+"$"));
		label.appendChild(document.createElement("br")); 
		label.appendChild(img);

		if(productName.split(", $")[2] == "Vegetables"){
			veg++;
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2_veg.appendChild(checkbox);
			s2_veg.appendChild(label)
		}

		if(productName.split(", $")[2] == "Bakery"){
			bread++;
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2_bread.appendChild(checkbox);
			s2_bread.appendChild(label)
		}
		if(productName.split(", $")[2] == "Meat/seafood"){
			meat++;
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2_meat.appendChild(checkbox);
			s2_meat.appendChild(label)
		}
		if(productName.split(", $")[2] == "Fruits"){
			fruits++;
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2_fruits.appendChild(checkbox);
			s2_fruits.appendChild(label)
		}
		if(productName.split(", $")[2] == "Dairy"){
			dairy++;
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2_dairy.appendChild(checkbox);
			s2_dairy.appendChild(label)
		}  
	}
	if(veg == 0){
		s2_veg.appendChild(document.createTextNode("No vegetables"));
		s2_veg.appendChild(document.createElement("br")); 
	}
	else{
		s2.appendChild(s2_veg);
		s2.appendChild(document.createElement("br"));
	}
	if(fruits == 0){
		s2_fruits.appendChild(document.createTextNode("No fruits"));
		s2_fruits.appendChild(document.createElement("br"));
	}
	else{
		s2.appendChild(s2_fruits);
		s2.appendChild(document.createElement("br"));
	}
	if(meat == 0){
		s2_meat.appendChild(document.createTextNode("No meat"));
		s2_meat.appendChild(document.createElement("br"));
	}
	else{
		s2.appendChild(s2_meat);
		s2.appendChild(document.createElement("br"));
	}
	if(dairy == 0){
		s2_dairy.appendChild(document.createTextNode("No dairy"));
		s2_dairy.appendChild(document.createElement("br"));
	}
	else{
		s2.appendChild(s2_dairy);
		s2.appendChild(document.createElement("br")); 
	}
	if(bread == 0){
		s2_bread.appendChild(document.createTextNode("No bread"));
		s2_bread.appendChild(document.createElement("br"));
	}
	else{
		s2.appendChild(s2_bread);
		s2.appendChild(document.createElement("br"));
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value.split(", $")[0] +" : $" +ele[i].value.split(", $")[1]));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}

