using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly Services.IEmailService _emailService;

    public ContactController(Services.IEmailService emailService)
    {
        _emailService = emailService;
    }

    [HttpPost]
    public async Task<IActionResult> SendMessage([FromBody] ContactMessage message)
    {
        try
        {
            await _emailService.SendEmailAsync(message);
            Console.WriteLine($"Message sent from {message.Name}");
            return Ok(new { success = true, step = "Message sent successfully!" });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error sending email: {ex.Message}");
            return StatusCode(500, new { success = false, message = "Failed to send email." });
        }
    }
}
