FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app

COPY ./WebAPI.csproj ./
RUN dotnet restore ./WebAPI.csproj
COPY . .
RUN dotnet build WebAPI.csproj -c Release -o out

FROM build AS publish
RUN dotnet publish WebAPI.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "WebAPI.dll"]