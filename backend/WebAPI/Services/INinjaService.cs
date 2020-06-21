using NinjAPI.Models;

namespace NinjAPI.Services
{
	public interface INinjaService
	{
		NinjaModel createNinja(string buzzwords);
	}
}