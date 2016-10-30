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
var createMenuElem = (loadMenuItems) => {
  var $menu = `<article class=${menuId}>
  <section class="item">
  <h3>${MenuItem}</h3>
  </section>
  <article class="lunch-food-description">
  <h4>${Menudescription}</h4>
  </article>
  </article>`;
  return $menu;
  console.log(load, "So many foods")
}

function renderRestaurants (restList) {
  $('.restaurantList').empty();
  for(res of restList) {
    resId=res.id;
    resName = res.restaurant_name;
    resdescription = res.description;
    $('.restaurantList').append(createRestElem(resName, resdescription));
  }
}
function renderMenuitems (menuList) {


  for(item of menuList) {
    itemId=item.id;
    menuItem = item.dishName;
    ItemDescription = item.description;
    $(.${itemId}).append(createMenuElem(MenuName, Itemdescription));
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

$('c3098998-5f8e-4947-967f-cb83bc8391be').click((resid)=>{
      // $.ajax({
      //   url: '/api/restaurants/${this}/menuitems',
      //   dataType: "json",
      //   success: (result)=> {
      //     renderMenuitems(result);


      //   }, failure: ()=> {
      //     throw err
      console.log("Restaurants melted", err)
    }
    //   });

    // });

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