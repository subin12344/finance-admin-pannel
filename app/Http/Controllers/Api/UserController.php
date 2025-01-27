<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Laravel\Sanctum\PersonalAccessToken;



class UserController extends Controller
{

    public function __construct() {}

    public function login(Request $request)
    {
        if (Auth::attempt(['email' => "admin@gmail.com", 'password' => $request->password])) {
            $user = Auth::user();
            $success['token'] =  $user->createToken('admin_app')->plainTextToken;
            $success['name'] =  $user->name;
            return $this->successResponse($success, 'User login successfully.');
        } else {
            $error['message'] =  "Incorrect password";
            return $this->errorResponse($error, ['error' => 'Unauthorised']);
        }
    }


    public function logout(Request $request)
    {
        $user = Auth::user();
        // Get bearer token from the request
        $accessToken = $request->bearerToken();
        // Get access token from database
        $token = PersonalAccessToken::findToken($accessToken);
        // Revoke token
        $token->delete();
        $success['message'] =  $user->name . '  Logged Out Successfully.';
        return $this->successResponse($success, 'User successfully signed out.');
    }
}
