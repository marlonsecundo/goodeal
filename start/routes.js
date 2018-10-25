'use strict'


const Route = use('Route')

// Auth
Route.group(() => {

  // Singup
  Route.post("/singup", "Auth/SingupController.register");
  Route.get("/confirm-email/:token", "Auth/SingupController.confirm");

}).prefix('/auth');
