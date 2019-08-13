@extends('layouts.public') 
@section('title', $title) 

@section('content')



<div class="personel_trainer home">
<section id="main-call-to-action">
    <img src="images/personal-trainer-banner.png" class="w-100 img-fluid mx-auto d-block" alt="">
    <div class="content-cta">
        <div class="container h-100">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                <div class="banner_img"><img src="images/personal_banner_img.png"  alt=""></div>
                <h2><small>I am a</small>Personal Trainer</h2>
 
                    <div class="stars">
                        <img src="images/stars.png" class="img-fluid d-block mx-auto" alt="">
                        <p class="content">Do you want to release your potential as a personal trainer? In order to be an eminent personal trainer you need a strong
                        theoretical background, and a great deal of experience. The latter takes many years to accomplish. What if you could
                        use the experience from others in your own favor?
                        </p>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <div class="col-12 col-sm-12 col-md-10 col-lg-8">
                            <form class="get-started" method="GET" action="{{ url('register') }}">
                                <div class="form-group row">
                                    <div class="col-12 col-sm-6 col-lg-7"><input type="email" id="e-mail" name="email" placeholder="E-mail address" class="form-control py-3"></div>
                                    <div class="col-12 col-sm-6 col-lg-5"><button type="submit" class="btn btn-green-gradient btn-block px-5 py-3 mt-3 mt-sm-0">Get started</button></div>
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
      <h3>BENEFITS</h3>
      <div class="row">
         <div class="benefits_reister">
            <img src="images/strength-athlete.png" style="width: 80px;" alt="images">
            <p>Register your clients as strength athletes . Follow them up closely both as an online coach interacting on their Strength athlete profiles, and through psysical one-to-one sessions purchased under Your offers and booked in your calendar.
            </p>
         </div>
         <div class="benefits_follow">
            <img src="images/benefit_fdbck_img.png" alt="images">
            <p>
            Let Optimal Strength Gains find the best suited strength training programs for your clients. Free up your time also regards to administrative work and marketing, and focus more on other important factors like technique, diet, motivation and more.
            </p>
         </div>
      </div>
   </div>
</div>
<div class="about">
   <div class="container">
      <div class="row">
         <div class=" p-0 about_content">
            <h3>ABOUT ME</h4>
            <p>Give a short introduction about yourself. Tell the Strength athletes about your education, specialties, experience and
               location. The location is where you as a personal trainer work and are available for face-to-face sessions with clients
               or strength athletes. 
            </p>
         </div>
         <div class="about_contact">
            <img src="images/screenshots/About me.png" alt="">
         </div>
      </div>
   </div>
</div>
<div class="offer_parent">
   <div class="container">
      <div class="osg-personal-trainer-offers">
         <div class="title">
            <h3>MY OFFERS</h3>
            <p>Display your offers and prices, available for purchasing by the strength athletes. When the strength athlete has purchased
               an offer, your calendar will be open for booking. 
            </p>
         </div>
         <div class="offers-container">
            <div class="offer">
               <div><img src="../images/screenshots/offers_img1.png" alt=""></div>
            </div>
            <div class="offer">
               <div><img src="../images/screenshots/offers_img2.png" alt=""></div>
            </div>
            <div class="offer">
               <div><img src="../images/screenshots/offers_img3.png" alt=""></div>
            </div>
            <div class="offer">
               <div><img src="../images/screenshots/offers_img4.png" alt=""></div>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="client_result">
   <div class="container">
      <h3>MY CLIENTS RESULTS</h3>
      <p> The My clients results table gives an objective feedback on your clients results after completing a program, by comparing
         the pre- and posttests result in the test exercises. There is one table for men and one table for women, you can also
         sort the tables by category. The table are divided into levels and weight classes, and the number in each cell shows
         the median (average) result of all your clients individual “percentage increase” numbers for a particular level and
         weight class.
      </p>
      <p>In order to collect your clients results, you need to go to your clients strength athlete profile, and activate the “Add
         your personal trainer” button in the Time line. Connect to the program that you are helping your client with.
      </p>
      <div class="table-responsive">
         <img src="images/screenshots/Objective Score.png" alt="">
      </div>
   </div>
</div>
<div class="review">
   <div class="container">
      <div class="row">
         <div class="review_rating">
            <div class="reviews">
               <div class="review_content">
                  <img src="images/screenshots/review_personal.png" alt="">
               </div>
            </div>
            
         </div>
         <div class="review_rgtcol">
            <h3>REVIEWS</h3>
            <p>
               This section gives your clients a possibility to give you a subjective feedback, and read feedback from other strength athletes.
            </p>
         </div>
      </div>
   </div>
</div>
<!--container -->
<div class="booking">
   <div class="container">
      <div class="booking_content">
         <h3>BOOKING</h3>
         <p>Display which days and hour you are available, so that after purchasing an offer, the strength athlete can book face-to-face
            sessions with you. Green days are days you have many hours or sessions available, orange days are days that are starting
            to get full, and red days are days where you are completely fully booked and have no available sessions.
         </p>
      </div>
      <div class="osg-personal-trainer-booking-calendar">
         <img src="images/booking.png" alt="calendar" class="calender_img image-fluid">
      </div>
   </div>
</div>
<div class="container">
   <div class="news_feed">
      <div class="row">
         <div class="new_feed_lftcol">
            <div class="news_content">
               <h3>NEWSFEED</h3>
               <p>Communicate with your clients, give them guidance and answer questions. The Newsfeed gives you also the opportunity
                  to attract new clients by marketing, blogging and by taking an active approach. 
               </p>
            </div>
         </div>
         <div class="new_feed_rgtcol">
            <img src="images/screenshots/newsfeed_personal.png" alt="">
         </div>
      </div>
   </div>
</div>
</div>
<div class="home">
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