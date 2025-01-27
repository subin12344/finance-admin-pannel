<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    protected  $response = [];
    public function successResponse($response)
    {
        $this->response["status"] = true;
        foreach ($response as $key => $value) {
            $this->response[$key] = $value;
        }
        return response()->json($this->response, 200);
    }

    public function errorResponse($response)
    {
        $this->response["status"] = false;
        foreach ($response as $key => $value) {
            $this->response[$key] = $value;
        }
        return response()->json($this->response, 500);
    }
}
