using NinjAPI.Models;

namespace NinjAPI.Services
{
  public interface INinjaService
  {
    NinjaModel CreateNinja(string buzzwords);
  }
}