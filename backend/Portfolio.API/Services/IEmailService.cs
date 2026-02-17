using Portfolio.API.Models;

namespace Portfolio.API.Services;

public interface IEmailService
{
    Task SendEmailAsync(ContactMessage message);
}
