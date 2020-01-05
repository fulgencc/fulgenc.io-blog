---
title: Useful React Resources
date: "2020-01-03T22:12:03.284Z"
description: "Some useful resources and articles I found online. I keep this updated so make sure you check back!"
---

Hi everyone, and welcome to my blog! I made this blog in an effort to help any people who might be as lost as I was when trying to find a place to start learning web development. I hope that by documenting my experiences it will help those that may find themselves lost. And trust me - *you are definitely not alone*! 

I'd like to start off by saying before I started working, I had no prior exposure to any web development. In college, I was mainly creating console applications. Hopefully this will serve as a good starting point for people who are just getting into React and front-end development. 

I think I'll make a separate blog post eventually explaining what React is and why it's such a great library, and then eventually get into the bigger picture of how this all fits in with web development. For now, I'm just going to list the resources that I've used that have helped me learn React.

##Useful React Resources

####Where Do I Start?

![Confused](/confused.gif)

Honestly, the React team did a great job with their [own documentation](https://reactjs.org/docs/). Start there!! It might take a while to understand, but trust me when I say that all of the main concepts they go over are *very* beneficial to learn, and definitely necessary once you start developing your own applications.

####Create React App

For me, hands on development is a big part of how I learn. React is great because it can be extended across multiple toolchains, and even into existing websites! Starting off, though, I would recommend using [Create React App](https://create-react-app.dev/). This is Facebook's boilerplate environment and it's very beginner friendly. Personally, I like using Typescript with my frontend development and I highly recommend using it. Luckily, the Create React App team added a built in way to use Typescript when creating your project. See more info [here](https://create-react-app.dev/docs/adding-typescript/).

####State and Lifecycle

If there's one thing that I could emphasize within React's main concepts, it would definitely be the [state and lifecycle of components](https://reactjs.org/docs/state-and-lifecycle.html). It's necessary to know the component lifecycle when you want to debug your components, and if you want to understand how React is rendering your application. If you don't understand the lifecycle, optimizing for performance will be a pain, and you'll run into a lot of issues that may not be caught by the compiler.

####React Developer Tools

If you haven't already, download [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) ([or FireFox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))! I'm just going to quote the description of it on the Chrome web store.

> React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React component hierarchies in the Chrome Developer Tools.
>
> You will get a new tab called React in your Chrome DevTools. This shows you the root React components that were rendered on the page, as well as the subcomponents that they ended up rendering.
>
> By selecting one of the components in the tree, you can inspect and edit its current props and state in the panel on the right. In the breadcrumbs you can inspect the selected component, the component that created it, the component that created that one, and so on.
>
> If you inspect a React element on the page using the regular Elements tab, then switch over to the React tab, that element will be automatically selected in the React tree.

If you want a deeper dive into the dev tools, check out [this sweet post from Alligator.io](https://alligator.io/react/react-devtools-intro/)

####Hooks

So, it's starting to look like the new wave for creating components are using hooks within functional components. Bascially, hooks are a way to use stateful logic within functional components. Note that the React team aren't removing classes from React, so don't think that classes are dead or anything!

To be honest, I found it easier for myself to learn the component lifecycle by studying class components, since the way hooks implement the lifecycle are a little tricky if you're new and don't understand what's happening.

To read more, check out [ReactJS's Intro to Hooks](https://reactjs.org/docs/hooks-intro.html).

For a deep dive into useEffect and how the lifecycle works with hooks, check out this [amazing blog post by Dan Abramov](https://overreacted.io/a-complete-guide-to-useeffect/).

####React Cheat Sheet

Self explanitory, if you need quick references on some key methods & fundamentals, [check out this cheat sheet](https://reactcheatsheet.com/)


###Staying Up-to-Date

####Blogs
#####[Dan Abramov's Blog](https://overreacted.io/)
Dan Abramov is the creator of Redux & Create React App. His blog has all sorts of helpful frontend development tips & tricks. His posts are great reads, and relatively short.

####Podcasts
I commute to work. It takes me about an hour there and back, and a lot of the times I find myself jamming out to music in the car. Once I get home, I'm exhausted and I really only have minimal time to do whatever I want, which is usually going to the gym or just unwinding and relaxing. I thought to myself one day if there was anything I could do to be a little productive with those two hours I have in the car, and that's when I tried podcasts.

#####[React Podcast](https://reactpodcast.simplecast.fm/)
Great podcast that keeps you up to date with the latest going ons in the React universe.

#####[React Round Up](https://player.fm/series/react-round-up)
Good podcast for beginners, mainly focusing around React in the workplace.

##Conclusion

That's it for now! I'm going to be updating these resources and organizing them better in the coming weeks. Stay tuned!