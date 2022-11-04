<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
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

}
