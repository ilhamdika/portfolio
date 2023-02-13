<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bio_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('thumbnail');
            $table->string('from');
            $table->string('hoby');
            $table->text('description');
            $table->string('instagram_url');
            $table->string('twitter_url');
            $table->string('github_url');
            $table->string('whatsapp_url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bio_profiles');
    }
};
