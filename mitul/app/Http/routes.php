<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('app');
});
Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);
Route::get('admin', ['middleware' => 'auth.adminOnly', 'uses' => 'Admin\AdminController@adminLogin']);
Route::post('admin/logincheck', 'Admin\AdminController@loginCheck');
Route::get('admindashboard/', 'Admin\DashboardController@index');

Route::post('savedata', 'Admin\ClientController@saveFormdata');
