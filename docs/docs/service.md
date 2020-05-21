---
title: Service
---

## Creating your first service

The previous code works well enough but we don't want to end up with all our logic inside of controllers.
We should rather build shared re-usable services

Let's move the logic out of the controller

Right click on the project and select Add -> New Folder
Create a folder named `Services`

Right click on the project and select Add -> New Item and Select an empty class.
Name it Clock.cs
Move this class into Services and update its namespace

You should have something like this

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stackworx.Workshop.Services
{
    public class Clock
    {
    }
}
```

Let's create a new method matching the logic from our controller

Once that is done add a constructor to the Controller so that we can create an instance of our `Clock` service

```csharp
private readonly Clock clock;

public ClockController()
{
    this.clock = new Clock();
}
```

Update your controller to use this method instead

### References

- [Dependency Injection](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/?view=aspnetcore-3.1&tabs=windows#dependency-injection-services)
