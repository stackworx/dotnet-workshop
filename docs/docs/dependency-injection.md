---
title: Dependency Injection
---

## Dependency Injection

Creating an instance of clock in the constructor works but it can become cumbersome when your controller uses many services.
To solve this problem we use dependency injection or inversion of control.

We will register the Clock service as a singleton in `Startup.cs`. In the ConfigureServices Method add the following code

```csharp
services.AddSingleton<Clock, Clock>();
```

You may have to add the import

```csharp
using Stackworx.Workshop.Services;
```

Now we can change our constructor too

```csharp
public ClockController(Clock clock)
{
    this.clock = clock;
}
```

Restart the application and everything should continue to work as expected

## Adding an Interface

This is not very useful on its own. More often we generate interfaces for our services so that we can hide the implementation details.

Right click on the project and add an new item. This time select Interface. Name it `IClock.cs`.
Change our clock to implement this interface and give it a single interface method

```csharp
class Clock : IClock

public interface IClock
{
    DateTime Now(bool utc);
}
```

You will have to mark the `Now()` method as virtual

And finally change all references to `Clock` to `IClock` and update the service registration

```csharp
services.AddSingleton<IClock, Clock>();
```

Restart the application and confirm everything works

### References

- [Dependency Injection](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1)
- [Service Lifetimes](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1#service-lifetimes)
