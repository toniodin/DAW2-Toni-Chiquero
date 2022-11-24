<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ProductController extends Controller
{

    public function insert(Request $request) {

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'idCategory' => 'required',
        ]);
        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->idCategory = $request->idCategory;
        $product->save();
        
        return response()->json([
            "status" => 1,
            "msg" => "¡Registro de producto exitoso!",
        ]);

    }

    public function delete(Request $request) {

        $request->validate([
            'id' => 'required',
        ]);
       
        $product = Product::find($request->id);
        $product = DB::table('products')->where('id',$request->id)->first();
        DB::table('products')->where('id',$request->id)->delete();

        return response()->json([
            "status" => 1,
            "msg" => "¡Un registro ha sido borrado!",
        ]);

    }

    public function update(Request $request) {

        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'idCategory' => 'required',
        ]);
       
        DB::update('update products set name = ?,description = ?,price = ?,stock = ?,idCategory = ? WHERE id = ?',
        [$request->name,$request->description,$request->price,$request->stock,$request->idCategory,$request->id]);
        

        return response()->json([
            "status" => 1,
            "msg" => "¡Un registro ha sido actualizado!",
        ]);

    }

    public function select(Request $request) {

        $request->validate([
            'id' => '',
            'name' => '',
            'description' => '',
            'price' => '',
            'stock' => '',
            'idCategory' => '',
        ]);
        $product = new Product();
        $product = DB::select('select * from products WHERE id = ? OR name = ? OR description = ? OR price = ? OR stock = ? OR idCategory = ?',
        [$request->id,$request->name,$request->description,$request->price,$request->stock,$request->idCategory]);
        

        return $product;

        return response()->json([
            "status" => 1,
            "msg" => "¡Un registro ha sido actualizado!",
        ]);

    }

}
