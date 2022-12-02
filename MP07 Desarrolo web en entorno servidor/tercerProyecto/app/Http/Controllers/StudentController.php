<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller{
    

    public function insert(Request $request) {
        $request->validate([
            'Nombre' => 'required',
            'Apellidos' => 'required',
            'DNI' => 'required',
            'idCourse' => 'required',
        ]);
        $student = new student();
        $student->Nombre = $request->Nombre;
        $student->Apellidos = $request->Apellidos;
        $student->DNI = $request->DNI;
        $student->idCourse = $request->idCourse;
        $student->save();
        
        return response()->json([
            "status" => 1,
            "msg" => "¡Registro de estudiante exitoso!",
        ]);
    }

    public function delete(Request $request) {

        $request->validate([
            'id' => 'required',
        ]);
       
        $student = Student::find($request->id);
        $student = DB::table('students')->where('id',$request->id)->first();
        DB::table('students')->where('id',$request->id)->delete();

        return response()->json([
            "status" => 1,
            "msg" => "¡Un estudante ha sido borrado!",
        ]);

    }

    public function select(Request $request) {

        $request->validate([
            'id' => '',
            'Nombre' => '',
            'Apellidos' => '',
            'DNI' => '',
            'idCourse' => '',
        ]);
        $student = new student();
        $student = DB::select('select * from students WHERE id = ? OR Nombre = ? OR Apellidos = ? OR DNI = ? OR idCourse = ?',
        [$request->id,$request->Nombre,$request->Apellidos,$request->DNI,$request->idCourse]);
        

        return $student;

        return response()->json([
            "status" => 1,
            "msg" => "¡Un registro ha sido actualizado!",
        ]);

    }

    public function update(Request $request) {

        $request->validate([
            'id' => '',
            'Nombre' => '',
            'Apellidos' => '',
            'DNI' => '',
            'idCourse' => '',
        ]);
       
        DB::update('update students set Nombre = ?,Apellidos = ?,DNI = ?,idCourse = ? WHERE id = ?',
        [$request->Nombre,$request->Apellidos,$request->DNI,$request->idCourse,$request->id]);
        

        return response()->json([
            "status" => 1,
            "msg" => "¡Un registro ha sido actualizado!",
        ]);

    }

}
