<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('marca');
            $table->string('tamaño');
            $table->string('resolucion');
            $table->string('tecnologia');
            $table->string('imagen')->nullable()->change(); // Cambia imagen para almacenar una ruta
            $table->double('precio');
            $table->boolean('estado');
            $table->timestamps();
        });

        DB::table('products')->update(['imagen' => 'Default description']);
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }

};
