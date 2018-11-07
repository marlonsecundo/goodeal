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
  .apiOnly()
  .except('show')
  .middleware('auth:user');

// Company
Route.post("companies/login", "Auth/AuthController.loginCompany");
Route.resource('companies', 'CompanyController')
  .apiOnly()
  .except(['show'])
  .middleware('auth:company');

// Card
Route.resource('cards', 'CardController')
  .apiOnly()
  .middleware('auth:company');

// FillCards
Route.resource('fillCards', 'FillCardController')
  .apiOnly()
  .middleware('auth:user');

Route.post('/test', 'CompanyController.test');