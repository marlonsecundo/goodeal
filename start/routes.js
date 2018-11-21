'use strict'

const Route = use('Route')

// Auth
Route.group(() => {

  // Singup
  Route.post("/singup", "Auth/SignupController.register");
  Route.get("/confirm-email/:token", "Auth/SignupController.confirm");

}).prefix('/auth');

// Login
Route.post("users/login", "Auth/AuthController.loginUser");
Route.post("companies/login", "Auth/AuthController.loginCompany");

// User
Route.resource('users', 'UserController')
  .only(['index','update', 'show']);

// Goodies
Route.resource('users.goodies', 'GoodiesController')
  .apiOnly()
  
// Company
Route.resource('companies', 'CompanyController')
  .only(['update']);

// Card
Route.resource('companies.cards', 'CardController')
  .apiOnly()