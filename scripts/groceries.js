	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 1.99
	},
	{
		name: "Organic Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		cheap: false,
		price: 3.99
	},
		
	{
		name: "Bread",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		cheap: true,
		price: 2.35
	},
	{
		name: "Organic Gluten Free Bread",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		cheap: false,
		price: 4.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		cheap: false,
		price: 10.00
	},
	{
		name: "A weak old Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 5.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Gluten-Free") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "All"){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Cheap") && (prods[i].cheap == true)){
			products_names.push(prods[i].name);
		}
		else if ((restriction == "Health_Freak") && (prods[i].organic == true)) {
			products_names.push(prods[i].name);
		}
	
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
