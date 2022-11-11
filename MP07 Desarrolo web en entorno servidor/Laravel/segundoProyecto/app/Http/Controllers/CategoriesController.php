<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CategoriesController extends Controller
{
    
    public function insert(Request $request) {

        $request->validate([
            'categoryName' => 'required',
            'description' => 'required',
        ]);
        $category = new Categories();
        $category->categoryName = $request->categoryName;
        $category->description = $request->description;
        $category->save();
        
        return response()->json([
            "status" => 1,
            "msg" => "¡Registro de categoria exitosa!",
        ]);

    }

    public function delete(Request $request) {

        $request->validate([
            'id' => 'required',
        ]);
       
        $category = Categories::find($request->id);
        $category = DB::table('categories')->where('id',$request->id)->first();
        DB::table('categories')->where('id',$request->id)->delete();

        return response()->json([
            "status" => 1,
            "msg" => "¡Categoria eliminada!",
        ]);

    }

    public function update(Request $request) {

        $request->validate([
            'id' => 'required',
            'categoryName' => 'required',
            'description' => 'required',
        ]);
       
        DB::update('update categories set categoryName = ?,description = ? WHERE id = ?',
        [$request->categoryName,$request->description,$request->id]);
        

        return response()->json([
            "status" => 1,
            "msg" => "¡Una categoria ha sido actualizada!",
        ]);

    }

    public function select(Request $request) {

        $request->validate([
            'id' => '',
            'categoryName' => '',
            'description' => '',
        ]);
        $category = new Categories();
        $category = DB::select('select * from categories WHERE id = ? OR categoryName = ? OR description = ?',
        [$request->id,$request->categoryName,$request->description]);
        

        return $category;

        return response()->json([
            "status" => 1,
            "msg" => "¡Un registro ha sido actualizado!",
        ]);

    }

}
