using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using Portfolio.API.Configurations;
using Portfolio.API.Models;

namespace Portfolio.API.Services;

public class EmailService : IEmailService
{
    private readonly EmailSettings _settings;

    public EmailService(IOptions<EmailSettings> settings)
    {
        _settings = settings.Value;
    }

    public async Task SendEmailAsync(ContactMessage message)
    {
        var email = new MimeMessage();
        email.From.Add(new MailboxAddress("Portfolio Contact Form", _settings.FromEmail));
        email.To.Add(new MailboxAddress("Me", _settings.FromEmail)); // Envio a mi mismo 
        email.Subject = $"New Message from {message.Name}";

        var builder = new BodyBuilder
        {
            HtmlBody = $@"
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> {message.Name}</p>
                <p><strong>Email:</strong> {message.Email}</p>
                <p><strong>Message:</strong></p>
                <p>{message.Message}</p>
            "
        };

        email.Body = builder.ToMessageBody();

        using var smtp = new SmtpClient();
        try
        {
            await smtp.ConnectAsync(_settings.Host, _settings.Port, SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(_settings.Username, _settings.Password);
            await smtp.SendAsync(email);
        }
        finally
        {
            await smtp.DisconnectAsync(true);
        }
    }
}
