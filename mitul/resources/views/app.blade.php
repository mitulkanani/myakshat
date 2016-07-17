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
        <link rel="apple-touch-icon-precomposed" href="{{ asset('/images/favicon/apple-touch-icon-152x152.png')}}">
        <!-- For iPhone -->
        <meta name="msapplication-TileColor" content="#00bcd4">
        <meta name="msapplication-TileImage" content="{{ asset('/images/favicon/mstile-144x144.png')}}">
        <!-- For Windows Phone -->


        <!-- CORE CSS-->    
        <link href="{{ asset('/css/materialize.min.css')}}" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="{{ asset('/css/style.min.css')}}" type="text/css" rel="stylesheet" media="screen,projection">
        <!-- CSS for full screen (Layout-2)-->    
        <link href="{{ asset('/css/layouts/style-fullscreen.css')}}" type="text/css" rel="stylesheet" media="screen,projection">
        <!-- Custome CSS-->    
        <link href="{{ asset('/css/custom/custom.min.css')}}" type="text/css" rel="stylesheet" media="screen,projection">


        <!-- INCLUDED PLUGIN CSS ON THIS PAGE -->
        <link href="js/plugins/prism/prism.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="js/plugins/data-tables/css/jquery.dataTables.min.css" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="{{ asset('/js/plugins/perfect-scrollbar/perfect-scrollbar.css')}}" type="text/css" rel="stylesheet" media="screen,projection">
        <link href="{{ asset('/js/plugins/chartist-js/chartist.min.css')}}" type="text/css" rel="stylesheet" media="screen,projection">

  
    </head>

    <body ng-app="main-App">
        <!-- Start Page Loading -->
        <div id="loader-wrapper">
            <div id="loader"></div>        
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
        </div>
        <!-- End Page Loading -->

        <!-- //////////////////////////////////////////////////////////////////////////// -->

        <!-- START HEADER -->
        <header id="header" class="page-topbar">
            <!-- start header nav-->
            <div class="navbar-fixed">
                <nav class="navbar-color">
                    <div class="nav-wrapper">
                        <ul class="left">                      
                            <li><h1 class="logo-wrapper"><a href="index.html" class="brand-logo darken-1"><img src="{{ asset('/images/materialize-logo.png')}}" alt="materialize logo"></a> <span class="logo-text">Materialize</span></h1></li>
                        </ul>
                        <div class="header-search-wrapper hide-on-med-and-down">
                            <i class="mdi-action-search"></i>
                            <input type="text" name="Search" class="header-search-input z-depth-2" placeholder="Explore Materialize"/>
                        </div>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="javascript:void(0);" class="waves-effect waves-block waves-light translation-button"  data-activates="translation-dropdown"><img src="{{ asset('/images/flag-icons/United-States.png')}}" alt="USA" /></a>
                            </li>
                            <li><a href="javascript:void(0);" class="waves-effect waves-block waves-light toggle-fullscreen"><i class="mdi-action-settings-overscan"></i></a>
                            </li>
                            <li><a href="javascript:void(0);" class="waves-effect waves-block waves-light notification-button" data-activates="notifications-dropdown"><i class="mdi-social-notifications"><small class="notification-badge">5</small></i>

                                </a>
                            </li>                        
                            <li><a href="#" data-activates="chat-out" class="waves-effect waves-block waves-light chat-collapse"><i class="mdi-communication-chat"></i></a>
                            </li>
                        </ul>
                        <!-- translation-button -->
                        <ul id="translation-dropdown" class="dropdown-content">
                            <li>
                                <a href="#!"><img src="images/flag-icons/United-States.png" alt="English" />  <span class="language-select">English</span></a>
                            </li>
                            <li>
                                <a href="#!"><img src="images/flag-icons/France.png" alt="French" />  <span class="language-select">French</span></a>
                            </li>
                            <li>
                                <a href="#!"><img src="images/flag-icons/China.png" alt="Chinese" />  <span class="language-select">Chinese</span></a>
                            </li>
                            <li>
                                <a href="#!"><img src="images/flag-icons/Germany.png" alt="German" />  <span class="language-select">German</span></a>
                            </li>

                        </ul>
                        <!-- notifications-dropdown -->
                        <ul id="notifications-dropdown" class="dropdown-content">
                            <li>
                                <h5>NOTIFICATIONS <span class="new badge">5</span></h5>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#!"><i class="mdi-action-add-shopping-cart"></i> A new order has been placed!</a>
                                <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">2 hours ago</time>
                            </li>
                            <li>
                                <a href="#!"><i class="mdi-action-stars"></i> Completed the task</a>
                                <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>
                            </li>
                            <li>
                                <a href="#!"><i class="mdi-action-settings"></i> Settings updated</a>
                                <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">4 days ago</time>
                            </li>
                            <li>
                                <a href="#!"><i class="mdi-editor-insert-invitation"></i> Director meeting started</a>
                                <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">6 days ago</time>
                            </li>
                            <li>
                                <a href="#!"><i class="mdi-action-trending-up"></i> Generate monthly report</a>
                                <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">1 week ago</time>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <!-- end header nav-->
        </header>
        <!-- END HEADER -->

        <!-- //////////////////////////////////////////////////////////////////////////// -->

        <!-- START MAIN -->
        <div id="main">
            <!-- START WRAPPER -->
            <div class="wrapper">

                <!-- START LEFT SIDEBAR NAV-->
                <aside id="left-sidebar-nav">
                    <ul id="slide-out" class="side-nav leftside-navigation">
                        <li class="user-details cyan darken-2">
                            <div class="row">
                                <div class="col col s4 m4 l4">
                                    <img src="images/avatar.jpg" alt="" class="circle responsive-img valign profile-image">
                                </div>
                                <div class="col col s8 m8 l8">
                                    <ul id="profile-dropdown" class="dropdown-content">
                                        <li><a href="#"><i class="mdi-action-face-unlock"></i> Profile</a>
                                        </li>
                                        <li><a href="#"><i class="mdi-action-settings"></i> Settings</a>
                                        </li>
                                        <li><a href="#"><i class="mdi-communication-live-help"></i> Help</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="#"><i class="mdi-action-lock-outline"></i> Lock</a>
                                        </li>
                                        <li><a href="#"><i class="mdi-hardware-keyboard-tab"></i> Logout</a>
                                        </li>
                                    </ul>
                                    <a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown">Mitul Kanani<i class="mdi-navigation-arrow-drop-down right"></i></a>
                                    <p class="user-roal">Administrator</p>
                                </div>
                            </div>
                        </li>
                        <li class="bold"><a href="#/" class="waves-effect waves-cyan"><i class="mdi-action-dashboard"></i> Dashboard</a>
                        </li>
                        <li class="bold"><a href="#/clients" class="waves-effect waves-cyan"><i class="mdi-action-view-carousel"></i> Clients</a>
                        </li>
                        <li class="no-padding">
                            <ul class="collapsible collapsible-accordion">
                                <li class="bold"><a class="collapsible-header waves-effect waves-cyan active"><i class="mdi-action-view-carousel"></i>Details</a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li class="active"><a href="layout-fullscreen.html">LIC</a>
                                            </li>
                                            <li><a href="layout-horizontal-menu.html">Others</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="bold"><a href="app-email.html" class="waves-effect waves-cyan"><i class="mdi-communication-email"></i> Mailbox <span class="new badge">4</span></a>
                        </li>
                        <li class="bold"><a href="app-calendar.html" class="waves-effect waves-cyan"><i class="mdi-editor-insert-invitation"></i> Calender</a>
                        </li>
                        <li class="no-padding">
                            <ul class="collapsible collapsible-accordion">
                                <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-action-invert-colors"></i> CSS</a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="css-typography.html">Typography</a>
                                            </li>
                                            <li><a href="css-icons.html">Icons</a>
                                            </li>
                                            <li><a href="css-animations.html">Animations</a>
                                            </li>
                                            <li><a href="css-shadow.html">Shadow</a>
                                            </li>
                                            <li><a href="css-media.html">Media</a>
                                            </li>
                                            <li><a href="css-sass.html">Sass</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-image-palette"></i> UI Elements</a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="ui-alerts.html">Alerts</a>
                                            </li>
                                            <li><a href="ui-buttons.html">Buttons</a>
                                            </li>
                                            <li><a href="ui-badges.html">Badges</a>
                                            </li>
                                            <li><a href="ui-breadcrumbs.html">Breadcrumbs</a>
                                            </li>
                                            <li><a href="ui-collections.html">Collections</a>
                                            </li>
                                            <li><a href="ui-collapsibles.html">Collapsibles</a>
                                            </li>
                                            <li><a href="ui-tabs.html">Tabs</a>
                                            </li>
                                            <li><a href="ui-navbar.html">Navbar</a>
                                            </li>
                                            <li><a href="ui-pagination.html">Pagination</a>
                                            </li>
                                            <li><a href="ui-preloader.html">Preloader</a>
                                            </li>
                                            <li><a href="ui-toasts.html">Toasts</a>
                                            </li>
                                            <li><a href="ui-tooltip.html">Tooltip</a>
                                            </li>
                                            <li><a href="ui-waves.html">Waves</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-av-queue"></i> Advanced UI <span class="new badge"></span></a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="advanced-ui-chips.html">Chips</a>
                                            </li>
                                            <li><a href="advanced-ui-cards.html">Cards</a>
                                            </li>
                                            <li><a href="advanced-ui-modals.html">Modals</a>
                                            </li>
                                            <li><a href="advanced-ui-media.html">Media</a>
                                            </li>
                                            <li><a href="advanced-ui-range-slider.html">Range Slider</a>
                                            </li>
                                            <li><a href="advanced-ui-sweetalert.html">SweetAlert</a>
                                            </li>
                                            <li><a href="advanced-ui-nestable.html">Shortable & Nestable</a>
                                            </li>
                                            <li><a href="advanced-ui-translation.html">Language Translation</a>
                                            </li>
                                            <li><a href="advanced-ui-highlight.html">Highlight</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="bold"><a href="app-widget.html" class="waves-effect waves-cyan"><i class="mdi-device-now-widgets"></i> Widgets</a>
                                </li>
                                <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-editor-border-all"></i> Tables</a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="table-basic.html">Basic Tables</a>
                                            </li>
                                            <li><a href="table-data.html">Data Tables</a>
                                            </li>
                                            <li><a href="table-jsgrid.html">jsGrid</a>
                                            </li>
                                            <li><a href="table-editable.html">Editable Table</a>
                                            </li>
                                            <li><a href="table-floatThead.html">floatThead</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-editor-insert-comment"></i> Forms <span class="new badge"></span></a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="form-elements.html">Form Elements</a>
                                            </li>
                                            <li><a href="form-layouts.html">Form Layouts</a>
                                            </li>
                                            <li><a href="form-validation.html">Form Validations</a>
                                            </li>
                                            <li><a href="form-masks.html">Form Masks</a>
                                            </li>
                                            <li><a href="form-file-uploads.html">File Uploads</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-social-pages"></i> Pages</a>
                                    <div class="collapsible-body">
                                        <ul>                                        
                                            <li><a href="page-contact.html">Contact Page</a>
                                            </li>
                                            <li><a href="page-todo.html">ToDos</a>
                                            </li>
                                            <li><a href="page-blog-1.html">Blog Type 1</a>
                                            </li>
                                            <li><a href="page-blog-2.html">Blog Type 2</a>
                                            </li>
                                            <li><a href="page-404.html">404</a>
                                            </li>
                                            <li><a href="page-500.html">500</a>
                                            </li>
                                            <li><a href="page-blank.html">Blank</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-action-shopping-cart"></i> eCommers</a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="eCommerce-products-page.html">Products Page</a>
                                            </li>                                        
                                            <li><a href="eCommerce-pricing.html">Pricing Table</a>
                                            </li>
                                            <li><a href="eCommerce-invoice.html">Invoice</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-image-image"></i> Medias</a>
                                    <div class="collapsible-body">
                                        <ul>                                        
                                            <li><a href="media-gallary-page.html">Gallery Page</a>
                                            </li>
                                            <li><a href="media-hover-effects.html">Image Hover Effects</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-action-account-circle"></i> User</a>
                                    <div class="collapsible-body">
                                        <ul>     
                                            <li><a href="user-profile-page.html">User Profile</a>
                                            </li>                                   
                                            <li><a href="user-login.html">Login</a>
                                            </li>                                        
                                            <li><a href="user-register.html">Register</a>
                                            </li>
                                            <li><a href="user-forgot-password.html">Forgot Password</a>
                                            </li>
                                            <li><a href="user-lock-screen.html">Lock Screen</a>
                                            </li>                                        
                                            <li><a href="user-session-timeout.html">Session Timeout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-editor-insert-chart"></i> Charts</a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li><a href="charts-chartjs.html">Chart JS</a>
                                            </li>
                                            <li><a href="charts-chartist.html">Chartist</a>
                                            </li>
                                            <li><a href="charts-morris.html">Morris Charts</a>
                                            </li>
                                            <li><a href="charts-xcharts.html">xCharts</a>
                                            </li>
                                            <li><a href="charts-flotcharts.html">Flot Charts</a>
                                            </li>
                                            <li><a href="charts-sparklines.html">Sparkline Charts</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="li-hover"><div class="divider"></div></li>
                        <li class="li-hover"><p class="ultra-small margin more-text">MORE</p></li>
                        <li><a href="angular-ui.html"><i class="mdi-action-verified-user"></i> Angular UI  <span class="new badge"></span></a>
                        </li>
                        <li><a href="css-grid.html"><i class="mdi-image-grid-on"></i> Grid</a>
                        </li>
                        <li><a href="css-color.html"><i class="mdi-editor-format-color-fill"></i> Color</a>
                        </li>
                        <li><a href="css-helpers.html"><i class="mdi-communication-live-help"></i> Helpers</a>
                        </li>
                        <li><a href="changelogs.html"><i class="mdi-action-swap-vert-circle"></i> Changelogs</a>
                        </li>                    
                        <li class="li-hover"><div class="divider"></div></li>
                        <li class="li-hover"><p class="ultra-small margin more-text">Todays B'Day</p></li>
                        <li class="li-hover">
                            <div class="row">
                                <div class="col s12 m12 l12">
                                    <div class="sample-chart-wrapper">                            
                                        <div class="ct-chart ct-golden-section" id="ct2-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light cyan"><i class="mdi-navigation-menu"></i></a>
                </aside>
                <!-- END LEFT SIDEBAR NAV-->

                <!-- //////////////////////////////////////////////////////////////////////////// -->

                <!-- START CONTENT -->
                
                    <div >
                        <ng-view></ng-view>
                    </div>
                <!-- END CONTENT -->

                <!-- //////////////////////////////////////////////////////////////////////////// -->
                <!-- START RIGHT SIDEBAR NAV-->
                <aside id="right-sidebar-nav">
                    <ul id="chat-out" class="side-nav rightside-navigation">
                        <li class="li-hover">
                            <a href="#/" data-activates="chat-out" class="chat-close-collapse right"><i class="mdi-navigation-close"></i></a>
                            <div id="right-search" class="row">
                                <form class="col s12">
                                    <div class="input-field">
                                        <i class="mdi-action-search prefix"></i>
                                        <input id="icon_prefix" type="text" class="validate">
                                        <label for="icon_prefix">Search</label>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li class="li-hover">
                            <ul class="chat-collapsible" data-collapsible="expandable">
                                <li>
                                    <div class="collapsible-header teal white-text active"><i class="mdi-social-whatshot"></i>Recent Activity</div>
                                    <div class="collapsible-body recent-activity">
                                        <div class="recent-activity-list chat-out-list row">
                                            <div class="col s3 recent-activity-list-icon"><i class="mdi-action-add-shopping-cart"></i>
                                            </div>
                                            <div class="col s9 recent-activity-list-text">
                                                <a href="#">just now</a>
                                                <p>Jim Doe Purchased new equipments for zonal office.</p>
                                            </div>
                                        </div>
                                        <div class="recent-activity-list chat-out-list row">
                                            <div class="col s3 recent-activity-list-icon"><i class="mdi-device-airplanemode-on"></i>
                                            </div>
                                            <div class="col s9 recent-activity-list-text">
                                                <a href="#">Yesterday</a>
                                                <p>Your Next flight for USA will be on 15th August 2015.</p>
                                            </div>
                                        </div>
                                        <div class="recent-activity-list chat-out-list row">
                                            <div class="col s3 recent-activity-list-icon"><i class="mdi-action-settings-voice"></i>
                                            </div>
                                            <div class="col s9 recent-activity-list-text">
                                                <a href="#">5 Days Ago</a>
                                                <p>Natalya Parker Send you a voice mail for next conference.</p>
                                            </div>
                                        </div>
                                        <div class="recent-activity-list chat-out-list row">
                                            <div class="col s3 recent-activity-list-icon"><i class="mdi-action-store"></i>
                                            </div>
                                            <div class="col s9 recent-activity-list-text">
                                                <a href="#">Last Week</a>
                                                <p>Jessy Jay open a new store at S.G Road.</p>
                                            </div>
                                        </div>
                                        <div class="recent-activity-list chat-out-list row">
                                            <div class="col s3 recent-activity-list-icon"><i class="mdi-action-settings-voice"></i>
                                            </div>
                                            <div class="col s9 recent-activity-list-text">
                                                <a href="#">5 Days Ago</a>
                                                <p>Natalya Parker Send you a voice mail for next conference.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="collapsible-header light-blue white-text active"><i class="mdi-editor-attach-money"></i>Sales Repoart</div>
                                    <div class="collapsible-body sales-repoart">
                                        <div class="sales-repoart-list  chat-out-list row">
                                            <div class="col s8">Target Salse</div>
                                            <div class="col s4"><span id="sales-line-1"></span>
                                            </div>
                                        </div>
                                        <div class="sales-repoart-list chat-out-list row">
                                            <div class="col s8">Payment Due</div>
                                            <div class="col s4"><span id="sales-bar-1"></span>
                                            </div>
                                        </div>
                                        <div class="sales-repoart-list chat-out-list row">
                                            <div class="col s8">Total Delivery</div>
                                            <div class="col s4"><span id="sales-line-2"></span>
                                            </div>
                                        </div>
                                        <div class="sales-repoart-list chat-out-list row">
                                            <div class="col s8">Total Progress</div>
                                            <div class="col s4"><span id="sales-bar-2"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="collapsible-header red white-text"><i class="mdi-action-stars"></i>Favorite Associates</div>
                                    <div class="collapsible-body favorite-associates">
                                        <div class="favorite-associate-list chat-out-list row">
                                            <div class="col s4"><img src="images/avatar.jpg" alt="" class="circle responsive-img online-user valign profile-image">
                                            </div>
                                            <div class="col s8">
                                                <p>Eileen Sideways</p>
                                                <p class="place">Los Angeles, CA</p>
                                            </div>
                                        </div>
                                        <div class="favorite-associate-list chat-out-list row">
                                            <div class="col s4"><img src="images/avatar.jpg" alt="" class="circle responsive-img online-user valign profile-image">
                                            </div>
                                            <div class="col s8">
                                                <p>Zaham Sindil</p>
                                                <p class="place">San Francisco, CA</p>
                                            </div>
                                        </div>
                                        <div class="favorite-associate-list chat-out-list row">
                                            <div class="col s4"><img src="images/avatar.jpg" alt="" class="circle responsive-img offline-user valign profile-image">
                                            </div>
                                            <div class="col s8">
                                                <p>Renov Leongal</p>
                                                <p class="place">Cebu City, Philippines</p>
                                            </div>
                                        </div>
                                        <div class="favorite-associate-list chat-out-list row">
                                            <div class="col s4"><img src="images/avatar.jpg" alt="" class="circle responsive-img online-user valign profile-image">
                                            </div>
                                            <div class="col s8">
                                                <p>Weno Carasbong</p>
                                                <p>Tokyo, Japan</p>
                                            </div>
                                        </div>
                                        <div class="favorite-associate-list chat-out-list row">
                                            <div class="col s4"><img src="images/avatar.jpg" alt="" class="circle responsive-img offline-user valign profile-image">
                                            </div>
                                            <div class="col s8">
                                                <p>Nusja Nawancali</p>
                                                <p class="place">Bangkok, Thailand</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>
                <!-- LEFT RIGHT SIDEBAR NAV-->

            </div>
            <!-- END WRAPPER -->

        </div>
        <!-- END MAIN -->



        <!-- //////////////////////////////////////////////////////////////////////////// -->

        <!-- START FOOTER -->
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">World Market</h5>
                        <p class="grey-text text-lighten-4">World map, world regions, countries and cities.</p>
                        <div id="world-map-markers"></div>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Sales by Country</h5>
                        <p class="grey-text text-lighten-4">A sample polar chart to show sales by country.</p>
                        <div id="polar-chart-holder">
                            <canvas id="polar-chart-country" width="200"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    Copyright © 2015 <a class="grey-text text-lighten-4" href="http://themeforest.net/user/geekslabs/portfolio?ref=geekslabs" target="_blank">GeeksLabs</a> All rights reserved.
                    <span class="right"> Design and Developed by <a class="grey-text text-lighten-4" href="http://geekslabs.com/">GeeksLabs</a></span>
                </div>
            </div>
        </footer>
        <!-- END FOOTER -->


        <!-- ================================================
        Scripts
        ================================================ -->

        <!-- jQuery Library -->
        <script type="text/javascript" src="{{ asset('/js/plugins/jquery-1.11.2.min.js')}}"></script>

        <!--Angular JS--> 
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js"></script>  
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular-route.min.js"></script>

        <!--materialize js-->
        <script type="text/javascript" src="{{ asset('/js/materialize.min.js')}}"></script>
        <!--scrollbar-->
        <script type="text/javascript" src="{{ asset('/js/plugins/perfect-scrollbar/perfect-scrollbar.min.js')}}"></script>

        <!-- data-tables -->
        <script type="text/javascript" src="{{ asset('/js/plugins/data-tables/js/jquery.dataTables.min.js')}}"></script>
        <script type="text/javascript" src="{{ asset('/js/plugins/data-tables/data-tables-script.js')}}"></script>
        <!-- chartist -->
        <script type="text/javascript" src="{{ asset('/js/plugins/chartist-js/chartist.min.js')}}"></script>   

        <!-- chartjs -->
        <script type="text/javascript" src="{{ asset('/js/plugins/chartjs/chart.min.js')}}"></script>
        <script type="text/javascript" src="{{ asset('/js/plugins/chartjs/chart-script.js')}}"></script>

        <!-- sparkline --> 
        <script type="text/javascript" src="{{ asset('/js/plugins/sparkline/jquery.sparkline.min.js')}}"></script>
        <script type="text/javascript" src="{{ asset('/js/plugins/sparkline/sparkline-script.js')}}"></script>

        <!-- google map api -->
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAZnaZBXLqNBRXjd-82km_NO7GUItyKek"></script>

        <!--jvectormap-->
        <script type="text/javascript" src="{{ asset('/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js')}}"></script>
        <script type="text/javascript" src="{{ asset('/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js')}}"></script>
        <script type="text/javascript" src="{{ asset('/js/plugins/jvectormap/vectormap-script.js')}}"></script>    


        <!--plugins.js - Some Specific JS codes for Plugin Settings-->
        <script type="text/javascript" src="{{ asset('/js/plugins.min.js')}}"></script>
        <!--custom-script.js - Add your own theme custom JS-->
        <script type="text/javascript" src="{{ asset('/js/custom-script.js')}}"></script>


        <!--MY App--> 
        <script src="{{ asset('/js/angular-resource.min.js')}}"></script>
        <script src="{{ asset('/app/packages/dirPagination.js')}}"></script>
        <script src="{{ asset('/app/routes.js')}}"></script>
        <script src="{{ asset('/app/services/myServices.js')}}"></script>
        <script src="{{ asset('/app/helper/myHelper.js')}}"></script>

        <!--App Controller--> 
        <script src="{{ asset('/app/controllers/ItemController.js')}}"></script>
        <!-- Toast Notification -->
        <script type="text/javascript">
            // Toast Notification
            $(window).load(function () {
                setTimeout(function () {
                    Materialize.toast('<span>Hiya! I am a toast.</span>', 1500);
                }, 1500);
                setTimeout(function () {
                    Materialize.toast('<span>You can swipe me too!</span>', 3000);
                }, 5000);
                setTimeout(function () {
                    Materialize.toast('<span>You have new order.</span><a class="btn-flat yellow-text" href="#">Read<a>', 3000);
                }, 15000);
            });


            $(function () {
                // Google Maps  
                $('#map-canvas').addClass('loading');
                var latlng = new google.maps.LatLng(40.6700, -73.9400); // Set your Lat. Log. New York
                var settings = {
                    zoom: 10,
                    center: latlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                    scrollwheel: false,
                    draggable: true,
                    styles: [{"featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"color": "#e0efef"}]}, {"featureType": "poi", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"hue": "#1900ff"}, {"color": "#c0e8e8"}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"lightness": 100}, {"visibility": "simplified"}]}, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"visibility": "on"}, {"lightness": 700}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#7dcdcd"}]}],
                    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
                    navigationControl: false,
                    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                };
                var map = new google.maps.Map(document.getElementById("map-canvas"), settings);

                google.maps.event.addDomListener(window, "resize", function () {
                    var center = map.getCenter();
                    google.maps.event.trigger(map, "resize");
                    map.setCenter(center);
                    $('#map-canvas').removeClass('loading');
                });

                var contentString =
                        '<div id="info-window">' +
                        '<p>18 McLuice Road, Vellyon Hills,<br /> New York, NY 10010<br /><a href="https://plus.google.com/102896039836143247306/about?gl=za&hl=en" target="_blank">Get directions</a></p>' +
                        '</div>';
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                var companyImage = new google.maps.MarkerImage('images/map-marker.png',
                        new google.maps.Size(36, 62), // Width and height of the marker
                        new google.maps.Point(0, 0),
                        new google.maps.Point(18, 52)// Position of the marker 
                        );

                var companyPos = new google.maps.LatLng(40.6700, -73.9400);

                var companyMarker = new google.maps.Marker({
                    position: companyPos,
                    map: map,
                    icon: companyImage,
                    title: "Shapeshift Interactive",
                    zIndex: 3});

                google.maps.event.addListener(companyMarker, 'click', function () {
                    infowindow.open(map, companyMarker);
                    pageView('http://demo.geekslabs.com/#address');
                });
            });
        </script>
    </body>


    <!-- Mirrored from demo.geekslabs.com/materialize/v3.1/layout-fullscreen.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 15 Jul 2016 13:39:30 GMT -->
</html>
<!------------------- mitul kanani's design is here------------->
<!--<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel 5.2</title>

         Fonts 
        <link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>

         HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries 
         WARNING: Respond.js doesn't work if you view the page via file:// 
        [if lt IE 9]>
                <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">

        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/js/bootstrap.min.js"></script>

         Angular JS 
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js"></script>  
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular-route.min.js"></script>

         MY App 
        <script src="{{ asset('/app/packages/dirPagination.js')}}"></script>
        <script src="{{ asset('/app/routes.js')}}"></script>
        <script src="{{ asset('/app/services/myServices.js')}}"></script>
        <script src="{{ asset('/app/helper/myHelper.js')}}"></script>

         App Controller 
        <script src="{{ asset('/app/controllers/ItemController.js')}}"></script>

    </head>
    <body ng-app="main-App">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Laravel 5.2</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/items">Item</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <ng-view></ng-view>
        </div>

         Scripts 

    </body>
</html>-->
