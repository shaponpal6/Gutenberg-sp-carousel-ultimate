<?php
namespace SPCU\Classes;

defined('ABSPATH') || exit;

class Loader{

    /**
     * Construct 
     */
    public function __construct() {
        $this->file_loader();
    }


    /**
     * File Loader
     */
    public function file_loader(){
        include_once SPCU_PLUGIN_PATH.'classes/blocks/Carousel_react.php';
        include_once SPCU_PLUGIN_PATH.'classes/blocks/Carousel_ssr.php';
        include_once SPCU_PLUGIN_PATH.'classes/blocks/Block_acf.php';
        include_once SPCU_PLUGIN_PATH.'classes/blocks/Editable.php';
    }
}