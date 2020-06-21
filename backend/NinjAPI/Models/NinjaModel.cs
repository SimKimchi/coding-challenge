namespace NinjAPI.Models
{
	/// <summary>
	/// The domain model, representing a ninja.
	/// </summary>
	public class NinjaModel
	{
		public string Name { get; set; }

		public NinjaModel(string name)
		{
			Name = name;
		}
	}
}