<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Input;
use Illuminate\Support\Facades\Redirect;
use App\User;
use App\Client;
use Auth;
use Session;
use Config;
use Image;
use File;
use Mail;
use Hash;
use Carbon;

class ClientController extends Controller {

    public function __construct() {
        $this->userOBJ = new User();
        $this->clientOBJ = new Client();
    }

    public function getclientsData() {
        $clients = Client::all();
        return response()->json($clients);
    }
	public function EditData() {
        $client = Client::find(Input::get('clientId'));
        return response()->json($client);
    }

    public function getBday() {
        $Reqdate = Carbon\Carbon::now()->month;
        $clientsBday = Client::Select('clients.*')
//                        ->whereRaw('MONTH(clients.dob) = MONTH(NOW())')   //for months b'day
                        ->whereDay('clients.dob', '=', date('d'))
                        ->whereMonth('clients.dob', '=', date('m'))
                        ->get()->toArray();
        $clientsAnniver = Client::Select('clients.*')
//                        ->Where('clients.marriage_ani', '=', $Reqdate)
                        ->whereDay('clients.marriage_ani', '=', date('d'))
                        ->whereMonth('clients.marriage_ani', '=', date('m'))
                        ->get()->toArray();
        $clients['bdays'] = $clientsBday;
        $clients['anniver'] = $clientsAnniver;
        return response()->json($clients);
    }

    public function saveFormdata(Request $request) {
        $client_data = new Client();
        $client_data->firstname = Input::get('firstname');
        $client_data->middlename = Input::get('middlename');
        $client_data->lastname = Input::get('lastname');
        $client_data->gender = Input::get('gender');
        $client_data->dob = date('Y-m-d', strtotime(Input::get('dob')));
        $client_data->marriage_ani = date('Y-m-d', strtotime(Input::get('marriage_ani')));
        $client_data->pan_card = Input::get('pan_card');
        $client_data->pers_email = Input::get('pers_email');
        $client_data->pers_phone = Input::get('pers_phone');
        $client_data->pers_mobile = Input::get('pers_mobile');
        $client_data->bank_name = Input::get('bank_name');
        $client_data->account_no = Input::get('account_no');
        $client_data->bank_add = Input::get('bank_add');
        $client_data->city = Input::get('city');
        $client_data->ifci_code = Input::get('ifci_code');
        $client_data->occupation = Input::get('occupation');
        $client_data->occu_addr = Input::get('occu_addr');
        $client_data->occu_phone = Input::get('occu_phone');
        $client_data->occu_mobile = Input::get('occu_mobile');
        $client_data->occu_email = Input::get('occu_email');
        $client_data->occu_website = Input::get('occu_website');
        $client_data->status = 1;
        $client_data->save();
        return response()->json($client_data);
    }

}
