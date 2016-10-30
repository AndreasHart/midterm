"Use Strict"

$(document).ready(function () {

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/restaurants"
//   }).done((restaurants) => {
//     console.log(restaurants);
//     for(res of restaurants) {
//       $("<div>").text(res.restaurant_name).appendTo($("body"));
//     }
//   });
//   $.ajax({
//     method: "GET",
//     url: "/api/restaurants/:resId"
//   }).done((menu) => {
//     console.log(restaurants);
//     for(item of menu) {
//       $("<div>").text(item.).appendTo($("body"));
//     }
//   });

// }

	var resName;
	var resdescription;

	var createRestElem = (loadRestaurants) => {
		var $restaurant = `<article class="lunch-article">
			<section class="col-xs-12">
			<h3>${resName}</h3>
			</section>
			<article class="lunch-food-description">
			<h4>${resdescription}</h4>
			<h5><span class="input-group-addon">
        <input type="checkbox" aria-label="...">
      </span>${menuItem}<h5>
			</article>
		</article>`;
		return $restaurant;
		console.log(loadRestaurants, "So many foods")
	}

	function renderRestaurants (restList) {
		$('.restaurantList').empty();
			for(res of restList) {
				resName = res.restaurant_name;
				resdescription = res.description;
				menuItem = res.menuItemId;
			$('.restaurantList').append(createRestElem(resName, resdescription));
		}
	}

	var loadRestaurants = function ($inputResto) {
		$.ajax({
			url: '/api/restaurants/',
			dataType: "json",
			success: function(result) {
				renderRestaurants(result);
			}, failure: function() {
				throw err
				console.log("Restaurants melted", err)
			}
		});
	}

	loadRestaurants();

	var menuItem;
	var orderArray = [];

	var createOrderArray = function () {
		$('.menuItem').on("click", function () {
			orderArray.push(menuItem);
		})
	}

		$('.col-xs-12').mouseenter(function () {
		$(this).css("background-color", "darkseagreen");
	});

	$('.col-xs-12').mouseleave(function () {
		$(this).css("background-color", "lightseagreen");
	});

	$('h4').hide();
	$('.lunch').mouseenter(function () {
		$('h4').slideToggle();
	});

	$('.lunch-article').mouseleave(function () {
		$('h4').hide();
	});

	function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
	}

	// $(() => {
	//   $.ajax({
	//     method: "GET",
	//     url: "/api/users"
	//   }).done((users) => {
	//     for(user of users) {
	//       $("<div>").text(user.name).appendTo($("body"));
	//     }
	//   });

	// });

	//App should be able to populate 

});
