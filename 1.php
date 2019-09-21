<?php

function generate_real_biodata()
{
    return json_encode(array(
        'name' => 'Fikri Haikal',
        'age' => 18,
        'address' => 'Kp.Biru Jln.Cisitu Indah VI, Kec.Coblong, Kel.Dago, Kota Bandung, Indonesia',
        'hobbies' => array(
            'Programming',
            'Gaming'
        ),
        'is_married' => FALSE,
        'list_school' => array(
            array(
                'name' => 'MI Al - Mukhlis',
                'year_in' => '2007',
                'year_out' => '2013',
                'major' => null
            ),
            array(
                'name' => 'SMP Al - Falah Dago Bandung',
                'year_in' => '2013',
                'year_out' => '2016',
                'major' => null
            ),
            array(
                'name' => 'SMK Al - Falah Dago Bandung',
                'year_in' => '2016',
                'year_out' => '2019',
                'major' => null
            )
        ),
        'skills' => array(
            array(
                'name' => 'HTML',
                'level' => 'Advance',
            ),
            array(
                'name' => 'CSS',
                'level' => 'Advance',
            ),
            array(
                'name' => 'JS',
                'level' => 'Advance',
            ),
            array(
                'name' => 'PHP',
                'level' => 'Advance',
            ),
            array(
                'name' => 'JQuery',
                'level' => 'Advance',
            ),
            array(
                'name' => 'Bootstrap',
                'level' => 'Beginer',
            ),
            array(
                'name' => 'Framework CodeIgniter',
                'level' => 'Advance',
            ),
            array(
                'name' => 'SQL',
                'level' => 'Advance',
            ),
            array(
                'name' => 'NodeJS',
                'level' => 'Beginer',
            )
        ),
        'interest_in_coding' => TRUE
    ));
}

echo generate_real_biodata();