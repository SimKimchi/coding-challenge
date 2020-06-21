using System.Collections.Generic;

namespace NinjAPI.DTO
{
	/// <summary>
	/// A Data Transfer Object which allows access to the JSON data.
	/// </summary>
	public class NinjaDTO
	{
		public List<string> NinjaNames { get; set; }
		public List<string> NinjaAdjectives { get; set; }
	}
}