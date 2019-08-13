@extends('layouts.public') 
@section('title', $title) 
@section('content')
<div class="container-fluid tophead abouthead">
   <div class="row mobilechange1">
      <div class="col-lg-2">
      </div>
      <div class="col-lg-5 about-mission">
         <p>OUR MISSION</p>
         <h2>Our mission is to provide you with the best and most comprehensive digital strength training platform available. </h2>
      </div>
   </div>

   <div class="row mobilechange11">
      <div class="col-lg-4 about-mission">
         <h2>Our mission is to provide you with the best and most comprehensive digital strength training platform available. </h2>
      </div>
      <div class="col-lg-6">
         <img src="images/mobileban2.png" class="img-fluid"/>
      </div>
   </div>
</div>
<div class="mobile-button-green-section">
   <div class="mobile-green-button">
      <a href="{{ url('register') }}" >Create Free Account</a>
   </div>
</div>
<div class="container-fluid whatsolve">
   <div class="row justify-content-center">
      <div class="col-lg-5 text-center">
         <p>WHAT DO WE SOLVE</p>
         <h2>We want to improve your decision making and strength performance, by adding objective feedback 
            mechanisms to the equation.  
         </h2>
      </div>
   </div>
   <div class="row justify-content-center what-sec">
      <div class="col-lg-3 text-center">
         <img src="images/cup.png" class="img-fluid">
         <h2>Achieving results</h2>
         <h4>Objective benchmarks will tell you where you are, which goals to strive for, and even how well you most likely will respond to a program.  </h4>
      </div>
      <div class="col-lg-3 text-center">
         <img src="images/book.png" class="img-fluid">
         <h2>Empowerment & Learning</h2>
         <h4>People differ significantly how fast they can increase performance because they respond different to the same training variables. </h4>
      </div>
      <div class="col-lg-3 text-center">
         <img src="images/future.png" class="img-fluid">
         <h2>Getting past plateus</h2>
         <h4>Since the size of adaptions decreases with increased traning experience and already achived results, a more 
            intelligent program design is evident. 
         </h4>
      </div>
   </div>
</div>
<div class="container-fluid storybg">
   <div class="row">
      <div class="col-lg-2">
      </div>
      <div class="col-lg-4 storycont">
         <p>OUR STORY</p>
         <h2>How can a strength training software facilitate for optimal strength gains?</h2>
         <h4>This was the initial question that started it all. By implementing scientific strength training principles and theory, we believe we can. And by utilizing the accumulative power of many, the tool can effectively guide you as an individual. </h4>
         <h4>We aspire to create something new and useful, where you save time and gain valuable insight.</h4>
         <h4>We hope that you will find Optimal Strength Gains as helpful, intuitive and fun as we do.  </h4>
      </div>
      <div class="col-lg-4">
         <img src="images/Our-stort-Ipad.png" class="img-fluid">
      </div>
   </div>
</div>
<div class="container-fluid ourteam">
<div class="row">
<div class="col-lg-6 offset-lg-2 teamcont">
<p>OUR TEAM</p>
<h2>We value passion, innovation, technology, openness, empowerment and hard work.</h2>
</div>
</div>
<div class="row teampersons justify-content-center">
<div class="col-lg-3">
<img src="images/Our-Team-1.png" class="img-fluid">
<h2>Andreas Stensrud</h2>
<h4>Chief Executive Officer</h4>
<h6 class="andbio" id="andbio">See bio</h6>
<h5 class="andbioexp">Andreas co-founded OSG in 2018, and has a background in medicine, personal training and has 20 years of strength training experience. </h5>
</div>
<div class="col-lg-3">
<img src="images/Our-Team-2.png" class="img-fluid">
<h2>Kamil Okonski
</h2>
<h4>Chief Marketing Officer</h4>
<h6 class="kambio" id="kambio">See bio</h6>
<h5 class="kambioexp">Kamil is a co-founder of OSG, and has background in strategic management and broad expertise in discovering consumer habits and market trends.</h5>
</div>
<div class="col-lg-3">
<img src="images/Our-Team-3.png" class="img-fluid">
<h2>Nohman Janjua</h2>
<h4>Chief Creative Officer</h4>
<h6 class="nohbio" id="nohbio">See bio</h6>
<h5 class="nohbioexp">Nohman leads our design and development team and is co-founder of a leading design and software development company in Norway called FantasyLab. </h5>
</div>
</div>
</div>
<div class="container-fluid getstartedcont">
   <div class="row">
      <div class="col-lg-6 offset-lg-2 no_left">
         <h4>GET STARTED</h4>
         <h3>Create your profile today and start achieving your fitness goals.</h3>
      </div>
   </div>
   <div class="row getstartgrid">
      <div class="col-lg-2">
      </div>
      <div class="col-lg-2 imgcontents">
         <div class="imgcontbg">
            <img src="images/howpro1.png" class="img-fluid">
            <h2>Strength Athlete</h2>
            <p>Complete programs and see how you responded compared to your mirror athletes. Learn which program designs that suits you best and take action.
               <br><a href="{{ url('register?strengthAthlete') }}"> <button class="btn">SIGN UP</button></a><a href="{{ url('strength-athlete') }}" class="learnbut">LEARN MORE</a>
            </p>
         </div>
      </div>
      <div class="col-lg-1">
      </div>
      <div class="col-lg-2 imgcontents">
         <div class="imgcontbg">
            <img src="images/howpro2.png" class="img-fluid">
            <h2>Program Designer</h2>
            <p>Create and publish programs. Get feedback on how different strength athletes responds to your program through the 
               Experience Bank and Reviews.
               <br><a href="{{ url('register?programDesigner')}}"><button class="btn">SIGN UP</button></a>
               <a href="{{ url('program-designer') }}" class="learnbut">LEARN MORE</a>
            </p>
         </div>
      </div>
      <div class="col-lg-1">
      </div>
      <div class="col-lg-2 imgcontents">
         <div class="imgcontbg">
            <img src="images/howpro3.png" class="img-fluid">
            <h2>Personal Trainer</h2>
            <p>
               Interact with your clients. Let 
               Optimal Strength Gains find the best strength training programs for strength athletes with different needs and goals.
               <br><a href="{{ url('register?personalTrainer') }}"><button class="btn">SIGN UP</button></a>
               <a href="{{ url('personal-trainer') }}" class="learnbut">LEARN MORE</a>
            </p>
         </div>
      </div>
      <div class="col-lg-2">
      </div>
   </div>
</div>
<style type="text/css">
   body
   {
   background: #000000!important;
   }
   .getstartedcont
   {
   background: white;
   }
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
   $(".andbioexp").hide();
   $(".kambioexp").hide();
   $(".nohbioexp").hide();
   
   $(".andbio").click(function(){
   $(".andbioexp").slideToggle();
   });
   
   $(".kambio").click(function(){
   $(".kambioexp").slideToggle();
   });
   
   $(".nohbio").click(function(){
   $(".nohbioexp").slideToggle();   
   });

   $(".andbio").click(function(){
     let a = $(".andbio").html();
     if(a == 'See bio'){
      $(".andbio").html('Close bio');
     }else{
      $(".andbio").html('See bio');
     }
   });

   $(".kambio").click(function(){
     let a = $(".kambio").html();
     if(a == 'See bio'){
      $(".kambio").html('Close bio');
     }else{
      $(".kambio").html('See bio');
     }
   });

   $(".nohbio").click(function(){
     let a = $(".nohbio").html();
     if(a == 'See bio'){
      $(".nohbio").html('Close bio');
     }else{
      $(".nohbio").html('See bio');
     }
   });
</script>
@endsection