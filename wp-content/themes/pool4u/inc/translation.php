<?php
/**
 *	ooooooooooooo                                         oooo                .    o8o
 *	8'   888   `8                                         `888              .o8    `"'
 *	     888      oooo d8b  .oooo.   ooo. .oo.    .oooo.o  888   .oooo.   .o888oo oooo   .ooooo.  ooo. .oo.
 *	     888      `888""8P `P  )88b  `888P"Y88b  d88(  "8  888  `P  )88b    888   `888  d88' `88b `888P"Y88b
 *	     888       888      .oP"888   888   888  `"Y88b.   888   .oP"888    888    888  888   888  888   888
 *	     888       888     d8(  888   888   888  o.  )88b  888  d8(  888    888 .  888  888   888  888   888
 *	    o888o     d888b    `Y888""8o o888o o888o 8""888P' o888o `Y888""8o   "888" o888o `Y8bod8P' o888o o888o
 *
 *
 * A set of wrapper functions to polylang functions.
 * Using these in stead of the default polylang functions allow you to
 * have the functions in the theme files without the page breaking
 * even when the Polylang plugin is not active.
 *
 * All functions correspond to polylang functions, using 'hsl_' prefix
 * in stead of 'pll_'. See Polylang documentation for function reference
 * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/
 *
 * Use the Headspin Theme Strings plugin to automatically scan and register strings
 * @link https://gitlab.headspin.no/HEADSPINDEV/PLUGINS/headspin-theme-string
 *
 * @package _headspin
 */

if ( !function_exists( "hsl__" ) ) {

    /**
     * translates a string previously registered with pll_register_string or hsl_register_string
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll__
     *
     * @param   string  $string  The string to translate
     *
     * @return  string           The translated string
     */
    function hsl__( $string ) {

		if ( function_exists( "pll__" ) ) return pll__( $string );

		return __( $string );
	}
}


if ( !function_exists( "hsl_e" ) ) {

    /**
     * Echoes a translated string previously registered with pll_register_string if hsl_register_string
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_e
     *
     * @param   string  $string  The string to translate
     */
	function hsl_e( $string ) {

		echo hsl__( $string );
	}
}


if ( !function_exists( "hsl_the_languages" ) ) {

    /**
     * Displays a language switcher.
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_the_languages
     *
     * @param   array  $args  Optional array of arguments
     */
	function hsl_the_languages( $args = "" ) {

		if ( function_exists( "pll_the_languages" ) ) return pll_the_languages( $args );

		trigger_error( "Function 'pll_the_languages' is not available. Polylang plugin is not activated", E_USER_NOTICE );
		return array();
	}
}


if ( !function_exists( "hsl_current_language" ) ) {

    /**
     * Returns the current language
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_current_language
     *
     * @param   string  $value  (Optional) either 'name' or 'locale' or 'slug'. Defaults to 'slug'
     *
     * @return  string          The current language
     */
	function hsl_current_language( $value = "slug" ) {

		if ( function_exists( "pll_current_language" ) ) return pll_current_language( $value );

		trigger_error( "Function 'pll_current_language' is not available. Polylang plugin is not activated", E_USER_NOTICE );
		return get_bloginfo( "language" );
	}
}


if ( !function_exists( "hsl_default_language" ) ) {

    /**
     * Returns the default language
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_default_language
     *
     * @param   string  $value  (Optional) either 'name' or 'locale' or 'slug'. Defaults to 'slug'
     *
     * @return  string          The default language
     */
	function hsl_default_language( $value = "" ) {

		if ( function_exists( "pll_default_language" ) ) return pll_default_language( $value );

		trigger_error( "Function 'pll_default_language' is not available. Polylang plugin is not activated", E_USER_NOTICE );
		return get_bloginfo( "language" );
	}
}


if ( !function_exists( "hsl_get_post" ) ) {

    /**
     * Returns the post (or page) translation
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_get_post
     *
     * @param   int  $post_id   id of the post you want the translation
     * @param   string  $slug   2-letters code of the language, defaults to current language
     *
     * @return  int             The ID of the translated post or page
     */
	function hsl_get_post( $post_id, $slug = "" ) {

		if ( function_exists( "pll_get_post" ) ) return pll_get_post( $post_id, $slug );

		return $post_id;
	}
}


if ( !function_exists( "hsl_get_term" ) ) {

    /**
     * Returns the category (or post tag) translation
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_get_term
     *
     * @param   int  $term_id   id of the term you want the translation
     * @param   string  $slug   2-letters code of the language, defaults to current language
     *
     * @return  int             The ID of the translated term or page
     */
	function hsl_get_term( $term_id, $slug = "" ) {

		if ( function_exists( "pll_get_term" ) ) return pll_get_term( $term_id, $slug );

		return $term_id;
	}
}


if ( !function_exists( "hsl_home_url" ) ) {

    /**
     * Returns the home page url
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_home_url
     *
     * @param   string  $slug  2-letters code of the language. The parameter is optional and
     *                         defaults to the current language if the function is called on frontend.
     *
     * @return  string         The url of the homepage in the requested language
     */
	function hsl_home_url( $slug = "" ) {

		if ( function_exists( "pll_home_url" ) ) return pll_home_url( $slug );

		return get_bloginfo( "page_on_front" );
	}
}


if ( !function_exists( "hsl_register_string" ) ) {

    /**
     * Allows plugins to add their own strings in the “strings translation” panel.
     * The function must be called on admin side (the functions.php file is OK for themes).
     * It is possible to register empty strings (for example when they come from options)
     * but they won’t appear in the list table.
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_register_string
     *
     * @param   string   $name       (required) name provided for sorting convenience (ex: ‘myplugin’)
     * @param   string   $string     (required) the string to translate
     * @param   string   $group      (optional) the group in which the string is registered, defaults to ‘polylang’
     * @param   boolean  $multiline  (optional) if set to true, the translation text field will be multiline, defaults to false
     */
	function hsl_register_string( $name, $string, $group = "polylang", $multiline = false ) {

		if ( function_exists( "pll_register_string" ) ) return pll_register_string( $name, $string, $group, $multiline );
	}
}


if ( !function_exists( "hsl_translate_string" ) ) {

    /**
     * Translates a string previously registered with hsl_register_string in a given language.
     * Unlike ‘hsl__()’ and ‘hsl_e()’ which allow to get the translation only in the current
     * language (as do the WordPress localization functions ‘__()’ and ‘_e()’), this function
     * allows to get the translation in any language.
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_translate_string
     *
     * @param   string  $string  The string to translate
     * @param   string  $lang    The language code of the desired translation
     *
     * @return  string           The translated stringø
     */
	function hsl_translate_string( $string, $lang ) {

		if ( function_exists( "pll_translate_string" ) ) return pll_translate_string( $string, $lang );

		return __( $string );
	}
}


if ( !function_exists( "hsl_is_translated_post_type" ) ) {

    /**
     * Returns true if Polylang manages languages and translations for this post type, false otherwise
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_is_translated_post_type
     *
     * @param   string  $post_type  The post type to check
     *
     * @return  boolean
     */
	function hsl_is_translated_post_type( $post_type ) {

		if ( function_exists( "pll_is_translated_post_type" ) ) return pll_is_translated_post_type( $post_type );

		return false;
	}
}


if ( !function_exists( "hsl_is_translated_taxonomy" ) ) {

    /**
     * Returns true if Polylang manages languages and translations for this taxonomy, false otherwise
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_is_translated_taxonomy
     *
     * @param   string  $taxonomy  The taxonomy to check
     *
     * @return  boolean
     */
	function hsl_is_translated_taxonomy( $taxonomy ) {

		if ( function_exists( "pll_is_translated_taxonomy" ) ) return pll_is_translated_taxonomy( $taxonomy );

		return false;
	}
}


if ( !function_exists( "hsl_languages_list" ) ) {

    /**
     * Returns the list of languages
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_languages_list
     *
     * @param   array  $args  (Optional) List of arguments
     *
     * @return  array         The languages list
     */
	function hsl_languages_list( $args = array() ) {

		if ( function_exists( "pll_languages_list" ) ) return pll_languages_list( $args );

		return array();
	}
}


if ( !function_exists( "hsl_get_post_language" ) ) {

    /**
     * Gets the language of a post or page (or custom post type post)
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_get_post_language
     *
     * @param   int     $post_id  (required) id of the post for which you want to get the language
     * @param   string  $field    (optional) either ‘name’ or ‘locale’ or ‘slug’, defaults to ‘slug’
     *
     * @return  string            Either the full name, or the WordPress locale or the slug ( 2-letters code) of the post.
     */
	function hsl_get_post_language( $post_id, $field = "slug" ) {

		if ( function_exists( "pll_get_post_language" ) ) return pll_get_post_language( $post_id, $field );

		return get_bloginfo( "language" );
	}
}


if ( !function_exists( "hsl_get_term_language" ) ) {

    /**
     * Gets the language of a category or post tag (or custom taxonomy term)
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_get_term_language
     *
     * @param   int     $term_id  (required) id of the term for which you want to get the language
     * @param   string  $field    (optional) either ‘name’ or ‘locale’ or ‘slug’, defaults to ‘slug’
     *
     * @return  string            Either the full name, or the WordPress locale or the slug ( 2-letters code) of the term.
     */
	function hsl_get_term_language( $term_id, $field = "slug" ) {

		if ( function_exists( "pll_get_term_language" ) ) return pll_get_term_language( $term_id, $field );

		return get_bloginfo( "language" );
	}
}


if ( !function_exists( "hsl_set_post_language" ) ) {

    /**
     * Sets the language of a post or page (or custom post type post)
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_set_post_language
     *
     * @param   int     $post_id  (required) id of the post for which you want to set the language
     * @param   string  $field    (required) language code
     */
	function hsl_set_post_language( $post_id, $field ) {

		if ( function_exists( "pll_set_post_language" ) ) return pll_set_post_language( $post_id, $field );

		return false;
	}
}


if ( !function_exists( "hsl_set_term_language" ) ) {

    /**
     * Sets the language of a category or post tag (or custom taxonomy term)
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_set_term_language
     *
     * @param   int     $term_id  (required) id of the term for which you want to set the language
     * @param   string  $field    (required) language code
     */
	function hsl_set_term_language( $term_id, $field ) {

		if ( function_exists( "pll_set_term_language" ) ) return pll_set_term_language( $term_id, $field );

		return false;
	}
}


if ( !function_exists( "hsl_save_post_translations" ) ) {

    /**
     * Defines which posts are translations of each other
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_save_post_translations
     *
     * @param   array  $arr  (required) associative array of translations with language code as key and post id as value
     */
	function hsl_save_post_translations( $arr ) {

		if ( function_exists( "pll_save_post_translations" ) ) return pll_save_post_translations( $arr );

		return false;
	}
}


if ( !function_exists( "hsl_save_term_translations" ) ) {

    /**
     * Defines which terms are translations of each other
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_save_term_translations
     *
     * @param   array  $arr  (required) associative array of translations with language code as key and term id as value
     */
	function hsl_save_term_translations( $arr ) {

		if ( function_exists( "pll_save_term_translations" ) ) return pll_save_term_translations( $arr );

		return false;
	}
}


if ( !function_exists( "hsl_count_posts" ) ) {

    /**
     * Counts posts in a defined language
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_count_posts
     *
     * @param   string  $lang  (required) language code
     * @param   array   $args  (optional) allows to restrict the count to a certain class of post archive.
     *                         Accepted keys are ‘post_type’, ‘m,’ ‘year’, ‘monthnum’,
     *                         ‘day’, ‘author’, ‘author_name’, ‘post_format’
     *
     * @return  int            Post count
     */
	function hsl_count_posts( $lang, $args = array() ) {

		if ( function_exists( "pll_count_posts" ) ) return pll_count_posts( $lang, $args );

		return 0;
	}
}


if ( !function_exists( "hsl_is_translated_post_of" ) ) {

    /**
     * Checks if the post is an translation of another post.
     *
     * @link https://polylang.wordpress.com/documentation/documentation-for-developers/functions-reference/#pll_count_posts
     *
     * @param   string  $post_id  (required) the ID of the post that it should be checked against
     *
     * @return  int            Post count
     */
	function hsl_is_translated_post_of( $post_id, $post_active = false ) {
        if( $post_active ) $post = $post_active;
        else global $post;

        if ( function_exists('pll_get_post_translations') ) {
            $language_post_ids = pll_get_post_translations( $post_id );
            foreach ( $language_post_ids as $lang_post_id ) {
                if( $post && $post->ID == $lang_post_id ) {
                    return true;
                }
            }
            return false;

        } else {
            if( $post && $post->ID == $post_id ) {
                return true;
            }
            return false;
        }
    }
}
