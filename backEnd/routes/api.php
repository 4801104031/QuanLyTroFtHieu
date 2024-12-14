<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PhongController;
use App\Http\Controllers\LoaiPhongController;
use App\Http\Controllers\DichVuController;
use App\Http\Controllers\CuDanController;
use App\Http\Controllers\HopDongController;
use App\Http\Controllers\HoaDonController;
use App\Http\Controllers\PhanHoiController;
use App\Http\Controllers\PhongDichVuController;
use App\Http\Controllers\TaiKhoanController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//refresh token
Route::middleware('auth:api')->post('/refresh', [TaiKhoanController::class, 'refresh']);

//Phòng, loại phòng
Route::get('/phongs', [PhongController::class, 'index']);
Route::get('/phong/detailed', [PhongController::class, 'getDetailedInfo']);
Route::put('/phong/{id}', [PhongController::class, 'edit']);
Route::delete('/phong/{id}', [PhongController::class, 'delete']);
Route::post('/phong', [PhongController::class, 'store']);
Route::get('/loaiphongs', [LoaiPhongController::class, 'index']);
Route::post('/loaiphong', [LoaiPhongController::class, 'store']);
Route::put('/loaiphong/{id}', [LoaiPhongController::class, 'update']);


//Dịch vụ
Route::get('/dichvus', [DichVuController::class, 'index']);
Route::post('/dichvu', [DichVuController::class, 'store']);
Route::put('/dichvu/{id}', [DichVuController::class, 'update']);

//Phòng dịch vụ
Route::get('/phong-dich-vu', [PhongDichVuController::class, 'index']);
Route::post('/phong-dich-vu', [PhongDichVuController::class, 'store']);
Route::put('/phong-dich-vu/{id}', [PhongDichVuController::class, 'update']);
Route::delete('/phong-dich-vu/{id}', [PhongDichVuController::class, 'delete']);

//Cư dân
Route::get('/cu-dan', [CuDanController::class, 'index']);
Route::post('/cu-dan', [CuDanController::class, 'store']);
Route::put('/cu-dan/{id}', [CuDanController::class, 'update']);
Route::delete('/cu-dan/{id}', [CuDanController::class, 'destroy']);

//Hợp đồng
Route::get('/hop-dongs', [HopDongController::class, 'index']);
Route::post('/hop-dong', [HopDongController::class, 'store']);
Route::put('/hop-dong/{id}', [HopDongController::class, 'update']);
Route::delete('/hop-dong/{id}', [HopDongController::class, 'destroy']);

//Hoá đơn
Route::get('/hoadon', [HoaDonController::class, 'index']);
Route::get('/hoadon/{id}', [HoaDonController::class, 'show']);
Route::post('/hoadon', [HoaDonController::class, 'store']); 
Route::put('/hoadon/{id}', [HoaDonController::class, 'update']); 
Route::delete('/hoadon/{id}', [HoaDonController::class, 'destroy']); 

//phản hồi
Route::get('/phanhoi', [PhanHoiController::class, 'index']);
Route::get('/phanhoi/{id}', [PhanHoiController::class, 'show']);
Route::post('/phanhoi', [PhanHoiController::class, 'store']);
Route::put('/phanhoi/{id}', [PhanHoiController::class, 'update']);
Route::delete('/phanhoi/{id}', [PhanHoiController::class, 'destroy']);
Route::put('/phanhoi/confirm/{id}', [PhanHoiController::class, 'confirm']);

//tài khoản
Route::get('/tai-khoan', [TaiKhoanController::class, 'index']);
// Route::post('/tai-khoan', [TaiKhoanController::class, 'store']);
Route::put('/tai-khoan/{id}', [TaiKhoanController::class, 'update']);
Route::post('/login', [TaiKhoanController::class, 'login']);
Route::middleware('auth:api')->post('/logout', [TaiKhoanController::class, 'logout']);
Route::middleware('auth:api')->get('/me', [TaiKhoanController::class, 'me']);
Route::middleware('auth:api')->post('/change-password', [TaiKhoanController::class, 'changePassword']);


Route::middleware(['auth:api', 'admin'])->group(function () {
    Route::post('/tai-khoan', [TaiKhoanController::class, 'store']);
    Route::delete('/tai-khoan/{id}', [TaiKhoanController::class, 'destroy']);
});
