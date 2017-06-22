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


Route::middleware('cors')->get('/', function () {
    return view('welcome');
});


Route::middleware('cors')->get('/', function() {
    // this doesn't do anything other than to
    // tell you to go to /fire
    return "go to /fire";
});

Route::middleware('cors')->get('fire', function () {
    // this fires the event
    event(new \App\Events\EventName());
    return "event fired";
});

Route::middleware('cors')->get('test', function () {
    // this checks for the event
    return view('test');
});