/* #javascript jquery
 *
 *
 */
$(document).ready(function(){

	/* Toggle Options
	 *------------------*/
	$("#toggle-options").click(function(){
		$(".options").toggleClass("toggled");
	})

	/* Options for Navbar fixed or Not
	 * -------------------------------------------*/
	$("#fix-nav-option").click(function(){
		let c = $("#fix-nav-option:checked").length;
		if(c==0){
			$(".navbar").removeClass("fixed-top");
			$(".wrapper-content").css("margin-top", "70px")
		}
		else{
			$(".navbar").addClass("fixed-top");
			$(".wrapper-content").css("margin-top", "130px")
		}
	})

	/* Options Form Show Sidebar or Not
	 * ----------------------------------------------*/
	$("#show-side-option").click(function(){
		let c = $("#show-side-option:checked").length;

		if(c==0){
			$("#content").removeClass("col-sm-8").addClass("col-sm-12");
			$("#content").find("div.col-md-6").addClass("col-lg-4");
			$("#sidebar").html("");
		}
		else{
			$("#content").removeClass("col-sm-12").addClass("col-sm-8");
			$("#content").find("div.col-lg-4").removeClass("col-lg-4");
			$("#sidebar").load("excerpt/sidebar.html");
		}
	})
})


/* angular module
 *
 *
 */
 var barMagz = angular.module('barmagz', []);

 barMagz.component('navbar', {
 	template:'<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white"><div class="container flex-wrap"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="fa fa-bars"></span> </button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav mr-auto"><li class="nav-item"> <a class="nav-link" href="index.html">Home</a></li><li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Categories </a><div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="#">Fashion</a> <a class="dropdown-item" href="#">Accessories</a> <a class="dropdown-item" href="#">Health & Life</a> <a class="dropdown-item" href="#">Wibu Info</a> <a class="dropdown-item" href="#">Games Info</a></div></li><li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="index.html">Homepage</a> <a class="dropdown-item" href="detail.html">Details</a> <a class="dropdown-item" href="search.html">Search</a> <a class="dropdown-item" href="sign-in.html">Sign In</a> <a class="dropdown-item" href="sign-up.html">Register</a> <a class="dropdown-item" href="reset-pw.html">Reset Password</a> <a class="dropdown-item" href="contact.html">Contact Us</a> <a class="dropdown-item" href="about.html">About</a> <a class="dropdown-item" href="404.html">404</a></div></li><li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" dropdown-toggle href="#" data-toggle="dropdown">Dropdown</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="#">Dropdown 1</a> <a class="dropdown-item" href="#">Dropdown 2</a> <a class="dropdown-item" href="#">Dropdown 3</a> <a class="dropdown-item" href="#">Dropdown 4</a> <a class="dropdown-item" href="#">Dropdown 5</a></div></li><li class="nav-item"> <a class="nav-link" href="#">Fashion</a></li></ul></div><form class="form-search mr-3" action="search.html" method="get"> <input class="form-control" type="search" placeholder="Search Here..." aria-label="Search"></form> <a href="sign-in.html" class="login ml-1 mr-2">Login</a></div> </nav>'
 })

 barMagz.component('subscribe', {
 	template:'<div class="subscribe"><div class="container"><div class="row"><div class="col-lg-8 col-md-6"><h4 class="font-weight-bold">SUBSCRIBE TO OUR NEWSLETTER</h4><p class="mb-0">Documentation and examples for common text utilities to control wrapping, weight, and more.</p></div><div class="col-lg-4 col-md-6"><div class="input-group input-group-lg mt-3"> <input type="text" class="form-control rounded-0" placeholder="Your E-Mail..." aria-label="Recipient"s username" aria-describedby="basic-addon2" style="font-size:17px"><div class="input-group-append"> <button class="btn btn-primary rounded-0" type="button" style="font-size: 16px;font-weight: bold;">SUBSCIBE</button></div></div></div></div></div></div>'
 })

 barMagz.component('widgetFooter', {
 	template:'<div class="footer"><div class="container"><div class="footer-widget"><div class="row"><div class="col-md-4"> <img src="images/logo.png" style="max-height:70px"><p class="mt-4">Quickly and responsively toggle the display value of components and more with our display utilities. as well as some printing.</p><ul class="social"><li><a href="#"><i class="fa fa-facebook"></i></a></li><li><a href="#"><i class="fa fa-twitter"></i></a></li><li><a href="#"><i class="fa fa-instagram"></i></a></li></ul></div><div class="col-md-3"><div class="widget"><h4 class="widget-header">Hot Tags</h4><div class="widget-content"><ul class="nav tags"><li class="nav-item"><a class="nav-link" href="#">News</a></li><li class="nav-item"><a class="nav-link" href="#">Magz</a></li><li class="nav-item"><a class="nav-link" href="#">Electro</a></li><li class="nav-item"><a class="nav-link" href="#">Fashion</a></li><li class="nav-item"><a class="nav-link" href="#">Science</a></li><li class="nav-item"><a class="nav-link" href="#">Culture</a></li><li class="nav-item"><a class="nav-link" href="#">Bussiness</a></li></ul></div></div></div><div class="col-md-3"><div class="widget"><h4 class="widget-header">User Account</h4><div class="widget-content"><ul class="nav flex-column"><li class="nav-item"><a class="nav-link" href="#">My Profile</a></li><li class="nav-item"><a class="nav-link" href="#">Login</a></li><li class="nav-item"><a class="nav-link" href="#">Register</a></li><li class="nav-item"><a class="nav-link" href="#">Logout</a></li><li class="nav-item"><a class="nav-link" href="#">Change Account</a></li></ul></div></div></div><div class="col-md-2"><div class="widget"><h4 class="widget-header">Get Apps</h4><div class="widget-content"> <img src="images/play-store.png" style="width: 100%;"> <img src="images/app-store.png" style="width:100%;margin-top:5px"></div></div></div></div></div><div class="footer-copyright"> <span>Copyright &copy; 2019 Sifa Studio. All Right Reserved.</span><div class="float-sm-right"><ul class="nav justify-content-end"><li class="nav-item"> <a class="nav-link" href="#">Home</a></li><li class="nav-item"> <a class="nav-link" href="#">About Us</a></li><li class="nav-item"> <a class="nav-link" href="#">Contact Us</a></li><li class="nav-item"> <a class="nav-link disabled" href="#">Disclaimer</a></li></ul></div></div></div></div>'
 })