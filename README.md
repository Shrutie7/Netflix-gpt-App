# NETFLIX GPT

- Create React App (cra)
- Configured TailwindCSS
- Header.js
- Routing of App
- Login Form
- Sign up form
- Form Validation 
- useRef hook
- Firebase setup 
- Deploying our App to production
- Create Signup user account
- Implement SignIn user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update profile api call as soon as new user is signed up/registered
- updated displayName and photourl to store 
-  fetch movies from tmdb api
- bug fix - sign up user displayname and profilepicture update
- bug fix - if user is not logged in redirect /browse to /login page (dont allow him to go to browse page )and vice versa
- unsubscribe to the onAuthStateChange callback in header.js
- create constant files for strings/hardcoded values etc so if it changes in future we need to change only in one place 
- whenever u make api call pass options which has method and headers-accept and authorization(api access token) ***********
- Register for tmdb api and create new app and get access token go to documentation go to api refrence get data from now playing list api
- Create customHook for nowPlayingMovies
- create Movie Slice 
- Update store with movies data
- Planning for Main container and secondary container
- Fetch data for trailer video
- Update store with trailer video data and put in custom hook 
-  pass as props the extracted data original_title, overview in VideoTitle component
-  Embed youtube video with that key and make it autoplay and mute 
- videos api takes movie id and gives videos associated with that movie id . response gives multiple videos associated with that movie .we need type trailer video only . key we get is youtube key helps to fetch video from youtube for VideoBackground component make api call we need movie id from mainContainer component from now playing api 
<!-- it will give same photourl for previous users hence create a new user the it will show image in constant js file given  -->


<!-- putting api calls and store in redux in a seperate custom hook file is basically modular coding breaking code in smaller peices/module also promotes something known as seperation of concerns Also helps in testing 
-code becomes more modular,readable,testable,clearer if we abstract our logic in a seperate file 

<!-- pass parameter to any custom hook like you do in normal js function not as props no need of destructring  -->

<!-- generally videos have a aspect ratio  of 16/9 give aspect-video and w-screen to iframe  -->

<!-- give w-screen aspect-video to videotitle component div also like you gave in iframe  -->
 -->




# Features...

- Login/Signup Form
- redirect to Browse Page
# Browse Page (after authentication only for loggedin users)(if not loggedin and try to go to browser page keep user on signin page only )
- Header
- Main Movie
  - Trailer in background
  - title and description and play button on trailer
  - Movie suggestions
    - MovieLists * N
# Netflix GPT
-Search Bar
-Movie Suggestions (according to search bar)





- not using netflix api bcoz they are not public we need authentication for that hence using tmdb apis
-tmdb api dont change often like swiggy api used to hence project will be stable


- if user is logged in already then redirect always to browse page 
- if user is not logged in redirect him always to login page dont allow him to go to browse page 