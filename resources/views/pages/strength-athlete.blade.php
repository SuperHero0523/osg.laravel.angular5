@extends('layouts.public') 
@section('title', $title) 

@section('content')

<div class="strength_athlete home">

<section id="main-call-to-action">
    <img src="images/strength-athlete-banner-new.png" class="w-100 img-fluid mx-auto d-block" alt="">
    <div class="content-cta">
        <div class="container h-100">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-12 col-sm-12 col-md-12 col-lg-10 learnmore-bannercontent ">
                <div class="banner_img"><img src="images/benifit_follow_img.png" alt=""></div>
                <h2><small>I am a</small>STRENGTH ATHLETE</h2>
 
                    <div class="stars">
                        <img src="images/stars.png" class="img-fluid d-block mx-auto" alt="">
                        <p class="content">Have your progress stalled? If your main focus to increase muscle mass or strength,
                             or you want to learn what programs 
                            and program designs that suits you best, then Optimal Strength Gains is the solution for you.
                        </p>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <div class="col-12 col-sm-12 col-md-10 col-lg-8">
                            <form class="get-started" method="GET" action="{{ url('register') }}">
                                <div class="form-group row">
                                    <div class="col-12 col-sm-6 col-lg-7 d-flex justify-content-center"><input type="email" id="e-mail" name="email" placeholder="E-mail address" class="form-control py-3"></div>
                                    <div class="col-12 col-sm-6 col-lg-5  d-flex justify-content-center"><button type="submit" class="btn btn-green-gradient btn-block px-5 py-3 mt-3 mt-sm-0">Get started</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</section>

   
   <div class="benefit_bg">
      <div class="benefit">
         <h4>BENEFITS</h4>
         <div class="row">
            <div class="benefits_reister">
               <img src="images/benefit_build_img.png" alt="images">
               <p>The main purpose of the OSG software is to help you as a strength athlete to reach your goals. 
Monitor your strength levels, important lifestyle factors and how well you respond to completed programs.</p>
            </div>
            <div class="benefits_follow">
               <img src="images/benefit_fdbck_img.png" alt="images">
               <p>The Program design will reveal which programs that suits you best regarding the different training 
variables. The more programs you complete, the better guidance we can provide you. </p>
            </div>
         </div>
      </div>
   </div>
   <div class="trophy_wall_parent">
      <div class="container trophy-walls1">
         <div class="row justify-content-center">
            <div class="col-lg-7 timeline_content">
               <h1>TROPHY WALL</h1>
               <p>Choose one exercise for each of the three major muscle group chest, back and quads, that you want to monitor closely.
                  See how your strength level progresses from one program to another, and compare your strength level to other strength
                  athletes. Get rewarded with a golden trophy each time you reach a new and higher level. 
               </p>
            </div>
            <div class="tropches">
               <img src="images/screenshots/Graph 1.png" alt="">
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid d-flex trophy-walls">
      <div class="row justify-content-center">
         <div class="col-lg-5 trophy_content">
            <h1>TIMELINE</h1>
            <p>Get an overview of all the programs you have completed, and the status and fluctuation of important lifestyle factors like calorie consumption, body weight in combination with hip to waist ratio, stress level and sleep level. The time line will intuitively tell you where you need to improve regarding lifestyle and fatigue factors. </p>
         </div>
         <div class="col-lg-10 trophy_table d-flex justify-content-center">
            <img src="images/screenshots/Timeline.png" alt="" class="img-fluid">
         </div>
      </div>
   </div>
   <div class="container-fluid d-flex performance-you">
      <div class="row justify-content-center">
         <div class="col-lg-6 performance_content">
            <h1>PERFORMANCE TABLE</h1>
            <p>The performance table shows detailed information about all the programs you have 
               completed, like the pre- and posttests, results, and relevant background information.  <br><br>
               It also analyzes your achieved results or percentage increase, in the programs test 
               exercises. By comparing your results to the program designers Experience Bank, we can find out how well you responded to a specific program, compared to other strength athletes. <br><br>
               We can also compare how well you responded compared to your mirror athletes. Your mirror athletes are the strength athletes who resembles you the most by having the same gender, age, height, weight, waist to hip ratio, strength level and more, as you. <br><br>
               Read your exercise notes, and get recommendations for further improvements. 
            </p>
         </div>
         <div class="col-lg-8 performance_table justify-content-center">
            <img src="images/performance-table.png" alt="" class="img-fluid">
         </div>
      </div>
   </div>

   </div>
   <div class="container-fluid top_permo">
      <div class="row justify-content-center">
         <div class="col-lg-6">
            <h1>TOP PROGRAM DESIGNS </h1>
            <p>People are different and respond differently to the same program design. 
               The program designs shows how a program are structured, in terms of intensity, 
               training volume, frequency and more. The top training design table tells you which program and program design you responded best to, for each muscle group.
            </p>
         </div>
         <div class="col-lg-10">
            <div class="table-top-program">
               <img src="images/screenshots/TopProgram.png" alt="" class="img-fluid">
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid d-flex calendar-sec">
      <div class="row justify-content-center">
         <div class="col-lg-6">
            <h1>CALENDAR & TRAINING LOG</h1>
            <p>Download a desired program from a Program designer profile, to your calendar. Log the sets on your mobile phone during the work out by the help of auto-regulation that automatic adjusts your working load based on your current fatigue and energy level. The green days in the calendar are sessions you have completed, the red days are sessions you missed, and the blue days are upcoming sessions.   </p>
         </div>
         <div class="col-lg-8 strength_calendar">
            <br>
            <img src="images/screenshots/strength_calendar.png" alt="" class="img-fluid">
         </div>
      </div>
   </div>
   <div class="strength-news">
  
      <div class="container">
      <div class=" row">
            <div class="col-lg-6">
               <div class="news_content">
                  <h3>NEWSFEED</h3>
                  <p>Communicate with your clients, give them guidance and answer questions. The Newsfeed gives you also the opportunity
                     to attract new clients by marketing, blogging and by taking an active approach. 
                  </p>
               </div>
            </div>
            <div class="col-lg-6">
               <img src="images/screenshots/strength_feed.png" alt="" class="img-fluid">
            </div>
         
      </div>
   </div>
   </div>
  <div class="home strength_form">
  <section id="get-started" class="starter_log">
   <div class="col-lg-12 col-12 col-sm-12 col-md-8 align-self-center d-flex justify-content-center">
       <div class="content-form col-lg-8 content-form">
           <div class="row justify-content-center">
               <div class="col-12 col-sm-10 col-md-10 col-lg-8 py-5 py-md-0">
                   <h2 class="black">
                       <small>REACH YOUR FITNESS GOALS</small>LET’S GET STARTED
                   </h2>
                   @include('shared.registration-form')
               </div>
           </div>
       </div>
   </div>
</section>
  </div>
   


@endsection