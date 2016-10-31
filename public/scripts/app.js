"Use Strict"

$(document).ready(function () {

	var resName;
	var resdescription;
	var menuItem;

	var createRestElem = (loadRestaurants) => {
		var $restaurant = `<article class="lunch-article">
			<section class="col-xs-12">
			<h3>${resName}</h3>
			</section>
			<article class="lunch-food-description">
			<h4>${resdescription}</h4>
			<h5>${menuItem}<div class="menu-box">    
        <label for="qty"><abbr title="Quantity">Qty</abbr></label>
        <input id="qty-menu" value="0" />
        <button id="down" onclick="modify_qty(-1)">-1</button>
        <button id="up" onclick="modify_qty(1)">+1</button>
    </div>
    		<button type="submit">Add</button>
        <button type="submit">Remove</button></h5>
			</article>
		</article>`;
		return $restaurant;
		console.log(loadRestaurants, "So many foods")
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


function renderRestaurants (restList) {
  $('.restaurantList').empty();
  for(res of restList) {
    resId=res.id;
    resName = res.restaurant_name;
    resdescription = res.description;
    $('.restaurantList').append(createRestElem(resName, resdescription));
  }
}
function renderMenuItems (restList) {
  $('.restaurantList').empty();
  for(res of restList) {
    resId=res.id;
    resName = res.dishName;
    resdescription = res.description;
    $('.menuList').append(createRestElem(resName, resdescription));
  }
}
	function loadMenuitems (restList) {


  for(item of RestList) {
    itemId=item.id;
    $.ajax({
      url: '/api/restaurants/${itemId}/menuitems',
      dataType: "json",
      success: (result)=> {
        renderMenuitems(result)
      }, failure: ()=> {
        throw err
        console.log("Restaurants melted", err)
      }
    });

    }
    menuItem = item.dishName;
    ItemDescription = item.description;
    $('.h5' ).append(createMenuElem(MenuName, Itemdescription));
  }

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

    	var menuItemId;
	var orderArray = [];

	var createOrderArray = function () {
		$('.menuItem').on("click", function () {
			orderArray.push(menuItem);
		})
		$('.itemSubmit').on("click", function () {
			orderArray.push(menuItem);
		})
	}

	$('.lunch-food-description').hide();
	$('.lunch').mouseenter(function () {
		$('.lunch-food-description').slideToggle();
	});

	$('.lunch-article').mouseleave(function () {
		$('.lunch-food-description').hide();
	});

	function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;

		}
	}

	// $('submit').on("click", function () {

	// });

	// $('remove').on("click", function () {

	// });

	// $('#down').on("click", function () {
	// 	orderArray.splice("menuItemId");
	// });

	// $('#up').on("click", function () {
	// 	orderArray.push("menuItemId");
	// });


var loadRestaurants = function ($inputResto) {
  $.ajax({
   url: '/api/restaurants/',
   dataType: "json",
   success: (result)=> {
    renderRestaurants(result);
    loadMenuitems(result)
  }, failure: ()=> {
    throw err
    console.log("Restaurants melted", err)
  }
});

}

loadRestaurants();



$('h4').hide();
$('.lunch').mouseenter(function () {
  $('h4').slideToggle();
});

$('.lunch-article').mouseleave(function () {
  $('h4').hide();
});

var menuItem;
var orderArray = [];

var createOrderArray = function () {
  $('.menuItem').on("click", function () {
   orderArray.push(menuItem);
 })
  $('.itemSubmit').on("click", function () {
   order.Array.push(menuItem);
 })
}

$('.lunch-food-description').hide();
$('.lunch').mouseenter(function () {
  $('.lunch-food-description').slideToggle();
});

$('.lunch-article').mouseleave(function () {
  $('.lunch-food-description').hide();
});

function modify_qty(val) {
  var qty = document.getElementById('qty').value;
  var new_qty = parseInt(qty,10) + val;

  if (new_qty < 0) {
    new_qty = 0;

  }
}
});