using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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
			services.AddSingleton<INinjaService, NinjaService>();
			services.AddSingleton<INinjaDA, NinjaDA>();
			services.AddSingleton<IBuzzwordValidator, BuzzwordValidator>();

			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseHsts();
			}

			app.UseCors(options => options.AllowAnyOrigin());
			app.UseHttpsRedirection();
			app.UseMvc();
		}
	}
}
