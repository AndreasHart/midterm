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
  var $restaurant = `<article class=${resId}>
  <section class="col-xs-12">
  <h3>${resName}</h3>
  </section>
  <article class="lunch-food-description">
  <h4>${resdescription}</h4>
  </article>
  </article>`;
  return $restaurant;
  console.log(loadRestaurants, "So many foods")
}

function renderRestaurants (restList) {
  $('.restaurantList').empty();
		// var sortRestos = restList.sort(function (a, b) {
		// 	a.restaurantId < b.restaurantId;
		// });
		// sortRestos.forEach(function (resto) {
			for(res of restList) {
        resId=res.id;
        resName = res.restaurant_name;
        resdescription = res.description;
        $('.restaurantList').append(createRestElem(resName, resdescription));
      }
    }
    function renderMenu (menuList) {


      for(item of menuList) {
        itemId=item.id;
        menuItem = item.dishName;
        ItemDescription = item.description;
        $(.).append(createRestElem(resName, resdescription));
      }
    }

    var loadRestaurants = function ($inputResto) {
      $.ajax({
       url: '/api/restaurants/',
       dataType: "json",
       success: (result)=> {
        renderRestaurants(result);

      }, failure: ()=> {
        throw err
        console.log("Restaurants melted", err)
      }
    });

    }

    loadRestaurants();

    $('col-xs-12').click(()=>{
      $.ajax({
       url: '/api/restaurants/:resid/menuitems',
       dataType: "json",
       success: (result)=> {
        renderMenuitems(result);

      }, failure: ()=> {
        throw err
        console.log("Restaurants melted", err)
      }
    });

    });

    // $('.col-xs-12').mouseenter(function () {
    //   $(this).css("background-color", "darkseagreen");
    // });

    // $('.col-xs-12').mouseleave(function () {
    //   $(this).css("background-color", "lightseagreen");
    // });

    $('h4').hide();
    $('.lunch').mouseenter(function () {
      $('h4').slideToggle();
    });

    $('.lunch-article').mouseleave(function () {
      $('h4').hide();
    });


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
