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
// Authentication routes...
Route::get('login', 'Admin\AdminController@adminLogin');
Route::post('admin/logincheck', 'Admin\AdminController@loginCheck');
Route::get('logout', 'Auth\AuthController@getLogout');

////Change password
//Route::get('change-password', 'UserController@changePassword');
//Route::post('saveChangePassword', 'UserController@saveChangePassword');
//
////Forgot-password
//Route::get('forgot-password', 'UserController@forgotPassword');
//Route::get('resetpassword', 'UserController@resetPassword');
//Route::get('password/reset/{token}', 'UserController@updatePassword');
//Route::post('savePassword', 'UserController@savePassword');
//
//// Registration routes...
//Route::get('register', 'Auth\AuthController@getRegister');
//Route::post('register', 'Auth\AuthController@postRegister');
Route::group(['middleware' => 'auth.adminOnly'], function () {
    Route::get('/', ['as' => 'template.adminhome', 'uses' => 'Admin\DashboardController@index']);

    Route::get('clientsData', 'Admin\ClientController@getclientsData');
    Route::post('savedata', 'Admin\ClientController@saveFormdata');

    Route::get('getBday', 'Admin\ClientController@getBday');
    Route::post('EditData', 'Admin\ClientController@EditData');
    Route::post('deleteData', 'Admin\ClientController@deleteData');
     Route::resource('image', 'ImageController');
});

