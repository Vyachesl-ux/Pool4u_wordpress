<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pool4u' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<o1rO] vdIC|H4 5.@H1Q#G2;X.Syvo4g:!PKHql}Aboq9NL*`vegP&81X]4d|x6' );
define( 'SECURE_AUTH_KEY',  '4hGrThg#d~``7WJi2L_RjoCj[)<`/fzSL8tknFkrgLsU$Up82Hmm <ZMb<Bzej`6' );
define( 'LOGGED_IN_KEY',    'e*o{9r$?JF4h5%]IRKr|b<BE5Z)Pg-`X|Na&^3A?J3>@6BD%KfJ#k<wu.HBu5 {6' );
define( 'NONCE_KEY',        '>I~kB[]2xi!bu$Gs6h&xeh}-gI:j<4fl,d}k:V+!m8s!m,xk_uY*0wlTgc[2aS[?' );
define( 'AUTH_SALT',        'fu3`8 }RWO%FP?*F-o29^-Y/rqgG<6CiU=SMQGPN(9C~d1GZ#6lDA{k7Tge.AJy,' );
define( 'SECURE_AUTH_SALT', 'n_$4zJuc?([6He` n dcYihXYKf[*u?w$66uX|1N^V4,8u;tn(Y.#(;9-wg-[/!p' );
define( 'LOGGED_IN_SALT',   'rf-lE}]vV!}Zi-uT0!?[^-R!oPSQ5EV3:O3Z(^UF K~,kW)_.7AN&rB7`a?_FU0b' );
define( 'NONCE_SALT',       '}HcFn`fn,`7s:.QL}/>qLA.jegiv@98%xM>v}oo>z`= p>PL138gnya,_8:uZ.6o' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
