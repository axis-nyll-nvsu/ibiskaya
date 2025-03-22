<?php

namespace Database\Factories;

use App\Models\Resident;
use App\Models\Barangay;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resident>
 */
class ResidentFactory extends Factory
{
    protected $model = Resident::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gender = $this->faker->randomElement(['M', 'F']);
        $first_name = $gender == 'M' ? $this->faker->firstNameMale() : $this->faker->firstNameFemale();
        $suffix = $gender == 'M' ? $this->faker->optional($weight = 0.1)->suffix() : NULL;
        $civil_status = $this->faker->randomElement(['S', 'M', 'W', 'X', 'D']);
        $birth_place = $this->faker->city() . ', ' . $this->faker->state();

        return [
            'barangay_id' => $this->faker->numberBetween(1, 30),
            'first_name' => $first_name,
            'middle_name' => $this->faker->lastName(),
            'last_name' => $this->faker->lastName(),
            'suffix' => $suffix,
            'gender' => $gender,
            'birth_date' => $this->faker->dateTimeInInterval(),
            'birth_place' => $birth_place,
            'civil_status' => $civil_status,
            'nationality' => 'Filipino'
        ];
    }
}
