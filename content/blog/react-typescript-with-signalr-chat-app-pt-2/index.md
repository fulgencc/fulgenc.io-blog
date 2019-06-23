---
title: React/Typescript with SignalR Chat App Part 2
date: "2019-06-23T22:40:32.169Z"
---

Hello and welcome back to the second part of my tutorial! Let's pick up right where we left off. Our `Chat.tsx` should look like the following

```typescript
import React, { useEffect, useState } from 'react';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Container } from 'reactstrap';
import { NickModal } from './NickModal';

export function Chat() {
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);
    const [nick, setNick] = useState<string>();
    const [hubConnection, setHubConnection] = useState<HubConnection>();

    // Set the Hub Connection on mount.
    useEffect(() => {

        // Set the initial SignalR Hub Connection.
        const createHubConnection = async () => {

            // Build new Hub Connection, url is currently hard coded.
            const hubConnect = new HubConnectionBuilder()
                .withUrl(process.env.REACT_APP_ENDPOINT_PATH!)
                .build();
            try {
                await hubConnect.start()
                console.log('Connection successful!')

                // Bind event handlers to the hubConnection.
                hubConnect.on('sendtoall', (nick: string, receivedMessage: string) => {
                    setMessages(m => [...m, `${nick}: ${receivedMessage}`]);
                })
                hubConnect.on('newuserconnected', (nick: string) => {
                    setMessages(m => [...m, `${nick} has connected.`]);
                })
                // **TODO**
                // hubConnection.off('userdisconnected', (nick: string) => {
                //  
                //     setMessages(m => [...m, `${nick} has disconnected.`]);
                // })
            }
            catch (err) {
                alert(err);
                console.log('Error while establishing connection: ' + { err })
            }
            setHubConnection(hubConnect);

        }

        createHubConnection();

    }, []);

    return (
        <Container>
            <NickModal hubConnection={hubConnection} setNick={setNick} />
        </Container >
    );
}
```

Now, we need to set up a component that handles displaying all our messages, and an input component that lets us send messages via our HubConnection. Let's start with the former.

Create a new file called `ChatBox.tsx` in your `Chat` folder. This component is going to be pretty simple. There's not going to be a state within this object, since all it's going to be concerned with is receiving a message.

Let's set up what our component is going to render.

```typescript
import React, { useEffect } from 'react'


// ChatBox component, which receives messages and displays them.
export function ChatBox(props: { messages: string[] }) {

    return (
        <div id='ChatBox' style={{ height: '300px', overflowY: 'scroll' }}>
            {props.messages.map((message, index) => (
                <p key={index} style={{ wordBreak: "break-all" }}>{message}</p>
            ))}
        </div>
```

I opted to use some in-line CSS here since there's not too much styling to be done. For this component, I made a div with an overflowY property so that once the messages go past the height I specified (300px), a scroll bar will pop up to prevent the page size from increasing. 

The second part of this would be the `.map` function. All this function does is loop through an array, very similar to a `foreach` loop. The `.map` function takes a function which basically tells it what to do with each element. I used an anonymous function with arguments `message` - the value of each element in the array (you can name this anything you want), and `index` - a unique identifier property that React needs every time you map through an element. Basically, it's just numbering each element.

The `wordBreak` style I used within this wraps each message so that you don't go past the width of the `ChatBox` div.

Now let's set up a `useEffect` for our `ChatBox`.

```typescript
    useEffect(() => {

        // If a message has been received or sent, scroll to the bottom of the chat.
        const chatBox = document.getElementById('ChatBox') as HTMLElement;
        chatBox.scrollTo(0, chatBox.scrollHeight);
    }, [props.messages])
```

If you're used to JavaScript, this might be familiar to you. I'm grabbing the `ChatBox` div and once our `messages` array has been changed from our `props`, I'm calling this `useEffect` hook to scroll down to the bottom of our chat box.

Remember a `useEffect` hook is called every time a component re-renders, but it only runs depending on what's in the dependency array. In this case, the code within this `useEffect` will only run when `props.messages` changes.

Alright. We're done with our ChatBox component! Let's add it to our `Chat.tsx`. 

First, import our new component at the top.

```typescript
import { ChatBox } from './ChatBox';
```

Now, let's include it in our return statement.

```typescript
    return (
        <Container>
            <NickModal hubConnection={hubConnection} setNick={setNick} />
            {nick && <>
                <ChatBox messages={messages} />
            </>}
        </Container >
    );
```

This is a neat little trick we can do where basically the `ChatBox` component won't render unless our `nick` variable exists. Our app is small so it doesn't really matter, but it could be useful to reduce load time if you have any heavy components.

Alright, one more component to go! Now we need a component so our client can send messages to our server.

Create a new file called `SendMessageButton.tsx` in your `Chat` folder. 

Now let's set up our state variable and return statement

```typescript
import React, { useState } from 'react'

export function SendMessageButton(props: any) {
  const [message, setMessage] = useState<string>('');

  return (
    <>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        maxLength={255}
      />
      <button>Send It</button>
    </>
  )
}
```
Okay, now we need a function to handle sending our messages to our parent `Chat` component so that it can send it to the server. Let's make this now.

```typescript
  const handleMessage = () => {
    props.sendMessage(message);
    setMessage('');
  }
```

We're going to eventually need a function in `Chat` which will send the actual message via the HubConnection. We'll make that after we finish this component. Now just to make it nice for our users, let's add an event handler so our message will send whenever you hit "Enter".

```typescript
  /** Event handler to send message when pressing "enter" */
  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleMessage();
    }

  }
```

Now let's make our button and add our new `onEnter` function to our `input`.

```typescript
  return (
    <>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={onEnter}
        maxLength={255}
      />
      <button onClick={handleMessage}>Send It</button>
    </>
  )
```

All that's left is to add a function to send our message in our `Chat` component. Add the below to your `Chat.tsx`

```typescript
    /** Send message to server with client's nickname and message. */
    async function sendMessage(message: string): Promise<void> {
        if (hubConnection && message !== '') {
            try {
                await hubConnection.invoke('sendToAll', nick, message)
            }
            catch (err) {
                console.error(err);
            }
        }
    }
```

Import our new component in `Chat.tsx`

```typescript
import { SendMessageButton } from './SendMessageButton';
```

And finally, add our `SendMessageButton` to our render statement.

```typescript
    return (
        <Container>
            <NickModal hubConnection={hubConnection} setNick={setNick} />
            {nick && <>
                <ChatBox messages={messages} />
                <SendMessageButton sendMessage={sendMessage} message={message} setMessage={setMessage} />
            </>}
        </Container >
    );
```

We're done with our client side! To see the finished product, you can [view it on my GitHub.](https://github.com/fulgencc/chat-app)
