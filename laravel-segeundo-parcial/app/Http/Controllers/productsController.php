<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class productsController extends Controller
{
    public function index()
    {
        $products = Products::all();

        // if ($products->isEmpty()) {
        //     $data = [
        //         'message' => 'no se encontraron productos',
        //         'status' => 200
        //     ];
        //     return response()->json($data, 404);
        // }

        $data =[
            'products' => $products,
            'status' => 200
        ];
        return response()->json($data, 200);
    }
    public function store(Request $request)
    {
       $validator = Validator::make($request->all(), [
            'marca' => 'required',
            'tamaño' => 'required',
            'resolucion' => 'required',
            'tecnologia' => 'required',
            'imagen' => 'required',
            'precio' => 'required',
            'estado' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validacion de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        $products = Products::create([
            'marca' => $request->marca,
            'tamaño' => $request->tamaño,
            'resolucion' => $request->resolucion,
            'tecnologia' => $request->tecnologia,
            'imagen' => $imageFullPath, // Guardar la ruta de la imagen
            'precio' => $request->precio,
            'estado' => $request->estado
        ]);

        if (!$products) {
            $data = [
                'message' => 'Error al crear el producto',
                'status' => 500
            ];
            return response()->json($data, 500);
        }

        $data = [
            'products' => $products,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function show($id)
    {
        $products = Products::find($id);

        if (!$products) {
            $data = [
                'message' => 'producto no encontrado',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $data = [
            'products' => $products,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $products = Products::find($id);

        if (!$products) {
            $data = [
                'message' => 'producto no encontrado',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $products->delete();

        $data = [
            'message' => 'Producto eliminado',
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $products = Products::find($id);

        if (!$products) {
            $data = [
                'message' => 'producto no encontrado',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $validator = Validator::make($request->all(), [
            'marca' => 'required',
            'tamaño' => 'required',
            'resolucion' => 'required',
            'tecnologia' => 'required',
            'imagen' => 'required',
            'precio' => 'required',
            'estado' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validacion de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        $products->marca = $request->marca;
        $products->tamaño = $request->tamaño;
        $products->resolucion = $request->resolucion;
        $products->tecnologia = $request->tecnologia;
        $products->imagen = $request->imagen;
        $products->precio = $request->precio;
        $products->estado = $request->estado;

        $products->save();

        $data = [
            'message' => 'Producto actualizado',
            'product' => $products,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $products = Products::find($id);

        if (!$products) {
            $data = [
                'message' => 'producto no encontrado',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $validator = Validator::make($request->all(), [
            'marca' => '',
            'tamaño' => '',
            'resolucion' => '',
            'tecnologia' => '',
            'imagen' => '',
            'precio' => '',
            'estado' => ''
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validacion de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        if ($request->has('marca')) {
            $products->marca = $request->name;
        }
        
        if ($request->has('tamaño')) {
            $products->tamaño = $request->tamaño;
        }
        
        if ($request->has('resolucion')) {
            $products->resolucion = $request->resolucion;
        }
        
        if ($request->has('tecnologia')) {
            $products->tecnologia = $request->tecnologia;
        }

        $products->save();

        $data = [
            'message' => 'Producto actualizado',
            'product' => $products,
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
