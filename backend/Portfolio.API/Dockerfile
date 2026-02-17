FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["Portfolio.API.csproj", "./"]
RUN dotnet restore "Portfolio.API.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Portfolio.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Portfolio.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
ENV ASPNETCORE_HTTP_PORTS=8080
EXPOSE 8080
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Portfolio.API.dll"]
