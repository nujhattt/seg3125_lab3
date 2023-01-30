	
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
		name: "Brocoli (Organic)",
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
		name: "Salmon (Organic)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		cheap: false,
		price: 15.00
	},
	{
		name: "Banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 0.99
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 2.50
	},
	{
		name: "Almond Milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 3.47
	},
	{
		name: "Mozarella Cheese",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 2.50
	},
	{
		name: "Avocado (Organic)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		cheap: false,
		price: 6.47
	},
	{
		name: "Tofu",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 1.67
	},
	{
		name: "Ground Meat Beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 6.97
	},
	{
		name: "Boneless Skinless Chicken Breast (Organic)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		cheap: false,
		price: 22.00
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name + ', $' + prods[i].price);
		}
		else if ((restriction == "Gluten-free") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name + ', $' + prods[i].price);
		}
		else if (restriction == "All"){
			product_names.push(prods[i].name + ', $' + prods[i].price);
		}
		else if ((restriction == "Cheap") && (prods[i].cheap == true)){
			product_names.push(prods[i].name + ', $' + prods[i].price);
		}
		else if ((restriction == "Health_Freak") && (prods[i].organic == true)) {
			product_names.push(prods[i].name + ', $' + prods[i].price);
		}
	}
	for (let i = 0; i < product_names.length; i++) {
		for (let j = 0; j < product_names.length - i - 1; j++) {
		  let price1 = parseFloat(product_names[j].split(', $')[1]);
		  let price2 = parseFloat(product_names[j + 1].split(', $')[1]);
		  if (price1 > price2) {
			// swap elements
			let temp = product_names[j];
			product_names[j] = product_names[j + 1];
			product_names[j + 1] = temp;
			  }
			}
		  }
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	let totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name+', $'+products[i].price) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
