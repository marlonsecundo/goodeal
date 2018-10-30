'use strict'


const Route = use('Route')

// Auth
Route.group(() => {

  // Singup
  Route.post("/singup", "Auth/SignupController.register");
  Route.get("/confirm-email/:token", "Auth/SignupController.confirm");

  // Login
  Route.post("/login", "Auth/AuthController.login");


}).prefix('/auth');

// User
Route.group(() => {

  Route.get('/', 'UserController.show');
  Route.put('/update', 'UserController.update');
  Route.delete('/remove', 'UserController')

}).prefix('/users');

