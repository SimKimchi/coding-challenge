using Microsoft.AspNetCore.Mvc;
using NinjAPI.Models;
using NinjAPI.Services;
using NinjAPI.Validators;

namespace NinjAPI.Controllers
{
	[Route("/ninjify")]
	[ApiController]
	public class NinjifyController : ControllerBase
	{
		private readonly INinjaService _ninjaService;
		private readonly IBuzzwordValidator _buzzwordValidator;

		public NinjifyController(INinjaService ninjaService, IBuzzwordValidator buzzwordValidator)
		{
			_ninjaService = ninjaService;
			_buzzwordValidator = buzzwordValidator;
		}

		// GET ninjify?x=buzz,words
		public ActionResult<string> GetNinjaName(string x)
		{
			var validationResult = _buzzwordValidator.Validate(x);

			if (!validationResult.isValid)
			{
				return BadRequest(validationResult.errorMessage);
			}

			NinjaModel ninja = _ninjaService.CreateNinja(x);

			return Ok(ninja);
		}
	}
}
