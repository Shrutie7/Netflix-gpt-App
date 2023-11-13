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
- build Secondary Component 
- build Movie List
- build Movie Card 
- TMDB Image CDN
- usePopular Movie Custom Hook
- use GPT APIS built by open AI and plug those api in front end app and use it 
- GPT search Page
- GPT search Bar
- MultiLanguage Feature in Search page
- Integrate GPT Api(get open AI key) from platform.openAI.com create a new secret key(cannot reuse same key again)
- Install Library npm openAI and register on platform.openAI and put API key in constants file
- Initialize OpenAI in OPENAI.js file and put api key in it from constants file
- this openai will give helper functions and we can access openai.chat apis . openai.chat returns a promise hence to resolve it use async await , there are multiple models in gpt ...gpt 3-turbo, gpt 3.5 turbo, gpt-4
-  we'll use gpt-3.5-turbo apis
- from gptsearch we get a list of 5 movies . we will search those 5 movies in tmdb api movie search to fetch those 5 movies and show the user
- tmdb api will give you a list of many movies (array of arrays)which has the name of those 5 movies included and we will show all those movies under gpt search bar . push all the movies inside store and then we fetch movies from store and show . in gptslice add 1 more action in order to store all the movies we get from tmdb api 
- once u click on search button make api call , search for the movie and push it in store and then take from store in order to show movies that u r searching for. also in store add gpt movie names that u got. in the same action .(both gptMovies and tmdbresults) hence instead of directky passing movies as tmdbresults pass in an object {movieNames:gptMovies,movieResults:tmdbresults} in store also create variable for movieNames,movieResults which r null initially extract them from action.payload in same action and then update state  
const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
- Create MovieSuggestion UI page resuse movieList.js file 
- if we search for any genre of movie in gpt search and go to homepage and come back the search results will still come bcoz the movies are persistent in redux store . even on changing page redux store data is still there
hence to empty store dispatch action and clear slice 


- good way to keep openAI key is in .env file also in production . whatever secret keys we have keep in .env file. Mandatory to add REACT_APP in .env file in any key ex. REACT_APP_OPENAI_KEY = . 
in next store TMDB KEY in .env file in . 
ex. REACT_APP_TMDB_KEY = . [dont keep in double quotes in env file]
dont keep sensitive information in constants or any file bcoz the constant file will also be bundled and shipped to production so it can be easily hacked 


- to read key from .env file use process.env.keyname
- when we change in .env file restart react app 

- add env file to gitignore so it is not pushed in github/ into production/deployment 


- so we will set/keep .env file/environment variables wherver we r hosting the app (firebase/netlify etc)

-Memoization - reduce no of api calls (every time component is loaded hook is called store is updated but if data is already present in store no need to make unnecessary API calls)(check if nowPlayingMovies is present in store or not if already present in store then dont make api call . it will save us a lot of api calls)



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