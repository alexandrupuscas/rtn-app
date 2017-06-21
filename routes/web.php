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

Route::middleware('cors')->get('/', function () {
    return view('welcome');
});

Route::middleware('cors')->get('/bridge', function() {
    $pusher = App::make('pusher');

    $pusher->trigger( 'test-channel',
        'test-event',
        array('text' => 'Testing PUSHER!'));

    return view('welcome');
});

Route::middleware('cors')->get('notifications', 'NotificationController@getIndex');

Route::middleware('cors')->post('notifications/notify', 'NotificationController@postNotify');