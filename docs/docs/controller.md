---
title: First Controller
---

## Creating your first controller

Right click on the project and select Add -> New Item

In the window that appears select new API Controller Class - Empty

Move this into the Controllers folder

### Exercise

- Add a GET request to path `/api/clock/now` that returns the current time
- Poll this time on the frontend and display it

### Final Result

```csharp
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Reflection.Metadata.Ecma335;

namespace Stackworx.Workshop.Controllers
{
    [Route("api/clock")]
    [ApiController]
    public class ClockController : ControllerBase
    {
        [HttpGet]
        public ActionResult<DateTime> Get()
        {
            return DateTime.Now;
        }
    }
}

```

Now lets add a variable that selects wether to return UTC or Local server time

```csharp
Get([FromQuery] bool utc = false)
```

Navigate to `https://localhost:5001/api/clock?utc=true` and you should see the time change

The server is still not responding on `/api/clock/now`

Lets fix that by adding a `[Route("now")]` decorator to the method

Final Code

```csharp
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Stackworx.Workshop.Controllers
{
    [Route("api/clock")]
    [ApiController]
    public class ClockController : ControllerBase
    {
        [HttpGet]
        [Route("now")]
        public ActionResult<DateTime> Get([FromQuery] bool utc = false)
        {
            if (utc) {
                return DateTime.UtcNow;
            } else
            {
                return DateTime.Now;
            }

        }
    }
}
```

Now lets call this api from React

### References

- [Controllers](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/actions?view=aspnetcore-3.1)
