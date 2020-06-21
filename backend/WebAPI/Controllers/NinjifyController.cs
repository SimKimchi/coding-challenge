using Microsoft.AspNetCore.Mvc;
using NinjAPI.Models;
using NinjAPI.Services;

namespace NinjAPI.Controllers
{
	[Route("/ninjify")]
	[ApiController]
	public class NinjifyController : ControllerBase
	{
		private readonly INinjaService _ninjaService;

		public NinjifyController(INinjaService ninjaService)
		{
			_ninjaService = ninjaService;
		}

		// GET ninjify?x=buzz,words
		public ActionResult<string> GetNinjaName(string x)
		{
			if (string.IsNullOrEmpty(x))
			{
				return null;
			}

			NinjaModel ninja = _ninjaService.createNinja(x);

			return Ok(ninja);
		}
	}
}
