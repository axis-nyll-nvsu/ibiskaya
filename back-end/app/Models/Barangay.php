<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barangay extends Model
{
    /** @use HasFactory<\Database\Factories\BarangayFactory> */
    use HasFactory;

    public function municipality() {
        return $this->belongsTo(Barangay::class);
    }

    public function residents() {
        return $this->hasMany(Resident::class);
    }
}
