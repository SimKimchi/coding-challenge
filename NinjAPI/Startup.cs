using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NinjAPI.DAL;
using NinjAPI.Services;
using NinjAPI.Validators;

namespace NinjAPI
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    /// <summary>
    /// Configures dependency injection.
    /// </summary>
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddControllersWithViews();

      services.AddSingleton<INinjaService, NinjaService>();
      services.AddSingleton<INinjaDA, NinjaDA>();
      services.AddSingleton<IBuzzwordValidator, BuzzwordValidator>();

      services.AddSpaStaticFiles(configuration =>
      {
        configuration.RootPath = "../dist";
      });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseExceptionHandler("/Error");
        app.UseHsts();
      }

      app.UseCors(options => options.AllowAnyOrigin());
      app.UseHttpsRedirection();
      app.UseStaticFiles();
      if (!env.IsDevelopment())
      {
        app.UseSpaStaticFiles();
      }

      app.UseRouting();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllerRoute(
                  name: "default",
                  pattern: "");
      });

      app.UseSpa(spa =>
      {
        spa.Options.SourcePath = "../";

        if (env.IsDevelopment())
        {
          spa.UseAngularCliServer(npmScript: "start");
        }
      });
    }
  }
}
