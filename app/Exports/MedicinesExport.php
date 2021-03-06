<?php

namespace App\Exports;

use App\Models\Medicamento;
use Maatwebsite\Excel\Concerns\FromCollection;

class MedicinesExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Medicamento::all();
    }
}
