<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Input;
use Illuminate\Support\Facades\Redirect;
use App\User;
use Auth;
use Session;
use Config;
use Image;
use File;
use Mail;
use Hash;

class AdminController extends Controller {

    public function __construct() {
        $this->userOBJ = new User();
    }

	
	
	public function adminLogin()
    {
        
        if (Auth::check())
        {
            return Redirect::to("/admindashboard/");
        }	
        return view('adminsignin');
    }
    public function loginCheck()
    {
        $username = e(Input::get('username'));
        $password = e(Input::get('password'));

        if (Auth::attempt(['username' => $username, 'password' => $password]))
        {
            return Redirect::to("/admindashboard/");
        }

        return Redirect::back()
                        ->withInput()
                        ->withErrors('That username/password combo does not exist.');
    }
    public function getLogout()
    {
        Auth::logout();
        return Redirect::to('/admin');
    }
}
