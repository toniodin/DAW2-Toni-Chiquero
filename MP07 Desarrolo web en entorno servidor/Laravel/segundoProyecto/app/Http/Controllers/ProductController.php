<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProductController extends Controller
{

    public function insert(Request $request) {

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'stock' => 'required'
        ]);
        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->save();
        
        return response()->json([
            "status" => 1,
            "msg" => "¡Registro de producto exitoso!",
        ]);

    }

    public function deleteProducto(Request $request) {

        $request->validate([
            'id' => 'required',
        ]);
        $product = new Product();
        $product->id = $request->id;
        // if(){

        // }
        
        return response()->json([
            "status" => 1,
            "msg" => "¡Registro de producto exitoso!",
        ]);

    }

}
