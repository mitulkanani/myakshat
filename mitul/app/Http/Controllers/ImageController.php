<?php

namespace App\Http\Controllers;

use App\Answer;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Auth;
use App\User;
use Illuminate\Support\Facades\Input;
use App\Image;

class ImageController extends Controller {

    /**
     * Get the image details
     */
    public function show($id) {
        $user = Auth::user();

        $model = Image::with('users')->find($id);
        if ($model) {
            return response()->json($model);
        } else {
            $model = new Image();
            $model->msg = "Image not found.";
            return response()->json($model);
        }
    }

    /**
     * Save the image data
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request) {

        /* TODO check for authentication */
        $imageFile = Input::file('file');
        $GetType = Input::get('type');
        $ObjectId = Input::get('object_id');
        $ImagebaseCode = Input::get('filedata');
        $Imagename = Input::get('filename');

        if ($ImagebaseCode != "") {
            $destinationPath = storage_path() . DIRECTORY_SEPARATOR . 'uploads';
            $destinationFile = date("YmdHis") . rand(10, 99) . "_" . $Imagename;

            $ImagebaseCode = str_replace('data:image/png;base64,', '', $ImagebaseCode);
            $destination = $destinationPath . '/' . $destinationFile;
            file_put_contents($destination, base64_decode($ImagebaseCode));


            $img = Image::find(Input::get("object_id"));
            $img->path = $destinationFile;
            $img->save();
            return response()->json(['img' => $destinationFile]);
        } else {
            if (is_object($imageFile)) {
                //var_dump($imageFile);
                /* uploads folder in storage directory */
                $destinationPath = storage_path() . DIRECTORY_SEPARATOR . 'uploads';
                /* destination file name */
                $destinationFile = date("YmdHis") . rand(10, 99) . "_" . $imageFile->getClientOriginalName();
                /* move the uploaded file to storage folder */
                if ($imageFile->move($destinationPath, $destinationFile)) {
                    /* Saving the image information */
                    $image = new Image();
                    $image->path = $destinationFile;
                    //$image->status = 1;

                    if (Input::get("type") == "AnswerImage") {
                        $img = Image::find(Input::get("object_id"));
                        $img->path = $image->path;
                        $img->save();
                    }

                    if (Input::get("type") == "clientPic") {
                        $client = \App\Client::find(Input::get("object_id"));
                        if ($client['client_img'] == "") {
                            $client->client_img = $image->path;
                            $client->save();
                        } else {
                            $combine_pic = $client['client_img'] . "," . $image->path;
                            $client->client_img = $combine_pic;
                            $client->save();
                        }
                    }
                    if (Input::get("type") == "docuPic") {
                        $docuPic = \App\Client::find(Input::get("object_id"));
                        if ($docuPic['docu_img'] == "") {
                            $docuPic->docu_img = $image->path;
                            $docuPic->save();
                        } else {
                            $combine_pic = $docuPic['docu_img'] . "," . $image->path;
                            $docuPic->docu_img = $combine_pic;
                            $docuPic->save();
                        }
                    }

                    $image->msg = "Saved successfully.";
                    //return print_r(Request::all());
                } else {
                    return $this->errors(['message' => 'Error saving the file.', 'code' => 400]);
                }
            } else if (Input::hasFile('file')) {
                foreach (Input::file('file') as $imageFile) {
                    /* uploads folder in storage directory */
                    $destinationPath = storage_path() . DIRECTORY_SEPARATOR . 'uploads';
                    /* destination file name */
                    $destinationFile = date("YmdHis") . rand(10, 99) . "_" . $imageFile->getClientOriginalName();
                    /* move the uploaded file to storage folder */
                    if ($imageFile->move($destinationPath, $destinationFile)) {
                        /* Saving the image information */
                        $image = new Image();
                        $image->path = $destinationFile;
                        //$image->status = 1;


                        if (Input::get("type") == "clientPic") {
                            $user = \App\Client::find(Input::get("object_id"));
                            if ($user['client_img'] == "") {
                                $user->client_img = $image->path;
                                $user->save();
                            } else {
                                $combine_pic = $user['client_img'] . "," . $image->path;
                                $user->client_img = $combine_pic;
                                $user->save();
                            }
                        }
                        if (Input::get("type") == "docuPic") {
                            $docuPic = \App\Client::find(Input::get("object_id"));
                            if ($docuPic['docu_img'] == "") {
                                $docuPic->docu_img = $image->path;
                                $docuPic->save();
                            } else {
                                $combine_pic = $docuPic['docu_img'] . "," . $image->path;
                                $docuPic->docu_img = $combine_pic;
                                $docuPic->save();
                            }
                        }
                        $image->msg = "Saved successfully.";
                        //return print_r(Request::all());
                    } else {
                        return $this->errors(['message' => 'Error saving the file.', 'code' => 400]);
                    }
                }
            } else {
                return response()->json(['msg' => 'Cannot find image', 'error' => 1]);
            }
        }
    }

}
