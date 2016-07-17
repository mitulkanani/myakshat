@extends('guest')

@section('content')

<div class="col-xs-12">
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
		</div>
<div class="login-box">
      <div class="login-logo">
        <b>Admin Login</b>
      </div><!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form id="signin" class="form-horizontal" role="form" method="POST" action="{{ url('/admin/logincheck') }}">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
          <div class="form-group has-feedback">
            <input type="text" class="form-control" id="username" name="username" placeholder="Username" value="{{ old('username') }}">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" id="password" name="password" placeholder="Password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <!--<div class="checkbox icheck">
                <label>
                  <input type="checkbox"> Remember Me
                </label>
              </div>-->
            </div>
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div><!-- /.col -->
          </div>
        </form>

        <!--<div class="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using Facebook</a>
          <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using Google+</a>
        </div>-->


      </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->

<script>
jQuery(document).ready(function() {
		var signupRules = {
				username:{
				  	required:true
				},
                password:{
				  	required:true
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