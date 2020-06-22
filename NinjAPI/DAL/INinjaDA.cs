using System.Collections.Generic;

namespace NinjAPI.DAL
{
    public interface INinjaDA
    {
        List<string> GetNinjaAdjectives();
        List<string> GetNinjaNames();
        List<string> GetAwesomeList();
    }
}
