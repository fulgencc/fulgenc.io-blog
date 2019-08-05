---
title: React/Typescript with SignalR Chat App Part 4 (Server Side)
date: "2019-08-04T22:40:32.169Z"
---

Hello, welcome back to the fourth and final part of my tutorial. By now, you should have a functioning front end. In this part, we're going to be building the server side to connect our clients!

First off, let's start by making a new Visual Studio web application.

Create a new ASP.NET Core Web Application in Visual Studio. Name it `chat-app-server`.

After this, you'll need to add the SignalR to your project. Go to Tools -> NuGet Package Manager -> Manage NuGet Packages for this Solution. Search for SignalR and `Microsoft.AspNet.SignalR`.

Now, we'll need to make a Hub for our clients. Create a new class in your project named `ChatHub.cs`. 

Make your `ChatHub` class inherit off the `Hub` SignalR class. Your project should look like the following. 

```csharp
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

public class ChatHub : Hub
{

}
```

Now, let's add methods to our `ChatHub` class. We'll need a method for sending messages to our clients, and to handle when a new user has connected.

```csharp
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

public class ChatHub : Hub
{
    public void SendToAll(string name, string message)
    {
        Clients.All.SendAsync("sendtoall", name, message);
    }

    public void AddNewUser(string userName)
    {
        Clients.All.SendAsync("newuserconnected", userName);
    }
}
```

Now, we'll need to add SignalR to our services in `Startup.cs`. Navigate to your `Startup.cs` files and add the following line to the `ConfigureServices` method.

```csharp
servies.AddSignalR();
```

Now, add the following line to the `Configure` method in `Startup.cs`

```csharp
            app.UseSignalR(routes =>
            {
                routes.MapHub<ChatHub>("/chat");
            });
```

Your `Startup.cs` should look something like this:

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace chat_app_server
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSignalR();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSignalR(routes =>
            {
                routes.MapHub<ChatHub>("/chat");
            });

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }
    }
}
```

Now, run your application! Take note of the URL of your server side application, as this will be the URL you will need to put in to your `HubConnectionBuilder` in your client app.

In your client app, add the URL to this location:

```typescript
            const hubConnect = new HubConnectionBuilder()
                .withUrl('YOUR_HOSTNAME_HERE/chat')
                .build();
```

We added the `/chat` to our SignalR routes, so you'll need to add this to the end of the URL.

And we're done! To see the finished product, you can [view it on my GitHub.](https://github.com/fulgencc/chat-app-server)

Until next time!