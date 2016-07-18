<!DOCTYPE html>

<!------------------- mitul kanani's design is here------------->
<!DOCTYPE html>
<html lang="en">

    <!--================================================================================
            Item Name: Akshat
            Author: Mitul Kanani 
    ================================================================================ -->
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="description" content="Materialize is a Material Design Admin Template,It's modern, responsive and based on Material Design by Google. ">
        <meta name="keywords" content="materialize, admin template, dashboard template, flat admin template, responsive admin template,">
        <title>Akshat</title>

        <!-- Favicons-->
        <link rel="icon" href="{{ asset('/images/favicon/favicon-32x32.png')}}" sizes="32x32">
        <!-- Favicons-->
        <link rel="apple-touch-icon-precomposed" href="images/favicon/apple-touch-icon-152x152.png">
        <!-- For iPhone -->
        <meta name="msapplication-TileColor" content="#00bcd4">
        <meta name="msapplication-TileImage" content="images/favicon/mstile-144x144.png">
        <!-- For Windows Phone -->


        <!-- CORE CSS-->    
        <link href="{{ asset('/css/materialize.min.css')}}" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="{{ asset('/css/style.min.css')}}" type="text/css" rel="stylesheet" media="screen,projection">
        <!-- CSS for full screen (Layout-2)-->    
        <link href="css/layouts/style-fullscreen.css" type="text/css" rel="stylesheet" media="screen,projection">
        <!-- Custome CSS-->    
        <link href="css/custom/custom.min.css" type="text/css" rel="stylesheet" media="screen,projection">


        <!-- INCLUDED PLUGIN CSS ON THIS PAGE -->
        <link href="js/plugins/perfect-scrollbar/perfect-scrollbar.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="js/plugins/jvectormap/jquery-jvectormap.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="js/plugins/chartist-js/chartist.min.css" type="text/css" rel="stylesheet" media="screen,projection">



    </head>

    <body>
        <!-- Start Page Loading -->
        <div id="loader-wrapper">
            <div id="loader"></div>        
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
        </div>
        <!-- End Page Loading -->

        <!-- //////////////////////////////////////////////////////////////////////////// -->

        <!-- START HEADER -->
        
        <!-- END HEADER -->

        <!-- //////////////////////////////////////////////////////////////////////////// -->

        <div id="body_wrapper">
            @yield('content')
        </div>



        <!-- //////////////////////////////////////////////////////////////////////////// -->

        <!-- START FOOTER -->
        
        <!-- END FOOTER -->


        <!-- ================================================
        Scripts
        ================================================ -->

        <!-- jQuery Library -->
        <script type="text/javascript" src="{{ asset('/js/plugins/jquery-1.11.2.min.js')}}"></script>

        <!--Angular JS--> 
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js"></script>  
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular-route.min.js"></script>
        
        <!-- ui-table -->
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-touch.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-animate.js"></script>
        <script src="http://ui-grid.info/docs/grunt-scripts/csv.js"></script>
        <script src="http://ui-grid.info/docs/grunt-scripts/pdfmake.js"></script>
        <script src="http://ui-grid.info/docs/grunt-scripts/vfs_fonts.js"></script>
        <script src="{{ asset('/js/ui-grid.js')}}"></script>
        
        <!--materialize js-->
        <script type="text/javascript" src="{{ asset('/js/materialize.min.js')}}"></script>
        <!--scrollbar-->
        <script type="text/javascript" src="{{ asset('/js/plugins/perfect-scrollbar/perfect-scrollbar.min.js')}}"></script>


        <!-- chartist -->
        <script type="text/javascript" src="{{ asset('/js/plugins/chartist-js/chartist.min.js')}}"></script>   

        <!-- chartjs -->
        <script type="text/javascript" src="js/plugins/chartjs/chart.min.js"></script>
        <script type="text/javascript" src="js/plugins/chartjs/chart-script.js"></script>

        <!-- sparkline --> 
        <script type="text/javascript" src="js/plugins/sparkline/jquery.sparkline.min.js"></script>
        <script type="text/javascript" src="js/plugins/sparkline/sparkline-script.js"></script>

        <!-- google map api -->
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAZnaZBXLqNBRXjd-82km_NO7GUItyKek"></script>

        <!--jvectormap-->
        <script type="text/javascript" src="js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
        <script type="text/javascript" src="js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
        <script type="text/javascript" src="js/plugins/jvectormap/vectormap-script.js"></script>    


        <!--plugins.js - Some Specific JS codes for Plugin Settings-->
        <script type="text/javascript" src="js/plugins.min.js"></script>
        <!--custom-script.js - Add your own theme custom JS-->
        <script type="text/javascript" src="js/custom-script.js"></script>


        <!--MY App--> 
        <script src="js/angular-resource.min.js"></script>
        <script src="{{ asset('/app/packages/dirPagination.js')}}"></script>
        <script src="{{ asset('/app/routes.js')}}"></script>
        <script src="{{ asset('/app/services/myServices.js')}}"></script>
        <script src="{{ asset('/app/helper/myHelper.js')}}"></script>

        <!--App Controller--> 
        <script src="{{ asset('/app/controllers/ItemController.js')}}"></script>
        <!-- Toast Notification -->
        
    </body>


    <!-- Mirrored from demo.geekslabs.com/materialize/v3.1/layout-fullscreen.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 15 Jul 2016 13:39:30 GMT -->
</html>
<!------------------- mitul kanani's design is here------------->

