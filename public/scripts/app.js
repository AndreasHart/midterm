"Use Strict"

$(document).ready(function () {

	var resName;
	var resdescription;

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
    </div></h5>
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
    function renderMenu (menuList) {


      for(item of menuList) {
        itemId=item.id;
        menuItem = item.dishName;
        ItemDescription = item.description;
        $(.).append(createRestElem(resName, resdescription));
      }
    }

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

	function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;

		}
	}
});