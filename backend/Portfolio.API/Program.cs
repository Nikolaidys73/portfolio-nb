var builder = WebApplication.CreateBuilder(args);


builder.Services.Configure<Portfolio.API.Configurations.EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
builder.Services.AddTransient<Portfolio.API.Services.IEmailService, Portfolio.API.Services.EmailService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder.AllowAnyOrigin() 
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

var app = builder.Build();

// HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
