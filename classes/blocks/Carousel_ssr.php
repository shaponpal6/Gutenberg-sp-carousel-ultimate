<?php
namespace SPCU\Classes\blocks;

defined('ABSPATH') || exit;

class Carousel_ssr{
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
        register_block_type( 'spcu-blocks/carousel-ssr',
            array(
                'title' => __('SP Carousel SSR', 'spcu-blocks'),
                'attributes' => $this->get_attributes(),
                'render_callback' =>  array($this, 'content')
            )
        );
    }


    /**
     * Server Side rendering here
     */
    public function content($attr, $content) {
        $recent_posts = wp_get_recent_posts( array(
            'numberposts' => 4,
            'post_status' => 'publish',
        ) );
        if ( count( $recent_posts ) === 0 ) {
            return 'No posts';
        }
        ob_start();
		echo '<div class="spcu-block-wrapper">';
        foreach ( $recent_posts as $post){
            $post_id = $post['ID'];
            echo '<p><a class="spcu-block-latest-post" href="'.esc_url( get_permalink( $post_id ) ).'">'.esc_html( get_the_title( $post_id ) ).'</a></p>';
        }
		echo '</div>';
		return ob_get_clean();
    }
}

new Carousel_ssr();