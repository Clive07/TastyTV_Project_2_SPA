# TastyTV_Project_2

Software Engineering Bootcamp - Project 2 - Streaming Services desires a SPA for the Users to maintain a list of Movies and Shows.

## My Approach

First Steps

Firstly I took a moment to consider the deliverables and how to best implement them. I planned out the wireframes for both the App's design and the diagram for React e.g. what holds the state and what is passed onto the components.

This was done using paper and pen, and Google Docs. These can be seen within the Illustrations Section and the TastyTV Notes' file.

I should note with this project at the start I'm ignoring the optional goals. My main focus is getting the deliverables completed to satisfaction before I will look to adding more features. This is to ensure my energy isn't too spread out on the off chance that I run out of time.

After I feel this initial point had been sufficently worked on, and knowing I am likely to return to it periodically for additional pondering and adjustments. I then will proceed to create the template for the app using the site Codesandbox. With this I can then link/create a GitHub repository and set the initial commit.

Following that

My first goal is to build the default layout for the site. The navbar won't work to begin with as this functionality can be easily added later. However the appearance of the introduction page and a navbar will be there. This is so I can have the css prepared for when I need to add creative design.

I am modularising the css so it can be any part can be found and adjusted quicker.

The landing page will be a class instead of a function so that I can utilise componentDidMount. Here I will call the function which sets the starter list for the users. This will be sourced from the main container.

With this done

I can now look to functionalise the My List btn to open it's page if clicked. This will be done using conditional rendering.

I also wish to prepare the component which will present the list for the user. I will use array.map in order to the one component display every media item.

Now I wish to implement the mark as watched deliverable. I will add a btn for each media item and have it so on click it will set watched to true instead of false. which will reRender the page showing this result. This will be set up so it also works in reverse if the user wishes to change it back.

I want to make sure i have good comments and a good naming scheme.

Now I intend to add the delete features. First is the ability to remove any one of the media items from the list. Second will be to remove all of them at once and the third part will be the ability to remove only the ones marked as watched.

first feature is simple. filter through the list and remove the media item with the same id as the component displaying it and reset list.

second one is easiest. if button is click. remove the entire list and reset.

third one will require another filtering through but this time rejecting any which watched bool prop equals to true

with the majority of functions out of the way. I will now go about setting up most of the actual appearance of the app.

connected up to material ui and bootstrap for this.

added edit option by giving a like/dislike feature. I will have hollow thumbs to show it isn't picked yet and when picked it will be black. upon picking a new property will be added to the state showing if liked or disliked. This property will be checked for the conditional rendering.

I need to be able to add items. I will have a random featured tv show that appears on the show page. This is acquired from tv maze api. It will be displayed on the page with an option to add it to the user list. This will call the function add list which appends it to the userlist.

### Deliverables

A functional React SPA without any backend built by you, hosted somewhere on the internet that delivers on the following scope of work derived from the client brief:
Add a new item
Edit an item
Mark item as watched
Remove an item
Remove all items
Remove all watched items
Fetch data from client API to populate an initial list of items to get people started
A GitHub repository with frequent commits dating back to the very beginning of the project
The GitHub repo should include a README file containing explanations of the technologies used, the approach taken, installation instructions, unsolved problems, documentation assets, and any other useful information.
A brief presentation of your work, its supporting documentation and code

Optional Stretch Goals
Save list data either locally or an API
Use additional 3rd party API’s
Use a CSS Framework like Bootstrap
Or, use React component libraries like Bootstrap React or Material UI
Allow users to sign up, sign in, and sign out using Firebase
