<?php
namespace SPCU\Classes\blocks;

defined('ABSPATH') || exit;

class Editable{
    /**
     * Attributes 
     */
    private $attributes;


    /**
     * Construct 
     */
    public function __construct() {
        add_action('init', array($this, 'register'));
    }


    /**
     * Set Attributes
     */
    public function set_attributes($default = false){
        $this->attributes = $default;
    }


    /**
     * Get Attributes
     */
    public function get_attributes($default = false){

        $attributes = array(

        );
        if(!!$this->attributes && $this->attributes !== false){
            return array_merge($attributes, $this->attributes);
        }
        return $attributes;
    }


    /**
     * Register Block
     */
    public function register() {
        register_block_type( 'spcu-blocks/editable-text-block',
            array(
                'title' => __('SP editable Text', 'spcu-blocks'),
                'attributes' => $this->get_attributes(),
                // 'render_callback' =>  array($this, 'content')
            )
        );
    }


    /**
     * Server Side rendering here
     */
    public function content($attr, $content) {
        return "Server Side Render here";
    }
}

new Editable();