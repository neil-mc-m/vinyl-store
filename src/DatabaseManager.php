<?php

namespace VinylStore;

use Silex\Application;
use Doctrine\DBAL\Connection;

Class DatabaseManager
{
    protected $conn;

    public function __construct(Connection $conn)
    {
        $this->conn = $conn;
    }

    public function getTables()
    {
        $sm = $this->conn->getSchemaManager();
        $tables= $sm->listTableNames();


        return $tables;
    }

    public function viewTable($table)
    {
        $sm = $this->conn->getSchemaManager();
        $columns = $sm->listTableColumns($table);
        $name = array();

        foreach ($columns as $column) {
            $names = $column->getName();

            array_push($name, $names);


        }
        return $name;
        // return $columns;
    }
}
