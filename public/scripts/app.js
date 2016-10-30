"Use Strict"

$(document).ready(function () {

	$('.col-xs-12').mouseenter(function () {
		$(this).css("background-color", "darkseagreen");
	});

	$('.col-xs-12').mouseleave(function () {
		$(this).css("background-color", "lightseagreen");
	});

	$('.lunch-food-description').hide();
	$('.lunch').mouseenter(function () {
		$('.lunch-food-description').slideToggle();
	});

	$('.lunch-article').mouseleave(function () {
		$('.lunch-food-description').hide();
	});

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/restaurant"
  }).done((restaurants) => {
    console.log(restaurants);
    for(res of restaurants) {
      $("<div>").text(res.restaurant_name).appendTo($("body"));
    }
  });
  $.ajax({
    method: "GET",
    url: "/api/restaurant/:resId"
  }).done((menu) => {
    console.log(restaurants);
    for(item of menu) {
      $("<div>").text(item.).appendTo($("body"));
    }
  });

}

	var createRestElem = (loadRestaurants) => {
		var $restaurant = ``;
		return $restaurant;
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
