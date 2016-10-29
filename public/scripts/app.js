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



