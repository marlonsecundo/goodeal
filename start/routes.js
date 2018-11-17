'use strict'

const Route = use('Route')

// Auth
Route.group(() => {

  // Singup
  Route.post("/singup", "Auth/SignupController.register");
  Route.get("/confirm-email/:token", "Auth/SignupController.confirm");

}).prefix('/auth');

// User
Route.post("users/login", "Auth/AuthController.loginUser");
Route.resource('users', 'UserController')
  .only(['update']);

// Company
Route.post("companies/login", "Auth/AuthController.loginCompany");
Route.resource('companies', 'CompanyController')
  .only(['update']);

// Card
Route.resource('cards', 'CardController')
  .apiOnly()

// FillCards
Route.resource('fillCards', 'FillCardController')
  .apiOnly()