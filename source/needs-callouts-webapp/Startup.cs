using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NeedsCallouts.Models;

namespace NeedsCallouts
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        /*
         *  The environment that the application is running in.  To get the
         *  environment name, use '_env.EnvironmentName'.
         *
         *  If you are debugging hte application with visual studio or vscode,
         *  then the environment variable is set to 'Development' by default.
         *
         *  If you are running this on your local IIS server, then the
         *  EnvironmentName is set ot eh value you have configured in your
         *  environment variable for ASPNETCORE_ENVIRONMENT, which should be 
         *  'Staging*
         *
         *  If this is running on the production server, then EnvironmentName
         *  is set to the value configured on the server for the environment
         *  variable ASPNETCORE_ENVIRONMENT, which should be 'Production'
        */
        private IWebHostEnvironment _env;

        public Startup(IWebHostEnvironment env)
        {
            //  Cache the IWebHostEnvironment value
            _env = env;

            //  Manually create the IConfiguration object by loading in the
            //  .json configuration files we need for this application, with
            //  environment specific overrides where needed.
            IConfigurationBuilder builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName.ToLower()}.json", optional: true, reloadOnChange: true)
                .AddJsonFile("metadata.json", optional: false, reloadOnChange: true);

            //  Build the configuations
            Configuration = builder.Build();
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();

            //  Get the meta data configuration and set it up for dependency
            //  injection
            MetaDataCollection metaData = Configuration.GetSection("Metadata").Get<MetaDataCollection>();
            services.AddSingleton<MetaDataCollection>(metaData);

            //  Force url generation to be lower case. I just think it looks
            //  better.
            services.Configure<RouteOptions>(options =>
            {
                options.LowercaseUrls = true;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
            });
        }
    }
}
