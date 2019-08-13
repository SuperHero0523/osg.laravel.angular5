@extends('layouts.public') 
@section('title', $title) 

@section('content')
<div class="program_designer home">
<section id="main-call-to-action">
    <img src="images/program-designer-banner.png" class="w-100 img-fluid mx-auto d-block" alt="">
    <div class="content-cta">
        <div class="container h-100">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-12 col-sm-12 col-md-12 col-lg-10 learnmore-bannercontent ">
                <div class="banner_img"><img src="images/program_banner_img.png" alt=""></div>
                <h2><small>I am a</small>PROGRAM DESIGNER</h2>
 
                    <div class="stars">
                        <img src="images/stars.png" class="img-fluid d-block mx-auto" alt="">
                        <p class="content">Do you want to put your strength training program to the ultimate test? Do you want to be able to design a flawless
                        program and get feedback on how strength athletes respond to it? A theoretical strength training program tested in
                        practice can give you the knowledge you need to became an exceptionally good program designer.
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
         <div class="benefit_build">
            <img src="images/benefit_build_img.png" alt="images">
            <p>
               Build fantastic strength training programs. An 
               effective program is build up around training principles such as specificity, overload, variation and proper fatigue management to ensure 
               adequate recovery, adaption and increase in 
               performance. Create a strength oriented program design like low volume- high frequency- high 
               intensity, or a hypertrophy oriented program design like high volume – low frequency – medium intensity and much more. Polish the 
               program with appropriate exercises, progression model, rest periods and tempo.  
            </p>
         </div>
         <div class="benefit_fdbck">
            <img src="images/benefit_fdbck_img.png" alt="images">
            <p>
               Strength does not always evolve in a linear 
               fashion, and percent-based training is not always practical since it does not take into account the individual lifters current shape, degree of 
               readiness, stress and sleep level. Autoregulation automatically regulates the training load for an exercise and muscle group. Autoregulation allows the individual athlete to train with lighter loads on days with high fatigue, and with higher loads on days with low fatigue and when they feel strong and recovered. Autoregulation is a very useful system, that automatically individualizes the load progression.
            </p>
         </div>
         <div class="benefit_strength">
            <img src="images/benefit_strength_img.png" alt="images">
            <p>
               Follow up and interact with your clients on their strength athlete profiles. The Personal trainer profile is structured so
               that your clients can take a more active approach, reducing your own time in regards to both administrative work and
               marketing.
            </p>
         </div>
      </div>
   </div>
</div>
<div class="calendar_build">
   <div class="container">
      <div class="build_content">
         <h3>THE CALENDAR BUILDER</h3>
         <p>Build strength training programs in the calendar builder, by drag and drop exercises and creating different sessions,
            and then drag and drop sessions into the calendar. In the calendar builder you will create static programs, which means
            that for example Session 1 has the same variables in every week throughout the entire program.
         </p>
      </div>
      <img src="images/calendar_build_img.png" alt="">
   </div>
</div>
<div class="progress_build">
   <div class="container">
      <div class="row">
         <div class="progress_build_lft">
            <h3>THE PROGRESSION BUILDER</h3>
            <p>The next step after the Calendar builder is creating a progressive overload strategy in the progression builder. This can be done by gradually increasing the intensity, volume or frequency. Insert some light sessions or deload weeks every now and then to ensure proper fatigue management, recovery and adoption, which is especially important before the final one repetition maximum (1 RM) test in the final week. The latter means that you need to choose test exercise(s) both in the first and last week of the program, to calculate the strength athletes progression or results (percentage increase in 1 RM). Publish the program and make it available for the strength athletes.
            </p>
         </div>
         <div class="progress_build_img">
            <img src="images/progress_build_img.png" alt="">
         </div>
      </div>
   </div>
</div>
<div class="publish_program">
   <div class="container">
      <div class="publish_content">
         <h3>PUBLISHED PROGRAMS</h3>
         <p>The published programs table shows an overview of all of your published programs, and variables like program name, published
            date, number of completions, category and training split.
         </p>
      </div>
      <div class="publish_table">
         <img src="images/screenshots/Published programs.png" alt="">
      </div>
   </div>
</div>
<div class="bank_experience">
   <div class="container">
      <div class="row">
         <div class="bnk_exp_content">
            <h3>EXPERIENCE BANK</h3>
            <p>The Experience bank will continuously gather information from all the strength athletes that have completed your program. 
            </p>
            <p>Each program has one Experience bank for each Test exercise, which in turn are divided into one table for men and one table for female.</p>
            <p>Every program has one or more test exercises, which are conducted in the programs first and last training week. By comparing the 1 RM pre- and posttest results for the test exercise (ex: Bench press), we can calculate percentage increase for an individual. For example if a strength athlete’s pretest was 100 kg and posttest was 105 kg, the lifters percentage increase in bench press was 5 percent. </p>
            <p>All the individual percentage increase results are collected in a table that consists of levels from untrained to elite, and different weight classes. The number in a cell belongs to a specific weight class 
               interval combined with a level (for example 90-99 kg and level: 
               intermediate), and shows the median percentage increase result. The median (average) is the middle value when all the strength athlete’s percentage increase values are listed in numerical order from the lowest to the highest. The median also indicates the results a strength athlete with his or her body weight and level, can expect to achieve in the test exercise, if choosing to follow and complete your program.
            </p>
            <p>By comparing the median for a specific level and body weight i
               nterval for different programs made by different Program designers, strength athletes can find the most optimal strength training 
               programs. This is done in the Experience Bank search section.
            </p>
         </div>
         <div class="bnk_exp_table">
            <div class="row">
               <div class="exp_table_parent">
                  <img src="images/screenshots/Performance Graph.png" alt="">
               </div>
               <div class="exp_table_parent">
                  <img src="images/screenshots/Performance Graph.png" alt="">
               </div>
               <div class="exp_table_parent">
                  <img src="images/screenshots/Performance Graph.png" alt="">
               </div>
               <div class="exp_table_parent">
                  <img src="images/screenshots/Performance Graph.png" alt="">
               </div>
               <div class="exp_table_parent">
                  <img src="images/screenshots/Performance Graph.png" alt="">
               </div>
               <div class="exp_table_parent">
                  <img src="images/screenshots/Performance Graph.png" alt="">
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="reviews">
   <div class="review_content">
      <h3>REVIEWS</h3>
      <p>In the review section the strength athlete’s and personal trainer can give feedback on their experience with your program.
         This enables you to learn and improve your work. 
      </p>
   </div>
   <div class="review_chart">
      <div class="user_review">
         <img src="images/screenshots/userreview_img1.png" alt="">
      </div>
      <div class="user_review">
         <img src="images/screenshots/userreview_img2.png" alt="">
      </div>
      <div class="user_review">
         <img src="images/screenshots/userreview_img3.png" alt="">
      </div>
      <div class="user_review">
         <img src="images/screenshots/userreview_img4.png" alt="">
      </div>
      <div class="user_review">
         <img src="images/screenshots/userreview_img5.png" alt="">
      </div>
   </div>
</div>
<div class="program_design">
   <div class="container">
      <div class="program_content">
         <h3>PROGRAM DESIGN</h3>
         <P>The program design summarizes how the strength training program is structured, concerning the most important variables,
            like training volume, intensity, frequency and more. For the strength athlete the program design reveals why he or
            she responds to it, for example exceptionally good like a high responder, or exceptionally bad like a low responder.
            Exercise selection isn’t necessarily the most important variable in a training design. 
         </P>
      </div>
      <div class="table-top-program">
         <div class="table-responsive">
            <img src="images/screenshots/Program Design.png" alt="">
         </div>
      </div>
   </div>
</div>
<div class="training_program">
   <div class="container">
      <div class="training_program_content">
         <h3>THE TRAINING PROGRAM</h3>
         <p>The calendar function in the Program designer profile is simply called the Training program. Here the strength athlete
            can see all the details of the training program, like training days, exercises, sets, reps, method and more. The strength
            athlete can then download the desired program to his or hers Calendar & training log, ready to start the program where
            the sessions are logged on the strength athletes cellphones. 
         </p>
      </div>
      <div class="osg-personal-trainer-booking-calendar">
         <img src="images/screenshots/calendar_pop.png" alt="calendar" class="calender_img">
      </div>
   </div>
</div>
<div class="program-news">
<div class=" row">
   <div class="container">
      <div class="news_feed d-flex">
         <div class="new_feed_lftcol">
            <div class="news_content">
               <h3>NEWSFEED</h3>
               <p>Communicate with your clients, give them guidance and answer questions. The Newsfeed gives you also the opportunity
                  to attract new clients by marketing, blogging and by taking an active approach. 
               </p>
            </div>
         </div>
         <div class="new_feed_rgtcol">
            <img src="images/screenshots/newsfeed_program.png" alt="">
         </div>
      </div>
   </div>
</div>
</div>

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
@endsection