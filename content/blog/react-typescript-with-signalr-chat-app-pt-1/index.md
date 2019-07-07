---
title: React/Typescript with SignalR Chat App Part 1
date: "2019-06-16T22:40:32.169Z"
---

Hi folks! Today, we will be creating a client component chat application with React, SignalR and Typescript.

For this to work, we're also gonna need a server which handle sending and receiving all the messages between the clients. I'll be covering that in part three of this demo, so stay tuned!

A big shout out to codingblast, [their tutorial](https://codingblast.com/asp-net-core-signalr-chat-react/) is spot on - I just wanted to update it using hooks. :)

##Setting up your environment
Before we start this, I'm going to assume that you've already installed node.js and npm.

First, we will be using `create-react-app` as a boilerplate to start our application. In your terminal, run the following command:

```typescript
npx create-react-app my-app --typescript

#or 

yarn create-react-app my-app --typescript
```

Boom! Your application has already been created! That wasn't so hard!

Now, you're going to want to add the SignalR npm package.

```typescript
npm i @aspnet/signalr-client

#or

yarn add @aspnet/signalr-client
```

Personally, I also like using Bootstrap to create easy to use UI components as well. There's also a really cool library called Reactstrap for React which gives you easy to use components based on Bootstrap! Let's add Bootstrap first.

```typescript
npm i bootstrap

#or

yarn add bootstrap
```

Now, let's add Reactstrap.

```typescript
npm i reactstrap

#or

yarn add reactstrap
```

Cool. Now before we move on, we're going to have to add the bootstrap CSS file to our project.

In your `App.tsx`, add the following line:

```typescript
import 'bootstrap/dist/css/bootstrap.min.css';
```

Sweet. Now, lets start creating our components. I typically structure the folders in my application by creating a `components` folder within the `src` folder.

Start by adding a `components` folder in your `src` folder. Now, create a `chat` folder inside of your `components` folder.

##The Chat Component

Alright, we're finally done creating our folders. Now, create a `Chat.tsx` file within your `chat` folder. This is going to be our first component.

Lets start by creating our Chat component. This is eventually going to handle all the talking between the client and the server.

```typescript
import React, { useEffect, useState } from 'react';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

export function Chat() {
    return (
        <>
        </>
    )
}
```

Not too much so far (actually, there's nothing. haha!). Before we get too deep, let's add our new component to our `App.tsx`.

```typescript
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Chat />
      </header>
    </div>
  );
}
```

Now we're going to add a useEffect when the component mounts to connect to our server, and a useState variable to keep track of our SignalR HubConnection.

```typescript
export function Chat() {
const [hubConnection, setHubConnection] = useState<HubConnection>();
   // Set the Hub Connection on mount.
    useEffect(() => {

        // Set the initial SignalR Hub Connection.
        const createHubConnection = async () => {

            // Build new Hub Connection, url is currently hard coded.
            const hubConnect = new HubConnectionBuilder()
                .withUrl('PUT YOUR SERVER ENDPOINT HERE')
                .build();
            try {
                await hubConnect.start()
                console.log('Connection successful!')
            }
            catch (err) {
                alert(err);
            }
            setHubConnection(hubConnect);
        }

        createHubConnection();
    }, []);

    return (
        <>
        </>
    )
}
```

Alright, this may look a little complicated, but it's not - I promise. Let me break it down for you.

All we're doing is creating a `useState` variable with type `HubConnection`. After that, we're creating a `useEffect`, which sets the `HubConnection` up for us when the component mounts. Normally, `useEffect` is called on every render, but our second paramater (the empty array) specifies that we will be calling this effect *only* when the component first mounts.

Now if you're new like me, you're probably wondering: *Why do I need these async/await functions?* Since we're trying to connect to our server, our `HubConnection.start` returns a `Promise`, which is basically an object which represents the eventual completion (or failure) of an asynchronous operation. This means that we don't know if this `Promise` is going to return a successful connection or an error. Because of this, we have to wrap our `await` function call in a `try/catch` to catch whatever our `Promise` becomes.  

Stay tuned for the next part of the demo, where we'll be making a modal to capture a nickname we can identify our users with!




