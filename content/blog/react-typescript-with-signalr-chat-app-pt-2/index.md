---
title: React/Typescript with SignalR Chat App Part 2
date: "2019-06-18T22:40:32.169Z"
---

Hello and welcome back to part 2 of the chat app demo! In this section, we'll be adding a modal so our users can input a nickname.


##Nickname Modal

Alright, now that we have our connection, let's create a modal to capture our client's nickname so we know who's sending messages.

Create a new file in your `chat` folder called `NickModal.tsx`

Add the required imports to NickModal.
```typescript
import React, { useState } from 'react';
import { Modal, ModalBody, Button, ModalFooter, ModalHeader } from 'reactstrap';
```

Now, let's create our component.
```typescript
export function NickModal(props: any) {
  const [modalOpen, setModalOpen] = useState(true);
  const [nick, setNick] = useState<string>('');

  return (
    <Modal
      isOpen={modalOpen}
      centered={true} >
      <form>
        <ModalHeader>Please input your nickname</ModalHeader>
        <ModalBody>
          <input
            id="nickname"
            type="text"
            className="form-control"
            onChange={e => setNick(e.target.value)}
            required
            maxLength={15}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit">Confirm</Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
```

Alright, we have our modal now, but nothing happens when we click submit we're going to have to set up a function to handle that event.

```typescript
  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the form from refreshing the page.
    e.preventDefault();

    // Close the modal
    setModalOpen(false);

    // Pass our completed nickname up to the parent Chat component
    props.setNick(nick);

    // Send a new message to our server that a new user has connected.
    props.hubConnection!.send('addnewuser', nick);
  }
```
Okay, so the main thing to understand that's happening in this function is that we're using props that were passed down from our parent component, namely our `HubConnection` and a `setNick` function so we can pass our client's nickname back up. We need to split up these components so that our entire chat doesn't re-render every time our state changes in a child component.

Now, let's add this function to our modal.

```typescript
<Modal>
    isOpen={modalOpen}
    centered={true}
    onSubmit={handleModalSubmit}
...
</Modal>
```
We're done with our modal component - awesome! Now, let's add it to our Chat component.

In `Chat.tsx`, let's import our new component, and a `Container` from Reactstrap.

```typescript
import { Container } from 'reactstrap';
import { NickModal } from './NickModal';
```

Now, we're going to add a state variable for our nickname.

```typescript
export function Chat() {
const [nick, setNick] = useState<string>();
const [hubConnection, setHubConnection] = useState<HubConnection>();
...
}
```

Finally, add our `NickModal` component in our return statement!

```typescript
return (
<Container>
    <NickModal hubConnection={hubConnection} setNick={setNick} />
</Container>
)
```
Our `Chat.tsx` file should look like this now:

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

In the next part, we'll finish off the client side by adding a chat box to display our messages.