using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private static readonly List<Project> Projects = new()
    {
        new Project
        {
            Id = 1,
            Title = "Neon Cyberpunk UI",
            Description = "A futuristic UI kit designed for next-gen web applications.",
            ImageUrl = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
            Tags = new List<string> { "React", "Tailwind", "Design" }
        },
        new Project
        {
            Id = 2,
            Title = "Abstract 3D Visualizer",
            Description = "Interactive 3D experience using Three.js and WebGL.",
            ImageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
            VideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-connected-world-12711-large.mp4", 
            Tags = new List<string> { "Three.js", "WebGL", "Creative" }
        },
        new Project
        {
            Id = 3,
            Title = "Minimalist E-Commerce",
            Description = "Clean and fast e-commerce platform built with .NET and React.",
            ImageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            Tags = new List<string> { ".NET", "E-Commerce", "Performance" }
        },
          new Project
        {
            Id = 4,
            Title = "AI Dashboard",
            Description = "Data visualization dashboard powered by AI analytics.",
            ImageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            Tags = new List<string> { "AI", "Dashboard", "Data Viz" }
        }
    };

    [HttpGet]
    public ActionResult<IEnumerable<Project>> GetProjects()
    {
        return Ok(Projects);
    }
}
