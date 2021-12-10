using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace NeedsCalloutsWebsite
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        /*
         *  The environment that the application is running in.  To get the
         *  environment name, use '_env.EnvironmentName'.
         *
         *  If you are debugging the application within visual studio, then the
         *  environment variable is set to 'Development' by default.
         *
         *  If you are running this on a local server for testing, then the
         *  EnvironmentName is set to the value you have configured in your
         *  environment variable for ASPNETCORE_ENVIRONMENT, which should be
         *  'Staging'
         *
         *  If this is running on the production server, then the
         *  EnvironmentName is set to the value configured on that server for
         *  the environment variable ASPNETCORE_ENVIRONMENT, which should be
         *  'Production'
        */
        private IWebHostEnvironment _env;


        public Startup(IWebHostEnvironment env)
        {
            /*
             *  Instead of using the IConfiguration object that is passed by
             *  default in the StartUp constructor, we're going to build our own
             *  IConfiguration object.  THe reason we are doing this is because
             *  the default IConfiguration only uses the appsettings.json file.
             *  By building our own, we can load in additional configuration
             *  .json files that we have created.
             */
            var builder = new ConfigurationBuilder()
               .SetBasePath(env.ContentRootPath)
               .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
               .AddJsonFile($"appsettings.{env.EnvironmentName.ToLower()}.json", optional: true, reloadOnChange: true);

            //  Build the configuration
            Configuration = builder.Build();

            //  Cache reference to IWebHostEnvironment
            _env = env;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
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
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
