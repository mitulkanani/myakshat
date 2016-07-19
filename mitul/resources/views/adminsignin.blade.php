@extends('guest')

@section('content')
<div id="login-page" class="row">
    <div class="col s12 z-depth-4 card-panel">
        @if (count($errors) > 0)
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif
        <form class="login-form" id="signin" role="form" method="POST" action="{{ url('/admin/logincheck') }}">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <div class="row">
                <div class="input-field col s12 center">
                    <img src="images/login-logo.png" alt="" class="circle responsive-img valign profile-image-login">
                    <p class="center login-form-text">Admin Login</p>
                </div>
            </div>
            <div class="row margin">
                <div class="input-field col s12">
                    <i class="mdi-social-person-outline prefix"></i>
                    <input id="username" type="text" name="username" placeholder="Username" value="{{ old('username') }}">
                    <label for="username" class="center-align">Username</label>
                </div>
            </div>
            <div class="row margin">
                <div class="input-field col s12">
                    <i class="mdi-action-lock-outline prefix"></i>
                    <input id="password" type="password" name="password" placeholder="Password">
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="row">          
                <div class="input-field col s12 m12 l12  login-text">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <button type="submit" class="btn waves-effect waves-light col s12">Login</button>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6 m6 l6">
                    <p class="margin medium-small"><a href="page-register.html">Register Now!</a></p>
                </div>
                <div class="input-field col s6 m6 l6">
                    <p class="margin right-align medium-small"><a href="page-forgot-password.html">Forgot password ?</a></p>
                </div>          
            </div>

        </form>
    </div>
</div>

<script>
    jQuery(document).ready(function() {
        var signupRules = {
            username: {
                required: true
            },
            password: {
                required: true
            }
        };
        $("#signin").validate({
            rules: signupRules,
            messages: {
                username: {
                    required: "Username is required"
                },
                password: {
                    required: "Password is required"
                }
            }
        });
    });
</script>

@stop