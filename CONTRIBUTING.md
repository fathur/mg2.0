# Contribution Guidelines

## Tools

Tool dan 3rd paty yang digunakan adalah Grunt, Sass, Laravel, dan AngularJS.
Untuk melakukan instalasi development, perhatikan langkah-langkah berikut:

### Sass

Sass adalah tool yang sangat bermanfaat untuk mendesain css.

1. Install Ruby terlebih dahulu di komputer, [download disini](http://rubyinstaller.org/).

2. Setelah itu install sass dengan mengetikkan perintah `gem install sass`. Gem adalah
perintah bawaan Ruby.

### Grunt

Sistem ini dikembangkan menggunakan grunt sebagai front end workflownya. 
Cara menggunakan grunt:

1. Install terlebih dahulu grunt menggunakan perintah `npm install grunt-cli -g` secara global

2. Kemudian install dependency menggunakan perintah `npm install`. Perintah tersebut akan 
membaca file package.json dan melakukan instalasi dependency berdasarkan daftar yang terdapat 
dalam file tersebut. Jika berhasil makan akan terbentuk satu folder *node_modules*.

3. Untuk menjalankan grunt ketikkan perintah `grunt` saja di terminal. 
Perintah ini akan mengeksekusi file Gruntfile.js.

### Laravel

Langkah selanjutnya adalah install web server apllication.

1. Install composer terlebih dahulu di komputer Anda, [dowload disini](https://getcomposer.org/download/)

2. Setelah terinstall masuk ke direktori aplikasi dan ketikkan perintah `composer install`.
Semua paket yang terinstall akan masuk ke dalam direktori __vendor__

### Angular JS

Sistem ini menggunakan SPA (Single Page Application). Untuk pembuatanya menggukan library Javascript MVC
[AngularJS](https://angularjs.org/)

## Issue

Untuk issue masukkan disini [https://github.com/fathur/mg2.0/issues](https://github.com/fathur/mg2.0/issues)
