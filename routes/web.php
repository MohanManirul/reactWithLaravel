<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}/{slug?}', function () {
    return view('welcome');
});
