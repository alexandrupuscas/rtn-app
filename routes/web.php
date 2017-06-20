<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\App;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/bridge', ['middleware' => 'cors', function() {
    $pusher = App::make('pusher');

    $pusher->trigger( 'test-channel',
        'test-event',
        array('text' => 'Testing PUSHER!'));

    return view('welcome');
}]);

Route::get('notifications', array('middleware' => 'cors', 'uses'=>'NotificationController@getIndex'));

Route::post('notifications/notify', array('middleware' => 'cors', 'uses'=>'NotificationController@postNotify'));