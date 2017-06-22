<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('names', function()
{
    return array(
        1 => "John",
        2 => "Mary",
        3 => "Steven"
    );
});

Route::get('names/{id}', function($id)
{
    $names = array(
        1 => "John",
        2 => "Mary",
        3 => "Steven"
    );
    return array($id => $names[$id]);
});